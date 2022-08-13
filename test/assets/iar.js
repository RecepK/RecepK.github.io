const product_50 = "50"
const product_20 = "20"
const product_10 = "10"
const product_05 = "5"

const productList = [product_05, product_10, product_20, product_50];

function setUI() {
    /*
    for (let i = 0; i < productList.length; i++) {
        var item = productList[i];
        getLastProduct(item, i);
    }*/

    productList.forEach(getLastProduct);
}
