/* Retrieve the topical kanji of the current WK page (lesson, review, kanji).
 *
 * Args
 *      - curPage: one of the elements in the PageEnum
 *
 * Returns:
 *      - The kanji under scrunity
 *      - null if kanji is unavailable
 *
 */

function WKInteraction()
{
    this.PageEnum = Object.freeze({ unknown:0, radical:1, kanji:2, reviews:3, lessons:4 });

    this.curPage = this.PageEnum.unknown;
    this.lesson_observer = new MutationObserver(this.lessonCallback);
    this.review_observer = new MutationObserver(this.reviewCallback);
}

(function() {
   "use strict";

    WKInteraction.prototype = {
        init: function(wk_app_callback)
        {
            window.wk_app_callback = wk_app_callback;
            this.getCurPage();
        },

        getCurPage: function()
        {
            if (/\/radicals\/./.test(document.URL))    /* Radical Pages */
            {
                this.curPage = this.PageEnum.radical;
                window.wk_app_callback();
            }
            else if (/\/kanji\/./.test(document.URL)) /* Kanji Pages */
            {
                this.curPage = this.PageEnum.kanji;
                window.wk_app_callback();
            }
            else if (/\/review/.test(document.URL)) /* Reviews Pages */
            {
                this.curPage = this.PageEnum.reviews;
                this.review_observer.observe(document.getElementById("item-info"), {attributes: true});
            }
            else if (/\/lesson/.test(document.URL)) /* Lessons Pages */
            {
                this.curPage = this.PageEnum.lessons;
                this.lesson_observer.observe(document.getElementById("supplement-kan"), {attributes: true});
            }
            else
                this.curPage = this.PageEnum.unknown;
        },

        reviewCallback: function(mutations)
        {
            if (mutations.length != 2)
                return;

            window.wk_app_callback();
        },

        lessonCallback: function(mutations)
        {
            window.wk_app_callback();
        },

        getSubject: function()
        {
            var result = null;

            switch(this.curPage)
            {
                case this.PageEnum.radical:
                    result = document.URL.split("/").slice(-1)[0];
                    break;
                case this.PageEnum.kanji:
                    result = document.title[document.title.length - 1];
                    break;

                case this.PageEnum.reviews:
                    var curItem = $.jStorage.get("currentItem");

                    if ("kan" in curItem)
                        result = curItem.kan.trim();
                    break;

                case this.PageEnum.lessons:
                    var kanjiNode = $("#character");

                    if (kanjiNode.length === 1)
                        result = kanjiNode.text().trim();
                    break;
            }

            return result;
        }
    };
}());

