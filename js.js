const cartPlaceHolder = document.querySelector(".cartPlaceHolder");
const renderBtn = document.querySelector(".renderBtn");
const inputLogo = document.querySelector("#Logo");
const inputFront = document.querySelector("#Front");
const inputBack = document.querySelector("#Back");
const inputNew_price = document.querySelector("#New_price");
const inputOld_price = document.querySelector("#Old_price");
const cartTempHtml = document.createElement("div");



function generateHTML(logo, front, back, oldPrice, newPrice) {
    cartTempHtml.innerHTML = `<div class="cont">
    <div class="item logo">
    <img
    src="${logo}"
    alt=""
    />
    </div>
    <div class="item front">
    <img
    src="${front}"
    alt=""
    />
    </div>
    <div class="item back">
    <img
    src="${back}"
    alt=""
    />
    </div>
    <div class="item price">
    <p>
    <span class="price__old">${oldPrice}</span> <br />
    <span class="price__new">${newPrice}</span>
    </p>
    </div>
    </div> `
}


renderBtn.addEventListener("click", () => {
    generateHTML(inputLogo.value, inputFront.value, inputBack.value, inputOld_price.value, inputNew_price.value)

    cartPlaceHolder.append(cartTempHtml);
})