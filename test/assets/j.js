function sendData(){
    let data = `{
        "name" : "productName_", 
        "eft" : "product0",
        "eftPrices" : "price0",
        "card" : "product1",
        "cardPprices" : "price1",
    }`;
    sendData(data);
}

function sendData(data){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", cors_url + "/" + "https://recepk.github.io/test/index2.html");
    
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    
    xhr.onload = () => console.log(xhr.responseText);
    
    xhr.send(data);
}
