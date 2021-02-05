angular.module('inventaRio').factory("Product", function() {

    var Product = function() {
        var self = this;
        this.deep_copy_whitelist = [
            "productName", "price", "location", "description"
        ]
        this.productName = "";
        this.price = 0;
        this.location = "";
        this.description = "";
    }

    return Product;
});