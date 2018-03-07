/* jshint esversion: 6 */

(function()
{
    "use strict";

    // #########################################################################
    // Template strings with es6 features for the various explanations (first
    // paragraph for every information field).
    //
    // Inspired from https://stackoverflow.com/a/39065147/2699475
    WK_Keisei.prototype.explanation_non_radical = (subject) =>
       `<p>This radical is not considered a phonetic mark!</p>`;

    WK_Keisei.prototype.explanation_radical = (subject, preadings) =>
       `<p>The radical 「${subject.phon}」 is used as a phonetic component in other compounds!
        Its ON reading(s) are 「${preadings.join("・")}」.
        Note that these can include historical readings that may not apply to this kanji itself anymore, but still do to its compounds.</p>`;

    WK_Keisei.prototype.explanation_unknown = (subject) =>
       `<p>The kanji 「${subject.kan}」 has an unknown or contested origin, or its phonetic mark is too obscure to be useful.
        Stay tuned for more information in future versions.</p>`;

    WK_Keisei.prototype.explanation_unprocessed = (subject) =>
       `<p>The kanji 「${subject.kan}」 has not been added to the DB yet, please wait for a future version.</p>`;

    WK_Keisei.prototype.explanation_phonetic = (subject, semantic, preadings) =>
       `<p>The kanji 「${subject.kan}」 was created using semantic-phonetic composition!<p>
        <p>The phonetic component is 「${subject.base_phon||subject.phon}」
        with the ON reading(s) 「${preadings.join("・")}」 (including rare ones),
        and the semantic component is 「${semantic}」.</p>
        <span id="keisei_explanation_quality"></span>`;

    WK_Keisei.prototype.explanation_pmark = (subject, preadings) =>
       `<p>The kanji 「${subject.kan}」 is used as a phonetic mark in other compounds!
        Its ON reading(s) as a phonetic mark are 「${preadings.join("・")}」.
        Note that these can include historical readings that may not apply to this kanji itself anymore, but still do to its compounds.</p>`;

    WK_Keisei.prototype.explanation_other = (subject) =>
       `<p>The kanji 「${subject.kan}」 is not considered a semantic-phonetic composition.</p>`;

    WK_Keisei.prototype.explanation_missing = (subject) =>
       `<p>This element is not listed in the Keisei database!</p>`;

    WK_Keisei.prototype.error_msg = (subject, msg) =>
       `<p>An error occured while processing kanji 「${subject.kan}」! Message was: '${msg}'</p>`;
    // #########################################################################

    // Different paragraphs describing how well the current kanji is matched
    // by its corresponding phonetic mark.
    // #########################################################################
    WK_Keisei.prototype.pmark_perfect = (subject) =>
       `<p>The phonetic mark is a perfect match（天）because all readings of this kanji are derived from it.</p>`;
    WK_Keisei.prototype.pmark_high = (subject) =>
       `<p>The phonetic mark is a good match（上）because the main readings of this kanji are derived from it.</p>`;
    WK_Keisei.prototype.pmark_middle = (subject) =>
       `<p>The phonetic mark is a bad match（中）because the kanji 「${subject.kan}」 can be read that way in rare cases,
        but the prevalent reading(s) are different.</p>`;
    WK_Keisei.prototype.pmark_low = (subject) =>
       `<p>The phonetic mark is no indicator at all（下）for the readings of this kanji,
        they may have changed over time or the composition of this character is different after all.</p>`;
    // #########################################################################

    // #########################################################################
    WK_Keisei.prototype.explanation_xref = (xref, preadings) =>
       `<p>The phonetic component 「${xref}」 is related to the above component, the readings may be similar.
        The ON reading(s) 「${preadings.join("・")}」 are listed for this phonetic mark.</p>`;
    WK_Keisei.prototype.explanation_non_compound = (subject) =>
       `<p>The phonetic component 「${subject.phon}」 also has kanji that are either phonetic compounds of another phonetic mark,
        or are considered a different type of composition. The readings are likely to differ.</p>`;
}
)();
