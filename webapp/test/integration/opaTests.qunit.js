/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/kpmg/exercise2/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});