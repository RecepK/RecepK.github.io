const cors_url = "https://cors-anywere.herokuapp.com"
const base_url = "https://www.gramaltin.com"
const default_url = "-gr-24-ayar-iar-gram-altin"

function getFullPath(product){
    let full_path = cors_url + "/" + base_url + "/" + product + default_url;
    return full_path;
}

const product_100 = "100"
const product_50 = "50"
const product_20 = "20"
const product_10 = "10"
const product_05 = "5"

const productList = [product_05, product_10, product_20, product_50, product_100];

function getProducts(product, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", getFullPath(product));
    request.responseType = "document";

    request.onload = function (e) {
        if (request.readyState === 4 && request.status === 200) {

            let productName_ = productName();

            let product_= paidTypes();            
            let product0 = product_[0].toString();
            let product1 = product_[1].toString();
            
            let prices_= prices();
            let price0 = prices_[0].toString();
            let price1 = prices_[1].toString();

            let data = {
                "name" : productName_, 
                "eft" : product0,
                "eftPrices" : price0,
                "card" : product1,
                "cardPrices" : price1,
            };
            
            if(typeof callback == "function")
            callback(data);
        } else {
                console.error(request.status, request.statusText);
        }
    };

    request.onerror = function (e) {
        console.error(request.status, request.statusText);
    };

    request.send(null);

    var productName = function() {
        var productName = request.responseXML.querySelectorAll("#productName");
        return productName[0].innerText;
    };

    var prices = function() {
        var response = request.responseXML.querySelectorAll(".pricetotal");
        let price = [
            response[0].innerText,
            response[1].innerText
        ];
        return price;
    };
    
    var paidTypes = function() {
        var response = request.responseXML.querySelectorAll(".priceText");
        let product = [
            response[0].innerText,
            response[1].innerText
        ];
        return product;
    };
}

function getLastProduct(item, index, arr){
    getProducts(item, function(data){
        createIARCard(data);
    });
}

function setIARApi() {
    /*
    for (let i = 0; i < productList.length; i++) {
        var item = productList[i];
        getLastProduct(item, i);
    }*/

    productList.forEach(getLastProduct);
}