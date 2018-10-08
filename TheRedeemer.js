// ==UserScript==
// @name        The Redeemer
// @namespace   raina (modified by psydex)
// @description Pops up the Steam product activation webpage when copying keys from any website. Does not require Steam to be installed!
// @include     *
// @version     1.9
// @grant       none
// ==/UserScript==
(function() {
	"use strict";
	var activateProduct = function(e) {
		var productKey = window.getSelection().toString().trim() || e.target.value;
		if (/^[\d\w]{2,5}(\-[\d\w]{4,5}){2,4}$/.test(productKey)) {
			window.open("https://store.steampowered.com/account/registerkey?key=" + productKey);
		}
	};
	window.addEventListener("copy", activateProduct, false);
}());
