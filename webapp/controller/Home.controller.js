sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel, Filter, FilterOperator, Sorter) {
        "use strict";

        return Controller.extend("ns.zdemo00.controller.Home", {
            sort : false,
            
            onInit: function () {
                
                var oData = {
                    "name"  : "",
                };

                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel,"oData");
            },

            onPress: function(){
                MessageToast.show("Hola Mundo");
            },

            searchTable: function(e){
                var sQuery = e.getParameter("query");
                
                var oFilters = [];
                oFilters.push(new Filter("CustomerID", FilterOperator.Contains, sQuery));
                
                var oTable = this.byId("idOrdersTable");
                var oBinding = oTable.getBinding("items");

                oBinding.filter(oFilters);
            },

            onSort: function(){
                this.sort = !this.sort;
                
                var oSorter = new Sorter("CustomerID", this.sort);
                var oTable = this.byId("idOrdersTable");
                var oBinding = oTable.getBinding("items");
                
                oBinding.sort(oSorter);
            }
        });
    });
