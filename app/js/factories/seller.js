angular.module('inventaRio').factory("Seller", function() {

    var Seller = function() {
        var self = this;
        this.deep_copy_whitelist = [
            "sellerName", "sellerLocation", "sellerDescription"
        ]
        this.sellerName = "";
        this.sellerLocation = "";
        this.sellerDescription = "";
    }

    return Seller;
});