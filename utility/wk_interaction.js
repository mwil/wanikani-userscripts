/* jshint esversion: 6 */

// You can listen to the following custom events from this module:
//
// keisei_wk_subject_ready   args: (curPage)
//
// The "subject" of a page is ready and can be accessed via `getSubject()`.
// For content pages like the kanji and radical pages this will be triggered
// instantly to get the radical and kanji as a string. For the lessons and
// reviews we have to wait for the information folds to appear. We wait for
// these elements using a `MutationObserver`. The callback will get the pageType
// as an additional argument.
//
//
// wk_new_review_item_ready
//
// During a review a new question is visible, i.e., a review session started
// with the first review or another question was answered previously.
//
// wk_review_answered
//
// A review question was answered and not ignored.
//

// #############################################################################
function WKInteraction()
{
    this.PageEnum = Object.freeze({ "unknown":0, "radicals":1, "kanji":2, "reviews":3, "reviews_summary":4, "lessons":5, "lessons_reviews":6 });
    this.curPage = this.PageEnum.unknown;

    this.lastQuestionCount = 0;
    this.lastQuestionAnswered = false;
    this.lastItem = null;
    this.lastQType = null; // meaning, reading

    // Monitor review sessions
    // -- item completed: activeQueue updated
}
// #############################################################################

