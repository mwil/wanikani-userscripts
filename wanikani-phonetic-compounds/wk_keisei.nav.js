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
                           .append(`<li class="nav-header">Lists</li>`)
                           .append(`<li id="keisei_nav_btn_compounds">
                                        <a href="#">List of Compounds</a>
                                    </li>`)
                           .append(`<li class="nav-header">More</li>`)
                           .append(`<li id="keisei_nav_btn_settings">
                                        <a href="#" data-toggle="modal" data-target="#keisei_modal_settings">Settings</a>
                                    </li>`)
                           .append(`<li id="keisei_nav_btn_settings">
                                        <a href="#" data-toggle="modal" data-target="#keisei_modal_info">About</a>
                                    </li>`);

        if (!$(`#keisei_modal_settings`).length)
            this.injectModals();

        $(`#keisei_nav_btn_compounds`).on(`click`, this.handleNavCompounds.bind(this));
    };
    // #########################################################################

    // #########################################################################
    WK_Keisei.prototype.handleNavCompounds = function (event)
    {
        const $top = $(`<div></div>`)
                        .addClass(`${GM_info.script.namespace} container`);

        if ($(`.standard`).length)
            $top.insertAfter(`.standard`);
        else
            $top.insertAfter(`.dashboard`);

        $(`.standard`).hide();
        $(`#progress`).hide();
        $(`.dashboard`).hide();

        const content = this.kdb.getPhoneticsByHeader();

        this.createCompoundSummary($top, content);
        this.populateCompoundSummary(content);

        $(`.keisei_kanji_link`).attr(`target`, `_blank`);
    };
    // #########################################################################

    // #########################################################################
    WK_Keisei.prototype.createCompoundSummary = function(parent, content)
    {
        const $page = parent;

        $(`<h1>List Of Phonetic Compounds</h1>`)
            .appendTo($page);

        const $section = $(`<div></div>`)
                         .attr(`id`, `keisei_summary_section`)
                         .addClass(``)
                         .appendTo($page);

        // this.createAccordion(`#keisei_summary_section`, `top`, content, `<h2></h2>`);
        this.createTabs(`#keisei_summary_section`,
                        `top`,
                        `Column`,
                        content);

        $(`#keisei_tab_container_top`)
            .addClass(`boxed parentTabs`);

        $(`ul.nav-tabs a`).click(function(e) {
            e.preventDefault();

            const target = this.getAttribute(`href`);

            if (target === `#`)
                return;

            $(this).parent().siblings().removeClass(`active`);
            $(this).parent().addClass(`active`);
            $(target).siblings(`.tab-pane`).removeClass(`in active`);
            $(target).addClass(`in active`);
        });
    };
    // #########################################################################

    // #########################################################################
    WK_Keisei.prototype.createTabs = function(parent, id_suffix, name, content)
    {
        const $container_o = $(`<div></div>`)
                             .attr(`id`, `keisei_tab_container_${id_suffix}`)
                             .addClass(`tabbable`)
                             .appendTo(parent);

        const $tab_nav_o = $(`<ul></ul>`)
                           .attr(`data-tabs`, `tabs`)
                           .addClass(`nav nav-tabs`)
                           .appendTo($container_o);

        const $tab_content_o = $(`<div></div>`)
                               .addClass(`tab-content`)
                               .appendTo($container_o);

        $tab_nav_o.append(`<li class="tab-title"><a href="#">${name}</a></li>`);

        let has_active = false;
        let idx = 0;

        content.forEach(
            (h_map, header) => {
                const $li_nav_o = $(`<li></li>`)
                                  .appendTo($tab_nav_o);

                const $a_nav_o = $(`<a></a>`)
                                 .attr(`data-toggle`, `tab`)
                                 .attr(`href`, `#keisei_tab_${id_suffix}_${idx}`)
                                 .text(header)
                                 .appendTo($li_nav_o);

                const $pane_i = $(`<div></div>`)
                                .addClass(`tab-pane fade`)
                                .attr(`id`, `keisei_tab_${id_suffix}_${idx}`)
                                .appendTo($tab_content_o);

                if (!has_active)
                {
                    $li_nav_o.addClass(`active`);
                    $pane_i.addClass(`active in`);
                    has_active = true;
                }

                if (h_map instanceof Map)
                    this.createTabs($pane_i,
                                    `${id_suffix}_${idx}`,
                                    `Initial`,
                                    h_map);

                idx += 1;
            }
        );

    };
    // #########################################################################

    // #########################################################################
    WK_Keisei.prototype.populateCompoundSummary = function(content)
    {
        let h_idx = 0;

        content.forEach(
            (h_map, header) => {
                let s_idx = 0;

                h_map.forEach(
                    (phons, subheader) => {
                        _.forEach(phons,
                            (phon) => {
                                const tab_i = `#keisei_tab_top_${h_idx}_${s_idx}`;
                                const selector = `keisei_phonetic_grid_${phon}`;

                                const $grid = $(`<ul></ul>`)
                                            .attr(`id`, selector)
                                            .addClass(`single-character-grid`)
                                            .appendTo(tab_i);

                                this.populateCharGrid(`#${selector}`, {"phon": phon});
                            }
                        );

                        s_idx += 1;
                    }
                );

                h_idx += 1;
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
    WK_Keisei.prototype.populateCompoundSummary_acc = function(content)
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
