const urlList = [
    {
        "url" : "https://www.cnbc.com/quotes/@GC.1",
        "title" : "gelecek ons:",
        "tag" : "QuoteStrip-lastPrice",
        "index" : 0
    },
    {
        "url" : "https://www.cnbc.com/quotes/XAU=",
        "title" : "ons:",
        "tag" : "QuoteStrip-lastPrice",
        "index" : 0
    },
    {
        "url" : "https://bigpara.hurriyet.com.tr/altin/gram-altin-fiyati/",
        "title" : "gram altin:",
        "tag" : "value.up",
        "index" : 1
    }
];

function setMarketApi(){
    for (let i = 0; i < urlList.length; i++) {
        var item = urlList[i];
        var url = item["url"];
        var tag = item["tag"];
        var title = item["title"];
        var index = item["index"];
        
        sendRequest(url, tag, title, index, function(data){
            createMarketCard(data);
        });
    }
}

function sendRequest(url, tag, title, index, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", cors_url + "/" + url);
    request.responseType = "document";

    request.onload = function (e) {
        if (request.readyState === 4 && request.status === 200) {
             
            let responseData_ = responseData();
            let data = {
                "data" : title + " " + responseData_,
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