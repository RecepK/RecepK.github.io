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
                "cardPprices" : price1,
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
        createDiv("Ürün " + (index + 1));
        createDiv(data["name"]);
        createDiv(data["eft"]);
        createDiv(data["eftPrices"]);
        createDiv(data["card"]);
        createDiv(data["cardPprices"]);
        createBr();
    });
}

function createDiv(value) {
    var div = document.createElement("div");
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.background = "blue";
    div.style.color = "white";
    div.innerHTML = value;
    document.getElementById("main").appendChild(div);
}

function createBr() {
    var br = document.createElement("br");
    document.getElementById("main").appendChild(br);
}
