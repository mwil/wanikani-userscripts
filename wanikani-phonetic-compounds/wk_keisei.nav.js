/* jshint esversion: 6 */
/* jshint scripturl:true */

// #############################################################################
(function()
{
    "use strict";


    // #########################################################################
    WK_Keisei.prototype.addNavItem = function(event)
    {
        const $keisei_li = $(`<li></li>`)
                           .attr(`data-dropdown`, ``)
                           .addClass(`dropdown phonetic`)
                           .insertAfter(`li.radicals`);

        const $drop_a = $(`<a></a>`)
                        .attr(`href`, `#`)
                        .attr(`data-toggle`, `dropdown`)
                        .addClass(`dropdown-toggle`)
                        .appendTo($keisei_li)
                        .html(`<span lang="ja" style="display: block;">声符</span>Phonetics
                               <i class="icon-chevron-down"></i>`);

        const $drop_menu = $(`<ul></ul>`)
                           .addClass(`dropdown-menu`)
                           .appendTo($keisei_li)
                           .append(`<li class="nav-header">Test</li>`)
                           .append(`<li id="keisei_nav_btn_test" class="nested-level">
                                        <a href="#">Test</a>
                                    </li>`);

        $(`#keisei_nav_btn_test`).on(`click`, this.handleTest.bind(this));
    };
    // #########################################################################

    // #########################################################################
    WK_Keisei.prototype.handleTest = function (event)
    {
        $(`#progress`).remove();
        $(`.standard`).empty();

        const content = this.kdb.getPhoneticsByHeader();

        this.createCompoundSummary([...content.keys()]);
        this.populateCompoundSummary(content);
    };
    // #########################################################################

    // #########################################################################
    WK_Keisei.prototype.createCompoundSummary = function(headers)
    {
        const $page = $(`.standard`);

        $(`<h1>List Of Compounds</h1>`)
            .appendTo($page);

        const $section = $(`<div></div>`)
                         .attr(`id`, `keisei_summary_section`)
                         .addClass(`${GM_info.script.namespace}`)
                         .appendTo($page);

        // this.createAccordion(`#keisei_summary_section`, `top`, headers, `<h2></h2>`);
        this.createTabs(`#keisei_summary_section`, `top`, headers);
    };
    // #########################################################################

    // #########################################################################
    WK_Keisei.prototype.createTabs = function(parent, id_suffix, headers)
    {
        const $container = $(`<div></div>`)
                           .addClass(`tabbable boxed parentTabs`);

        const $tab = $(`<ul></ul>`)
                     .attr(`id`, `keisei_tab_${id_suffix}`)
                     .addClass(`nav nav-tabs`)
                     .appendTo($container);

        _.forEach(headers,
            (header) => {
                const $li = $(`<li></li>`);

                const $a = $(`<a></a>`)
                           .attr(`data-toggle`, `tab`)
                           .attr(`href`, ``)
                           .appendTo($li);
            }
        );
    };
    // #########################################################################

    // #########################################################################
    WK_Keisei.prototype.createAccordion = function(parent, id_suffix, headers, heading)
    {
        const $accord = $(`<div></div>`)
                        .attr(`id`, `keisei_accordion_${id_suffix}`)
                        .addClass(`accordion`)
                        .appendTo(parent);

        _.forEach(headers,
            (header, idx) => {
                const $group = $(`<div></div>`)
                               .addClass(`accordion-group`)
                               .appendTo($accord);

                const $head = $(`<div></div>`)
                              .addClass(`accordion-heading`)
                              .appendTo($group);

                const $heading = $(heading)
                                 .appendTo($head);

                const collapse_id = `keisei_collapse_${id_suffix}_${header}`;

                const $a = $(`<a></a>`)
                           .addClass(`accordion-toggle`)
                           .attr(`data-toggle`, `collapse`)
                           .attr(`data-parent`, parent)
                           .attr(`href`, `#${collapse_id}`)
                           .text(`Column ${header}`)
                           .appendTo($heading);

                const $collapse = $(`<div></div>`)
                                  .attr(`id`, collapse_id)
                                  .addClass(`accordion-body collapse`)
                                  .appendTo($group);

                const $body = $(`<div></div>`)
                              .attr(`id`, `keisei_accordion_inner_${id_suffix}_${header}`)
                              .addClass(`accordion-inner`)
                              .appendTo($collapse);
            }
        );
    };
    // #########################################################################

    // #########################################################################
    WK_Keisei.prototype.populateCompoundSummary = function(content)
    {
        content.forEach(
            (h_map, header) => {
                this.createAccordion(`#keisei_accordion_inner_top_${header}`,
                                     header,
                                     [...h_map.keys()],
                                     `<h4></h4>`);

                h_map.forEach(
                    (phons, subheader) => {
                        _.forEach(phons,
                            (phon) => {
                                const accord_inner = `#keisei_accordion_inner_${header}_${subheader}`;
                                const selector = `keisei_phonetic_grid_${phon}`;

                                const $grid = $(`<ul></ul>`)
                                            .attr(`id`, selector)
                                            .addClass(`single-character-grid`)
                                            .appendTo(accord_inner);

                                this.populateCharGrid(`#${selector}`, {"phon": phon});
                            }
                        );
                    }
                );
            }
        );
    };
    // #########################################################################
}
)();
// #############################################################################
