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
    this.PageEnum = Object.freeze({ unknown:0, kanji:1, reviews:2, lessons:3 });

    this.curPage = this.PageEnum.unknown;
}

(function() {
   "use strict";

    WKInteraction.prototype = {
        init: function()
        {
            this.curPage = this.getCurPage();
        },

        getCurPage: function()
        {
            var curPage;

            if (/\/kanji\/./.test(document.URL))    /* Kanji Pages */
                curPage = this.PageEnum.kanji;
            else if (/\/review/.test(document.URL)) /* Reviews Pages */
                curPage = this.PageEnum.reviews;
            else if (/\/lesson/.test(document.URL)) /* Lessons Pages */
                curPage = this.PageEnum.lessons;
            else
                curPage = this.PageEnum.unknown;

            return curPage;
        },

        getKanji: function()
        {
            var result = null;

            switch(this.curPage)
            {
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

