/* jshint esversion: 6 */

// #########################################################################
function injectWKStyles()
{
    $("html > head").append($(`
<style>

ul, ol{font-size: 14px; padding:0;margin:0 0 10px 25px}
a{color:#08c;text-decoration:none}

ul.radical {
    font-size: 16px;
}

ul.single-character-grid li[id|=kanji],ul.single-character-grid tr[id|=kanji],ul.multi-character-grid li[id|=kanji],ul.multi-character-grid tr[id|=kanji],.kotoba-table-list li[id|=kanji],.kotoba-table-list tr[id|=kanji]{background-color:#f100a1;background-image:-moz-linear-gradient(top, #f0a, #dd0093);background-image:-webkit-gradient(linear, 0 0, 0 100%, from(#f0a), to(#dd0093));background-image:-webkit-linear-gradient(top, #f0a, #dd0093);background-image:-o-linear-gradient(top, #f0a, #dd0093);background-image:linear-gradient(to bottom, #f0a, #dd0093);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFF00AA', endColorstr='#FFDD0093', GradientType=0);border-top:1px solid #f6c;border-bottom:1px solid #cc0088;border-left:1px solid #f6c}
ul.single-character-grid li[id|=radical],ul.single-character-grid tr[id|=radical],ul.multi-character-grid li[id|=radical],ul.multi-character-grid tr[id|=radical],.kotoba-table-list li[id|=radical],.kotoba-table-list tr[id|=radical]{background-color:#00a1f1;background-image:-moz-linear-gradient(top, #0af, #0093dd);background-image:-webkit-gradient(linear, 0 0, 0 100%, from(#0af), to(#0093dd));background-image:-webkit-linear-gradient(top, #0af, #0093dd);background-image:-o-linear-gradient(top, #0af, #0093dd);background-image:linear-gradient(to bottom, #0af, #0093dd);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF00AAFF', endColorstr='#FF0093DD', GradientType=0);border-top:1px solid #88d7ff;border-bottom:1px solid #069;border-left:1px solid #88d7ff}
ul.single-character-grid li[id|=vocabulary],ul.single-character-grid tr[id|=vocabulary],ul.multi-character-grid li[id|=vocabulary],ul.multi-character-grid tr[id|=vocabulary],.kotoba-table-list li[id|=vocabulary],.kotoba-table-list tr[id|=vocabulary]{background-color:#a100f1;background-image:-moz-linear-gradient(top, #a0f, #9300dd);background-image:-webkit-gradient(linear, 0 0, 0 100%, from(#a0f), to(#9300dd));background-image:-webkit-linear-gradient(top, #a0f, #9300dd);background-image:-o-linear-gradient(top, #a0f, #9300dd);background-image:linear-gradient(to bottom, #a0f, #9300dd);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFAA00FF', endColorstr='#FF9300DD', GradientType=0);border-top:1px solid #c655ff;border-bottom:1px solid #8800cc;border-left:1px solid #c655ff}
ul.single-character-grid,ul.multi-character-grid{margin:0}
ul.single-character-grid li.character-item.locked,ul.multi-character-grid li.character-item.locked{background-image:url("https://cdn-staging.wanikani.com/assets/default-v2/stripes-5e8494366c1615da046bd0f587cfeef6786e7ba17863df1329767ca3b89140e0.png");background-repeat:repeat}
ul.single-character-grid li.character-item.locked.kanji,ul.multi-character-grid li.character-item.locked.kanji{background-color:#f0a;background-image:none;background-image:none;background-image:none;background-image:none;background-image:none;background-image:none;background-repeat:no-repeat;filter:none}
ul.single-character-grid li.character-item.burned,ul.multi-character-grid li.character-item.burned{background-color:#505050;background-image:-moz-linear-gradient(top, #555, #484848);background-image:-webkit-gradient(linear, 0 0, 0 100%, from(#555), to(#484848));background-image:-webkit-linear-gradient(top, #555, #484848);background-image:-o-linear-gradient(top, #555, #484848);background-image:linear-gradient(to bottom, #555, #484848);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF555555', endColorstr='#FF484848', GradientType=0);border-top:1px solid #555;border-bottom:1px solid #333;border-left:1px solid #555;-webkit-box-shadow:0 10px 10px rgba(0,0,0,0.4) inset;-moz-box-shadow:0 10px 10px rgba(0,0,0,0.4) inset;box-shadow:0 10px 10px rgba(0,0,0,0.4) inset}
ul.single-character-grid li.character-item.burned span.character,ul.single-character-grid li.character-item.burned ul>li,ul.multi-character-grid li.character-item.burned span.character,ul.multi-character-grid li.character-item.burned ul>li{opacity:0.4;filter:alpha(opacity=40)}
ul.single-character-grid li.character-item,ul.multi-character-grid li.character-item{display:inline-block;position:relative;width:116px;color:#ffffff;text-align:center}
ul.single-character-grid li.character-item span.character,ul.multi-character-grid li.character-item span.character{font-size:72px;font-weight:bold;line-height:1.5em;text-shadow:0 2px 0 rgba(0,0,0,0.3)}
ul.single-character-grid li.character-item a,ul.multi-character-grid li.character-item a{display:block;color:inherit}
ul.single-character-grid li.character-item a:hover,ul.multi-character-grid li.character-item a:hover{text-decoration:none}
ul.single-character-grid li.character-item ul,ul.multi-character-grid li.character-item ul{margin:0;padding-bottom:10px}
ul.single-character-grid li.character-item ul>li,ul.multi-character-grid li.character-item ul>li{display:block;font-weight:400;line-height:1.5em;text-shadow:0 1px 0 rgba(0,0,0,0.3)}
ul.single-character-grid li.character-item ul>li:nth-child(2),ul.multi-character-grid li.character-item ul>li:nth-child(2){font-family:"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif}
ul.single-character-grid li.character-item span.character,ul.single-character-grid li.character-item ul>li,ul.multi-character-grid li.character-item span.character,ul.multi-character-grid li.character-item ul>li{-webkit-transition:text-shadow ease-out 0.3s;-moz-transition:text-shadow ease-out 0.3s;-o-transition:text-shadow ease-out 0.3s;transition:text-shadow ease-out 0.3s}
ul.single-character-grid li.character-item:hover ul>li,ul.multi-character-grid li.character-item:hover ul>li{text-shadow:0 1px 0 rgba(0,0,0,0.3),0 0 40px #fff}
ul.single-character-grid li.character-item:hover span.character,ul.multi-character-grid li.character-item:hover span.character{text-shadow:0 2px 0 rgba(0,0,0,0.3),0 0 40px #fff}
ul.single-character-grid li.character-item:active,ul.multi-character-grid li.character-item:active{-webkit-box-shadow:0 15px 15px rgba(0,0,0,0.4) inset;-moz-box-shadow:0 15px 15px rgba(0,0,0,0.4) inset;box-shadow:0 15px 15px rgba(0,0,0,0.4) inset}
ul.single-character-grid li.character-item:active ul>li,ul.multi-character-grid li.character-item:active ul>li{text-shadow:0 1px 0 rgba(0,0,0,0.3),0 0 40px #fff}
ul.single-character-grid li.character-item:active span.character,ul.multi-character-grid li.character-item:active span.character{text-shadow:0 -2px 0 rgba(0,0,0,0.3),0 0 40px #fff}

@media (min-width: 980px) and (max-width: 1199px){ul.single-character-grid li.character-item:nth-child(even){width:117px}
}
@media (min-width: 768px) and (max-width: 979px){ul.single-character-grid .character-item{width:122px}
ul.single-character-grid .character-item:nth-child(even){width:123px}
ul.single-character-grid .character-item:nth-child(6n){width:124px}
}
@media (max-width: 767px){ul.single-character-grid li[id|=radical] img{width:25px;height:25px}
ul.single-character-grid li[id|=radical] ul>li:first-child{display:none !important}
ul.single-character-grid li[id|=radical] ul>li:last-child{line-height:2.6em}
ul.single-character-grid li.character-item{display:block;width:100%;text-align:left;border-left:none}
ul.single-character-grid li.character-item a{padding:12px}
ul.single-character-grid li.character-item span.character{font-size:27px;line-height:1em}
ul.single-character-grid li.character-item ul{display:inline-block;float:right;text-align:right;font-size:10px}
ul.single-character-grid li.character-item ul>li{line-height:1.4em}
ul.single-character-grid li.character-item.burned{border-left:0;-webkit-box-shadow:0 5px 5px rgba(0,0,0,0.4) inset;-moz-box-shadow:0 5px 5px rgba(0,0,0,0.4) inset;box-shadow:0 5px 5px rgba(0,0,0,0.4) inset}
ul.single-character-grid li.character-item:active{-webkit-box-shadow:0 8px 8px rgba(0,0,0,0.4) inset;-moz-box-shadow:0 8px 8px rgba(0,0,0,0.4) inset;box-shadow:0 8px 8px rgba(0,0,0,0.4) inset}
ul.single-character-grid span.recently-unlocked-badge:before{top:1.1em;left:-1.1em;font-size:11px;text-align:center}
}
ul.multi-character-grid-extra-styling-767px{-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;-webkit-box-shadow:0 2px 0 rgba(0,0,0,0.3);-moz-box-shadow:0 2px 0 rgba(0,0,0,0.3);box-shadow:0 2px 0 rgba(0,0,0,0.3)}
ul.multi-character-grid-extra-styling-767px li.character-item:first-child{-webkit-border-top-left-radius:3px;-moz-border-radius-topleft:3px;border-top-left-radius:3px;-webkit-border-top-right-radius:3px;-moz-border-radius-topright:3px;border-top-right-radius:3px}
ul.multi-character-grid-extra-styling-767px li.character-item:last-child{-webkit-border-bottom-left-radius:3px;-moz-border-radius-bottomleft:3px;border-bottom-left-radius:3px;-webkit-border-bottom-right-radius:3px;-moz-border-radius-bottomright:3px;border-bottom-right-radius:3px}

.recently-unlocked-badge{position:absolute;left:0}
.recently-unlocked-badge:before{;display:block;position:absolute;top:-0.6em;left:-0.6em;width:2em;height:2em;color:#fff;font-size:16px;font-weight:normal;line-height:2.2em;text-shadow:0 2px 0 #99001f;-webkit-box-shadow:0 -2px 0 rgba(0,0,0,0.2) inset,0 0 10px rgba(255,255,255,0.5);-moz-box-shadow:0 -2px 0 rgba(0,0,0,0.2) inset,0 0 10px rgba(255,255,255,0.5);box-shadow:0 -2px 0 rgba(0,0,0,0.2) inset,0 0 10px rgba(255,255,255,0.5);-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;z-index:999}


ul.multi-character-grid-extra-styling-767px{-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;-webkit-box-shadow:0 2px 0 rgba(0,0,0,0.3);-moz-box-shadow:0 2px 0 rgba(0,0,0,0.3);box-shadow:0 2px 0 rgba(0,0,0,0.3)}
ul.multi-character-grid-extra-styling-767px li.character-item:first-child{-webkit-border-top-left-radius:3px;-moz-border-radius-topleft:3px;border-top-left-radius:3px;-webkit-border-top-right-radius:3px;-moz-border-radius-topright:3px;border-top-right-radius:3px}
ul.multi-character-grid-extra-styling-767px li.character-item:last-child{-webkit-border-bottom-left-radius:3px;-moz-border-radius-bottomleft:3px;border-bottom-left-radius:3px;-webkit-border-bottom-right-radius:3px;-moz-border-radius-bottomright:3px;border-bottom-right-radius:3px}
}
</style>
    `));
}