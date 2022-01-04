// ==UserScript==
// @name         Backpack.tf Extra Link
// @namespace    https://steamcommunity.com/profiles/76561198144346135 / https://steamcommunity.com/id/nobaddaysmxINI
// @version      1.1.11 > 1.1.12 @PyMxINI
// @description  Add a link on bptf to the stn/tf2.tm/buff163/steam-trader page of that item
// @author       Zeus_Junior/modificed by PyMxINI
// @match        https://backpack.tf/stats/*
// @grant        none

// @updateURL    https://github.com/ZeusJunior/Backpack.tf-Extra-Link/raw/master/backpacktf-extra-link.user.js
// @downloadURL  https://github.com/ZeusJunior/Backpack.tf-Extra-Link/raw/master/backpacktf-extra-link.user.js
// @supportURL   https://github.com/ZeusJunior/Backpack.tf-Extra-Link/issues
// ==/UserScript==


function steamTrader_Button(pathArray){
    let itemLink;
    var qualityName = pathArray[2]; // Quality
    var itemName = pathArray[3]; // item name

        $( ".price-boxes" ).append('<a class="price-box" href="https://steam-trader.com/tf2/?price_from=&price_to=2000&quality=&type=&class=&craft=&text=' + itemName + '&sort=rating.desc&page=1" data-tip="top" target="_blank"  title="steam-trader.com"> <img src="https://steam-trader.com/favicon.ico"> <div class="text"> <div class="value"> Click me </div> <div class="subtitle"> Pls click </div> </div> </a>');

}

function TF2TM_Button(pathArray){
    let itemLink;
    var qualityName = pathArray[2]; // Quality
    var itemName = pathArray[3]; // item name

    //https://tf2.tm/ajax/i_popularity/all/all/all/1/56/0;500000/Mann%20Co%20Supply%20Crate%20Key/all/-1/-1/all?sd=desc
        $( ".price-boxes" ).append('<a class="price-box" href="https://tf2.tm/?search='+itemName+'&fc=-1&fco=all&sd=desc" data-tip="top" target="_blank"  title="tf2.tm"> <img src="https://tf2.tm/favicon.ico"> <div class="text"> <div class="value"> Click me </div> <div class="subtitle"> Pls click </div> </div> </a>');

}

function buff163_Button(pathArray){
    let itemLink;
    var qualityName = pathArray[2]; // Quality
    var itemName = pathArray[3]; // item name


        $( ".price-boxes" ).append('<a class="price-box" href="https://buff.163.com/market/tf2#tab=selling&page_num=1&search='+itemName+'" data-tip="top" target="_blank"  title="buff.163.com"> <img src="https://buff.163.com/favicon.ico"> <div class="text"> <div class="value"> Click me </div> <div class="subtitle"> You should be logged in buff.163.com </div> </div> </a>');

}

function STN_Button(pathArray){
    let itemLinkSTN;
    var qualityLocation = pathArray[2]; // Quality
    var nameLocation = pathArray[3]; // item name
    if (qualityLocation === 'Haunted') {
        // nothing
    } else if (qualityLocation === 'Strange%20Unusual') {
        // nothing
    } else if (nameLocation.includes('Festivized%20')) {
        itemLinkSTN = pathArray[2] + ' ' + nameLocation.substr(13);
        // $( ".price-boxes" ).append('<a class="price-box" href="item.com" data-tip="top" target="_blank"  title="Scrap.tf"> <img src="https://scrap.tf/favicon.ico"> <div class="text"> <div class="value"> $x </div> <div class="subtitle"> x </div> </div> </a>');
        $( ".price-boxes" ).append('<a class="price-box" href="https://stntrading.eu/item/tf2/' + itemLinkSTN + '" data-tip="top" target="_blank"  title="Stntrading.eu"> <img src="https://stntrading.eu/assets/img/favicons/favicon.ico"> <div class="text"> <div class="value"> Click me </div> <div class="subtitle"> Pls click </div> </div> </a>');
    } else if (qualityLocation === 'Unusual'){
        itemLinkSTN = pathArray[2] + ' ' + nameLocation + '&isUnusual=1';
        // $( ".price-boxes" ).append('<a class="price-box" href="item.com" data-tip="top" target="_blank"  title="Scrap.tf"> <img src="https://scrap.tf/favicon.ico"> <div class="text"> <div class="value"> $x </div> <div class="subtitle"> x </div> </div> </a>');
        $( ".price-boxes" ).append('<a class="price-box" href="https://stntrading.eu/search?query=' + itemLinkSTN + '" data-tip="top" target="_blank"  title="Stntrading.eu"> <img src="https://stntrading.eu/assets/img/favicons/favicon.ico"> <div class="text"> <div class="value"> Click me </div> <div class="subtitle"> Pls click </div> </div> </a>');
    } else if (qualityLocation != 'Unique') {
        itemLinkSTN = pathArray[2] + ' ' + nameLocation;
        // $( ".price-boxes" ).append('<a class="price-box" href="item.com" data-tip="top" target="_blank"  title="Scrap.tf"> <img src="https://scrap.tf/favicon.ico"> <div class="text"> <div class="value"> $x </div> <div class="subtitle"> x </div> </div> </a>');
        $( ".price-boxes" ).append('<a class="price-box" href="https://stntrading.eu/item/tf2/' + itemLinkSTN + '" data-tip="top" target="_blank"  title="Stntrading.eu"> <img src="https://stntrading.eu/assets/img/favicons/favicon.ico"> <div class="text"> <div class="value"> Click me </div> <div class="subtitle"> Pls click </div> </div> </a>');
    } else {
        itemLinkSTN = nameLocation;
        // $( ".price-boxes" ).append('<a class="price-box" href="item.com" data-tip="top" target="_blank"  title="Scrap.tf"> <img src="https://scrap.tf/favicon.ico"> <div class="text"> <div class="value"> $x </div> <div class="subtitle"> x </div> </div> </a>');
        $( ".price-boxes" ).append('<a class="price-box" href="https://stntrading.eu/item/tf2/' + itemLinkSTN + '" data-tip="top" target="_blank"  title="Stntrading.eu"> <img src="https://stntrading.eu/assets/img/favicons/favicon.ico"> <div class="text"> <div class="value"> Click me </div> <div class="subtitle"> Pls click </div> </div> </a>');
    }
}

(function() {
    'use strict';
    var pathArray = window.location.pathname.split('/');
    STN_Button(pathArray);
    steamTrader_Button(pathArray);
    TF2TM_Button(pathArray);
    buff163_Button(pathArray);
})();
