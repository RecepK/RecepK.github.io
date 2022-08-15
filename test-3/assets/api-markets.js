const urlList = [
    {
        "url" : "https://www.cnbc.com/quotes/@GC.1",
        "title" : "New ONS:",
        "symbol" : "$",
        "tag" : "QuoteStrip-lastPrice",
        "index" : 0
    },
    {
        "url" : "https://www.cnbc.com/quotes/XAU=",
        "title" : "ONS:",
        "symbol" : "$",
        "tag" : "QuoteStrip-lastPrice",
        "index" : 0
    },
    {
        "url" : "https://altin.in/",
        "title" : "GAU:",
        "symbol" : "₺",
        "tag" : "midrow.satis",
        "index" : 0
    }
];

function setMarketApi(){
    for (let i = 0; i < urlList.length; i++) {
        var item = urlList[i];
        sendRequest(item, function(data){
            createMarketCard(data);
            createBr("market");
        });
    }
}

function sendRequest(item, callback) {
    var url = item["url"];
    var tag = item["tag"];
    var title = item["title"];
    var index = item["index"];
    var symbol = item["symbol"];

    var request = new XMLHttpRequest();
    request.open("GET", cors_url + "/" + url);
    request.responseType = "document";

    request.onload = function (e) {
        if (request.readyState === 4 && request.status === 200) {
             
            let responseData_ = responseData();
            let data = {
                "data" : title + " " + responseData_ + " " + symbol,
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

    var responseData = function() {
        var response = request.responseXML.querySelectorAll("."+tag);
        return response[index].innerText;
    };
}