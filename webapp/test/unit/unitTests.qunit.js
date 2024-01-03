/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ns/zdemo_00/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
