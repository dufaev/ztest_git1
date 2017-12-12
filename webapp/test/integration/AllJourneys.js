jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"namegit/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"namegit/test/integration/pages/Worklist",
		"namegit/test/integration/pages/Object",
		"namegit/test/integration/pages/NotFound",
		"namegit/test/integration/pages/Browser",
		"namegit/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "namegit.view."
	});

	sap.ui.require([
		"namegit/test/integration/WorklistJourney",
		"namegit/test/integration/ObjectJourney",
		"namegit/test/integration/NavigationJourney",
		"namegit/test/integration/NotFoundJourney",
		"namegit/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});