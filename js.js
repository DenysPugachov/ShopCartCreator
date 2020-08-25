const cartPlaceHolder = document.querySelector(".cartPlaceHolder");

const renderBtns = document.querySelectorAll(".renderBtn");

// const renderBtnFirst = document.querySelector("#firstTempl .renderBtn");
// const renderBtnLook = document.querySelector("#lookTempl .renderBtn");
// const renderBtnThird = document.querySelector("#thirdTempl .renderBtn");
const inputLogos = document.querySelectorAll(".logo");
const inputFronts = document.querySelectorAll(".front");
const inputBacks = document.querySelectorAll(".back");
const inputNew_prices = document.querySelectorAll(".new_price");
const inputOld_prices = document.querySelectorAll(".old_price");
const inputNew_price2 = document.querySelectorAll(".new_price_2");
const inputOld_price2 = document.querySelectorAll(".old_price_2");
const cartTempHtml = document.createElement("div");


//set default open tab
document.querySelector("#first").click();



function generateHTML(templateIndex, logo, front, back, oldPrice, newPrice, oldPrice_2, newPrice_2) {

    const first = `
<div class="cont">
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


    const look = `
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
`;

    if (templateIndex === 0) {
        cartTempHtml.innerHTML = first;
        console.log(first);
    } else if (templateIndex === 1) {
        cartTempHtml.innerHTML = look;
        console.log(look);
    } else if (cartTempHtml === 2) {
        // cartTempHtml.innerHTML = third;
        console.log("use third template");
    }
    cartPlaceHolder.append(cartTempHtml);

    console.log(templateIndex, logo, front, back, oldPrice, newPrice, oldPrice_2, newPrice_2);
}




//Tabs
function openTemplate(evt, templateName) {
    // Declare all variables
    let i, tabContent, tabLinks;

    // Get all elements with class="tabcontent" and hide them
    tabContent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tabLinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(templateName).style.display = "block";
    evt.currentTarget.className += " active";

}



renderBtns.forEach((button, index) => {
    button.addEventListener("click", () => {
        generateHTML(index,
            inputLogos[index].value,
            inputFronts[index].value,
            inputBacks[index].value,
            inputOld_prices[index].value,
            inputNew_prices[index].value,
            inputOld_price2.value,
            inputNew_price2.value
        );
    })
})
