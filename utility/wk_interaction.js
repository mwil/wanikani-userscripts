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
    this.PageEnum = Object.freeze({ unknown:0, radicals:1, kanji:2, reviews:3, lessons:4 });

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
            this.setCurPage();
        },

        setCurPage: function()
        {
            if (/\/radicals\/./.test(document.URL))   /* Radical Pages */
            {
                this.curPage = this.PageEnum.radicals;
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
                this.review_observer.observe(document.getElementById("item-info-col2"), {childList: true});
            }
            else if (/\/lesson/.test(document.URL)) /* Lessons Pages */
            {
                this.curPage = this.PageEnum.lessons;
                this.lesson_observer.observe(document.getElementById("supplement-rad"), {attributes: true});
                this.lesson_observer.observe(document.getElementById("supplement-kan"), {attributes: true});
            }
            else
                this.curPage = this.PageEnum.unknown;
        },

        reviewCallback: function(mutations)
        {
            mutations.forEach( function(mutation) {
                // Length 2 for radical page, 4 for kanji page (vocab is 5)
                if (mutation.addedNodes.length === 2 || mutation.addedNodes.length === 4)
                    window.wk_app_callback();
            });
        },

        lessonCallback: function(mutations)
        {
            window.wk_app_callback();
        },

        getSubject: function()
        {
            var result = {"rad": null, "kan": null, "voc": null};

            switch(this.curPage)
            {
                case this.PageEnum.radicals:
                    result.rad = document.URL.split("/").slice(-1)[0];
                    break;
                case this.PageEnum.kanji:
                    result.kan = document.title[document.title.length - 1];
                    break;
                case this.PageEnum.reviews:
                    var curItem = $.jStorage.get("currentItem");
                    wk_keisei.log("Getting the subject of this page, from storage:", curItem);

                    if ("kan" in curItem)
                        result.kan = curItem.kan.trim();
                    else if ("rad" in curItem)
                    {
                        if (curItem.custom_font_name)
                            result.rad = curItem.custom_font_name.trim();
                        else
                            result.rad = curItem.rad.trim();
                    }
                    break;

                case this.PageEnum.lessons:
                    // TODO: handle radical lesson case
                    var kanjiNode = $("#character");

                    if ($("#main-info").hasClass("radical"))
                    {
                        if (!$("#character > i").length)
                            result.rad = kanjiNode.text().trim();
                    }
                    else if ($("#main-info").hasClass("kanji"))
                        result.kan = kanjiNode.text().trim();
                    break;
                default:
                    result = null;
                    break;
            }

            return result;
        },
        checkSubject: function(subject)
        {
            var result = false;

            Object.keys(subject).forEach( function(key) {
                if (subject[key])
                    result = true;
            });

            return result;
        }
    };
}());
