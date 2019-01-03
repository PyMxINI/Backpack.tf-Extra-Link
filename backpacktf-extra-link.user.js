// ==UserScript==
// @name         TF2 Extra Trading Site Link
// @namespace    https://steamcommunity.com/profiles/76561198144346135
// @version      1.0
// @description  Add a link on bptf to the stn page of that item
// @author       Zeus_Junior
// @match        https://backpack.tf/stats/*
// @grant        none
// @updateURL    https://github.com/ZeusJunior/Backpack.tf-Extra-Link/raw/master/backpacktf-extra-link.meta.js
// @downloadURL  https://github.com/ZeusJunior/Backpack.tf-Extra-Link/raw/master/backpacktf-extra-link.user.js
// ==/UserScript==


(function() {
    'use strict';

    let itemLinkSTN;
    var pathArray = window.location.pathname.split('/');
    var qualityLocation = pathArray[2] // Quality
    var nameLocation = pathArray[3]; // item name
    if (qualityLocation != 'Unique') {
        itemLinkSTN = pathArray[2] + ' ' + nameLocation;
    } else {
        itemLinkSTN = nameLocation;
    }

    // $( ".price-boxes" ).append('<a class="price-box" href="item.com" data-tip="top" target="_blank"  title="Scrap.tf"> <img src="https://scrap.tf/favicon.ico"> <div class="text"> <div class="value"> $x </div> <div class="subtitle"> x </div> </div> </a>');
    $( ".price-boxes" ).append('<a class="price-box" href="https://stntrading.eu/item/tf2/' + itemLinkSTN + '" data-tip="top" target="_blank"  title="Stntrading.eu"> <img src="https://stntrading.eu/assets/img/favicons/favicon.ico"> <div class="text"> <div class="value"> Click me </div> <div class="subtitle"> Pls click </div> </div> </a>');
})();
