const cors_url = "https://cors-anywere.herokuapp.com"
const base_url = "https://www.gramaltin.com"
const default_url = "-gr-24-ayar-iar-gram-altin"

function getFullPath(product){
    let full_path = cors_url + "/" + base_url + "/" + product + default_url;
    return full_path;
}
