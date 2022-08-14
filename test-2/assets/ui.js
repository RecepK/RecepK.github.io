function createIARCard(data){
    var divCard = document.createElement("div");
    divCard.className = "card";
    
    var divContainer = document.createElement("div");
    divContainer.className = "container";
    
    var h4 = document.createElement("h4");
    var b = document.createElement("b");
    b.innerText = data["name"];

    var p = document.createElement("p");
    p.innerText = data["card"];

    var p2 = document.createElement("p");
    p2.innerText = data["cardPrices"];

    var p3 = document.createElement("p");
    p3.innerText = data["eft"];

    var p4 = document.createElement("p");
    p4.innerText = data["eftPrices"];

    document
    .getElementById("main")
    .appendChild(divCard)
    .appendChild(divContainer)
    .appendChild(h4)
    .appendChild(b)
    .appendChild(p)
    .appendChild(p2)
    .appendChild(p3)
    .appendChild(p4)
}

function createMarketCard(data){
    var divCard = document.createElement("div");
    divCard.className = "card";
    
    var divContainer = document.createElement("div");
    divContainer.className = "container";
    
    var h4 = document.createElement("h4");
    var b = document.createElement("b");
    b.innerText = data["data"];

    document
    .getElementById("market")
    .appendChild(divCard)
    .appendChild(divContainer)
    .appendChild(h4)
    .appendChild(b)
}

function createBr(tag = "main") {
    var br = document.createElement("br");
    document.getElementById(tag).appendChild(br);
}