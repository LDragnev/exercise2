/*global QUnit*/

sap.ui.define([
	"com/kpmg/exercise2/controller/TranslationView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("TranslationView Controller");

	QUnit.test("I should test the TranslationView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});