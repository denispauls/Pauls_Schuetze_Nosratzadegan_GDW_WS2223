"use strict"

const { info } = require("../api/product")
const addProductTemplate = require("../templates/ProductList/addProduct.ejs")

function ProductList(listElement) {
    this.listElement = listElement
}

ProductList.prototype.init = function () {

}

ProductList.prototype.addProduct = function (fdcId) {
    info(fdcId)
        .then((product) => {
            const productHTML = addProductTemplate({ title: product['description'] })

            //this.listElement.innerHTML = productHTML
            this.listElement.insertAdjacentHTML("beforeend", productHTML)
            //console.log(productHTML)
        })
}

module.exports = ProductList