// #############################################################################
(function() {
   "use strict";

    // #########################################################################
    WKInteraction.prototype = {
        constructor: WKInteraction,

        init: function()
        {
            this.lessonInfoObserver = new MutationObserver(this.lessonInfoCallback.bind(this));
            this.reviewInfoObserver = new MutationObserver(this.reviewInfoCallback.bind(this));

            this.bound_currentItem =   this.newReviewItemCallback.bind(this);
            this.bound_questionCount = this.questionCountCallback.bind(this);
            $.jStorage.listenKeyChange(`currentItem`,   this.bound_currentItem);
            $.jStorage.listenKeyChange(`questionCount`, this.bound_questionCount);

            $(document).trigger(`wk_interaction_init`);
            $(document).on(`wk_interaction_init`, this.deactiveEvents.bind(this));
        },
        // #####################################################################

        // If multiple instances of WKInteraction are present the events are
        // duplicated, just deactivate all events from existing interactions.
        // #####################################################################
        deactiveEvents: function(event)
        {
            console.log("Deactivating one WK Interaction instance to prevent interference.");
            this.lessonInfoObserver.disconnect();
            this.reviewInfoObserver.disconnect();

            $.jStorage.stopListening(`currentItem`,   this.bound_currentItem);
            $.jStorage.stopListening(`questionCount`, this.bound_questionCount);

            return true;
        },
        // #####################################################################

        // #####################################################################
        detectCurPage: function()
        {
            if (/\/radicals\/./.test(document.URL))   /* Radical Pages */
            {
                this.curPage = this.PageEnum.radicals;
                $(document).triggerHandler(`keisei_wk_subject_ready`, [this.PageEnum.radicals]);
            }
            else if (/\/kanji\/./.test(document.URL)) /* Kanji Pages */
            {
                this.curPage = this.PageEnum.kanji;
                $(document).triggerHandler(`keisei_wk_subject_ready`, [this.PageEnum.kanji]);
            }
            else if (/\/review\/session/.test(document.URL)) /* Reviews Pages */
            {
                this.curPage = this.PageEnum.reviews;
                this.reviewInfoObserver.observe(document.getElementById(`item-info-col2`), {childList: true});
            }
            else if (/\/review/.test(document.URL)) /* Reviews Summary Page then? */
            {
                this.curPage = this.PageEnum.reviews_summary;
            }
            else if (/\/lesson/.test(document.URL)) /* Lessons Pages */
            {
                this.curPage = this.PageEnum.lessons;
                this.lessonInfoObserver.observe(document.getElementById(`supplement-rad`), {attributes: true});
                this.lessonInfoObserver.observe(document.getElementById(`supplement-kan`), {attributes: true});
                // Observer for the reviews after lessons, thankfully equal to normal reviews!
                this.lessonInfoObserver.observe(document.getElementById(`item-info-col2`), {childList: true});
            }
            else
                this.curPage = this.PageEnum.unknown;

            if (this.curPage !== this.PageEnum.unknown)
                $(document).trigger(`wk_page_ready`, [this.curPage]);
        },
        // #####################################################################

        // #####################################################################
        reviewInfoCallback: function(mutations)
        {
            var doTrigger = false;

            mutations.forEach( function(mutation) {
                // Length 2 for radical page, 4 for kanji page (vocab is 5)
                if (mutation.addedNodes.length === 2 || mutation.addedNodes.length === 4)
                    doTrigger = true;
            }, this);

            if (doTrigger)
                $(document).triggerHandler(`keisei_wk_subject_ready`, [this.PageEnum.reviews]);
        },
        // #####################################################################

        // #####################################################################
        lessonInfoCallback: function(mutations)
        {
            if (mutations[0].type === `attributes`)
                $(document).triggerHandler(`keisei_wk_subject_ready`, [this.PageEnum.lessons]);
            else if (mutations[0].type === `childList`)
            {
                var doTrigger = false;

                mutations.forEach( function(mutation) {
                    // Length 2 for radical page, 4 for kanji page (vocab is 5)
                    if (mutation.addedNodes.length === 2 || mutation.addedNodes.length === 4)
                        doTrigger = true;
                }, this);

                if (doTrigger)
                    $(document).triggerHandler(`keisei_wk_subject_ready`, [this.PageEnum.lessons_reviews]);
            }
        },
        // #####################################################################

        // #####################################################################
        newReviewItemCallback: function(key, action)
        {
            if (this.lastQuestionAnswered)
            {
                $(document).trigger(`wk_review_answered`, [this.lastQType, this.lastItem]);

                this.lastQuestionAnswered = false;
            }

            $(document).trigger(`wk_new_review_item_ready`);
        },
        // #####################################################################

        // #####################################################################
        questionCountCallback: function(key, action)
        {
            if ($.jStorage.get(`questionCount`) > this.lastQuestionCount)
            {
                this.lastQuestionAnswered = true;
                this.lastItem = $.jStorage.get(`currentItem`);
                this.lastQType = $.jStorage.get(`questionType`);
            }
            else
                this.lastQuestionAnswered = false;

            this.lastQuestionCount = $.jStorage.get(`questionCount`);
        },
        // #####################################################################

        // #####################################################################
        getItemType: function(item)
        {
            if (`rad` in item)
                return `rad`;
            else if (`kan` in item)
                return `kan`;
            else if (`voc` in item)
                return `voc`;
            else
                return null;
        },
        // #####################################################################

        // #####################################################################
        getSubject: function()
        {
            var result = {"rad": null, "kan": null, "voc": null};

            switch(this.curPage)
            {
                case this.PageEnum.radicals:
                    result.rad = document.URL.split(`/`).slice(-1)[0];
                    break;
                case this.PageEnum.kanji:
                    result.kan = document.title[document.title.length - 1];
                    break;
                case this.PageEnum.reviews:
                    var curItem = $.jStorage.get(`currentItem`);
                    var curType = this.getItemType(curItem);
                    // GM_log(`Getting the subject of this page, from storage:`, curItem);

                    if (curType === `kan`)
                        result.kan = curItem.kan.trim();
                    else if (curType === `rad`)
                    {
                        if (curItem.custom_font_name)
                            result.rad = curItem.custom_font_name.trim();
                        else
                            result.rad = curItem.rad.trim();
                    }
                    break;

                case this.PageEnum.lessons:
                    // TODO: handle radical lesson case
                    var kanjiNode = $(`#character`);

                    if ($(`#main-info`).hasClass(`radical`))
                    {
                        if (!$(`#character > i`).length)
                            result.rad = kanjiNode.text().trim();
                    }
                    else if ($(`#main-info`).hasClass(`kanji`))
                        result.kan = kanjiNode.text().trim();
                    break;
                default:
                    result = null;
                    break;
            }

            return result;
        },
        // #####################################################################

        // #####################################################################
        checkSubject: function(subject)
        {
            var result = false;

            Object.keys(subject).forEach( function(key) {
                if (subject[key])
                    result = true;
            });

            return result;
        }
        // #####################################################################
    };
    // #########################################################################
}());
// #############################################################################
