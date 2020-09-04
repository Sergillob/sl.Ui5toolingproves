sap.ui.define([
  "sap/ui/test/Opa5"
], function(Opa5) {
  "use strict";

  return Opa5.extend("sl.Ui5toolingproves.test.integration.arrangements.Startup", {

    iStartMyApp: function () {
      this.iStartMyUIComponent({
        componentConfig: {
          name: "sl.Ui5toolingproves",
          async: true,
          manifest: true
        }
      });
    }

  });
});
