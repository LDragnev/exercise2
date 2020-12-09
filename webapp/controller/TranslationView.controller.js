sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/Fragment"
], function (Controller, MessageToast, JSONModel, Fragment) {
	"use strict";
	return Controller.extend("com.kpmg.exercise2.controller.TranslationView", {
		onInit: function () {
			var data = {
				recipient: {
					name: "World"
				}
			};
			var model = new JSONModel(data);
			this.getView().setModel(model);
			var productsModel = this.getView().getModel('productsModel');

			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);

			// show message
			MessageToast.show(sMsg);
		},
		onShowHello: function () {
			MessageToast.show("Hello World");
		},
		onOpenDialog: function () {
			var oView = this.getView();

			// create dialog lazily
			if (!this.pDialog) {
				this.pDialog = Fragment.load({
					id: oView.getId(),
					name: "com.kpmg.exercise2.view.HelloDialog",
					controller: this
				}).then(function (oDialog) {
					// connect dialog to the root view of this component (models, lifecycle)
					oView.addDependent(oDialog);
					return oDialog;
				});
			}
			this.pDialog.then(function (oDialog) {
				oDialog.open();
			});
		},
		onCloseDialog: function () {
			this.byId("helloDialog").close();
		}
	});
});