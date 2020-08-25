const cartPlaceHolder = document.querySelector(".cartPlaceHolder");
const renderBtn = document.querySelector(".renderBtn");
const inputLogo = document.querySelector("#Logo");
const inputFront = document.querySelector("#Front");
const inputBack = document.querySelector("#Back");
const inputNew_price = document.querySelector("#New_price");
const inputOld_price = document.querySelector("#Old_price");
const inputNew_price2 = document.querySelector("#New_price_2");
const inputOld_price2 = document.querySelector("#Old_price_2");
const cartTempHtml = document.createElement("div");





function generateHTML(logo, front, back, oldPrice, newPrice, oldPrice_2, newPrice_2) {
    const htmlTemplFirst = `<div class="cont">
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
        </div> `;


    const htmlTemplLook = `
        <div class="cont cont_look">
    <div class="item logo">
        <img src="${logo}"
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
    <div class="item price price-1">
        <p>
            <span class="price__old">${oldPrice}</span> <br />
            <span class="price__new">${newPrice}</span>
        </p>
    </div>
    <div class="item price price-2">
    <p>
    <span class="price__old">${oldPrice_2}</span> <br />
    <span class="price__new">${newPrice_2}</span>
</p>
    </div>
</div>

        `
    cartTempHtml.innerHTML = htmlTemplFirst;
}


renderBtn.addEventListener("click", () => {
    generateHTML(inputLogo.value, inputFront.value, inputBack.value, inputOld_price.value, inputNew_price.value, inputOld_price2.value, inputNew_price2.value);

    cartPlaceHolder.append(cartTempHtml);
})