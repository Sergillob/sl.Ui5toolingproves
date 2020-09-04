sap.ui.define([
  "sap/ui/test/Opa5",
  "sl/Ui5toolingproves/test/integration/arrangements/Startup",
  "sl/Ui5toolingproves/test/integration/BasicJourney"
], function(Opa5, Startup) {
  "use strict";

  Opa5.extendConfig({
    arrangements: new Startup(),
    pollingInterval: 1
  });

});
