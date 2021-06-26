/* jshint esversion: 6 */

// TODO: info on namespacing
// You can listen to the following custom events from this module:
//
// wk_subject_ready   args: (curPage)
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
// wk_review_session_finished
//

// #############################################################################
function WKInteraction(namespace)
{
    this.namespace = namespace;

    this.PageEnum = Object.freeze({
        "unknown": 0,
        "radicals": 1,
        "kanji": 2,
        "vocabulary": 3,
        "reviews": 4,
        "reviews_summary": 5,
        "lessons": 6,
        "lessons_reviews": 7
    });

    this.curPage = this.PageEnum.unknown;

    this.lastQuestionCount = 0;
    this.lastWrongCount = 0;

    this.lastQuestionAnswered = false;

    this.lastItem = null;
    this.lastQType = null; // meaning, reading
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
            this.lessonInfoObserver  = new MutationObserver(this.lessonInfoCallback.bind(this));
            this.reviewInfoObserver  = new MutationObserver(this.reviewInfoCallback.bind(this));
            this.reviewStartObserver = new MutationObserver(this.reviewStartCallback.bind(this));


            // TODO: removal didn't work, store the functions for now ...
            this.bound_currentItem   = this.newReviewItemCallback.bind(this);
            this.bound_questionCount = this.questionCountCallback.bind(this);
            $.jStorage.listenKeyChange(`currentItem`,   this.bound_currentItem);
            $.jStorage.listenKeyChange(`questionCount`, this.bound_questionCount);
        },
        // #####################################################################

        // #####################################################################
        detectCurPage: function()
        {
            if (/\/radicals\/./.test(document.URL))   /* Radical Pages */
                this.curPage = this.PageEnum.radicals;
            else if (/\/kanji\/./.test(document.URL)) /* Kanji Pages */
                this.curPage = this.PageEnum.kanji;
            else if (/\/vocabulary\/./.test(document.URL)) /* Vocab Pages */
                this.curPage = this.PageEnum.vocabulary;
            else if (/\/review\/session/.test(document.URL)) /* Reviews Pages */
                this.curPage = this.PageEnum.reviews;
            else if (/\/review/.test(document.URL)) /* Reviews Summary Page then? */
                this.curPage = this.PageEnum.reviews_summary;
            else if (/\/lesson\/./.test(document.URL)) /* Lessons Pages */
                this.curPage = this.PageEnum.lessons;
            else
                this.curPage = this.PageEnum.unknown;

            return this.curPage;
        },
        // #####################################################################

        // #####################################################################
        startInteraction: function()
        {
            this.detectCurPage();

            switch(this.curPage)
            {
                case this.PageEnum.radicals:
                    $(document).triggerHandler(`${this.namespace}_wk_subject_ready`,
                                               [this.PageEnum.radicals]);
                    break;
                case this.PageEnum.kanji:
                    $(document).triggerHandler(`${this.namespace}_wk_subject_ready`,
                                               [this.PageEnum.kanji]);
                    break;
                case this.PageEnum.vocabulary:
                    $(document).triggerHandler(`${this.namespace}_wk_subject_ready`,
                                               [this.PageEnum.vocabulary]);
                    break;
                case this.PageEnum.reviews:
                    this.reviewInfoObserver.observe(document.getElementById(`item-info-col2`),
                                                    {childList: true});
                    // reviews are not ready after load, wait until the WK animation finishes.
                    this.reviewStartObserver.observe(document.getElementById(`loading`),
                                                     {attributes: true});

                    $(window).on(`beforeunload`, this.reviewEndCallback.bind(this));
                    break;
                case this.PageEnum.reviews_summary:
                    break;
                case this.PageEnum.lessons:
                    this.lessonInfoObserver.observe(document.getElementById(`supplement-rad`), {attributes: true});
                    this.lessonInfoObserver.observe(document.getElementById(`supplement-kan`), {attributes: true});
                    this.lessonInfoObserver.observe(document.getElementById(`supplement-voc`), {attributes: true});
                    // Observer for the reviews after lessons, thankfully equal to normal reviews!
                    this.lessonInfoObserver.observe(document.getElementById(`item-info-col2`), {childList: true});
                    break;
                default:
                    return;
            }

            if (this.curPage !== this.PageEnum.unknown &&
                this.curPage !== this.PageEnum.reviews)
                $(document).trigger(`${this.namespace}_wk_page_ready`, [this.curPage]);
        },
        // #####################################################################

        // #####################################################################
        reviewStartCallback: function(mutations)
        {
            // The last change has three elements, use that for now
            if (mutations.length !== 3)
                return;

            $(document).trigger(`${this.namespace}_wk_page_ready`, [this.curPage]);
        },
        // #####################################################################

        // #####################################################################
        reviewEndCallback: function(event)
        {
            const wasWrongAnswer = this.lastWrongCount < $.jStorage.get(`wrongCount`);

            if (this.lastQuestionAnswered)
                $(document).trigger(`${this.namespace}_wk_review_answered`,
                                    [wasWrongAnswer, this.lastQType, this.lastItem]);

            $(document).trigger(`${this.namespace}_wk_review_session_finished`);
        },
        // #####################################################################

        // #####################################################################
        reviewInfoCallback: function(mutations)
        {
            let doTrigger = false;

            mutations.forEach(
                function(mutation) {
                    // Length 5 for radical page, 9 for kanji page (vocab is 11)
                    if ([5, 9, 11].includes(mutation.addedNodes.length))
                        doTrigger = true;
                },
                this
            );

            if (doTrigger)
                $(document).triggerHandler(`${this.namespace}_wk_subject_ready`,
                                           [this.PageEnum.reviews]);
        },
        // #####################################################################

        // #####################################################################
        lessonInfoCallback: function(mutations)
        {
            if (mutations[0].type === `attributes`)
                $(document).triggerHandler(`${this.namespace}_wk_subject_ready`,
                                           [this.PageEnum.lessons]);
            else if (mutations[0].type === `childList`)
            {
                let doTrigger = false;

                mutations.forEach(
                    function(mutation) {
                        // Length 5 for radical page, 9 for kanji page (vocab is 11)
                        if ([5, 9, 11].includes(mutation.addedNodes.length))
                            doTrigger = true;
                    },
                    this
                );

                if (doTrigger)
                    $(document).triggerHandler(`${this.namespace}_wk_subject_ready`,
                                               [this.PageEnum.lessons_reviews]);
            }
        },
        // #####################################################################

        // #####################################################################
        newReviewItemCallback: function(key, action)
        {
            const wasWrongAnswer = this.lastWrongCount < $.jStorage.get(`wrongCount`);
            this.lastWrongCount = $.jStorage.get(`wrongCount`);

            if (this.lastQuestionAnswered)
            {
                $(document).trigger(`${this.namespace}_wk_review_answered`,
                                    [wasWrongAnswer, this.lastQType, this.lastItem]);

                this.lastQuestionAnswered = false;
            }

            $(document).trigger(`${this.namespace}_wk_new_review_item_ready`);
        },
        // #####################################################################

        // The questionCount is changed once a question is answered. However,
        // this value might also me decreased by the ignore script, so we
        // keep track if the last change was an increase.
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
            let result = {"rad": null, "kan": null, "voc": null};

            switch(this.curPage)
            {
                case this.PageEnum.radicals:
                    result.rad = document.URL.split(`/`).slice(-1)[0];
                    result.rad = result.rad.replace("#", "");
                    break;
                case this.PageEnum.kanji:
                    result.kan = document.title[document.title.length - 1];
                    break;
                case this.PageEnum.vocabulary:
                    result.voc = decodeURIComponent(document.URL.split(`/`).slice(-1)[0]);
                    break;
                case this.PageEnum.reviews:
                    const curItem = $.jStorage.get(`currentItem`);
                    const curType = this.getItemType(curItem);

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
                    else if (curType === `voc`)
                        result.voc = curItem.voc.trim();

                    break;

                case this.PageEnum.lessons:
                    const $character = $(`#character`);

                    if ($(`#main-info`).hasClass(`radical`))
                    {
                        // Fixed for elf radical: grab the meaning instead
                        if (!$(`#character > i`).length)
                            if ($character.text().length)
                                result.rad = $character.text().trim();
                            else
                                result.rad = $(`#main-info > #meaning`)
                                    .text().trim().replace(" ", "-").toLowerCase();
                        else
                            result.rad = $(`#character > i`).attr(`class`).slice(8);
                    }
                    else if ($(`#main-info`).hasClass(`kanji`))
                        result.kan = $character.text().trim();
                    else if ($(`#main-info`).hasClass(`vocabulary`))
                        result.voc = $character.text().trim();
                    break;

                default:
                    result = null;
                    break;
            }

            return result;
        },
        // #####################################################################

        // Check if at least one data element in subject is set
        // #####################################################################
        checkSubject: function(subject, white_list)
        {
            let result = false;

            Object.keys(subject).forEach(
                function(key) {
                    if (white_list.includes(key) && !!subject[key])
                        result = true;
                }
            );

            return result;
        }
        // #####################################################################
    };
    // #########################################################################
}());
// #############################################################################
