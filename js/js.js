//TODO:
//-chose logo form dorp-down list (can add custom url);
//-rewrite tabs on item * content-item classes;
//-add new templates 2item;
//-use modern template;
//-make modules;
//-use webpack;
//-use less & scss;
//-use React;
//-add download feature;

const cartPlaceHolder = document.querySelector(".cartPlaceHolder");
const renderBtns = document.querySelectorAll(".renderBtn");
const inputLogos = document.querySelectorAll(".logo");
const inputFronts = document.querySelectorAll(".front");
const inputBacks = document.querySelectorAll(".back");
const inputSide = document.querySelector(".side");
const inputNew_prices = document.querySelectorAll(".new_price");
const inputOld_prices = document.querySelectorAll(".old_price");
const inputNew_price2 = document.querySelector(".new_price_2");
const inputOld_price2 = document.querySelector(".old_price_2");
const cartTempHtml = document.createElement("div");
const inputs = document.querySelectorAll("input");

//set default open tab
document.querySelector("#first").click();

function generateHTML(
    templateIndex,
    logo,
    front,
    back,
    side,
    oldPrice,
    newPrice,
    oldPrice_2,
    newPrice_2,
) {
    const first = `
    <div class="container first">
    <div class="items logo">
        <img src="${logo}"
            alt="logo" />
    </div>
    <div class="items front">
        <img src="${front}" alt="front" />
    </div>
    <div class="items back">
        <img src="${back}" alt="back" />
    </div>
<div class="items price">
<p>
<span class="price__old">${oldPrice}</span>
<br />
<span class="price__new">${newPrice}</span>
</p>
</div>
</div> `;

    const look = `
<div class="container look">
<div class="items logo">
<img src="${logo}"
alt=""
/>
</div>
<div class="items front">
<img
src="${front}"
alt=""
/>
</div>
<div class="items back">
<img
src="${back}"
alt=""
/>
</div>
<div class="items price price-1">
<p>
<span class="price__old">${oldPrice}</span> <br />
<span class="price__new">${newPrice}</span>
</p>
</div>
<div class="items price price-2">
<p>
<span class="price__old">${oldPrice_2}</span> <br />
<span class="price__new">${newPrice_2}</span>
</p>
</div>
</div>`;

    const third = `
<div class="container third">
        <div class="items logo">
            <img src="${logo}"
                alt="logo" />
        </div>
        <div class="items front">
            <img src="${front}" alt="front" />
        </div>
        <div class="items side">
            <img src="${side}"alt="side" />
        </div>
        <div class="items back">
            <img src="${back}" alt="back" />
        </div>
        <div class="items price">
            <p>
                <span class="price__old">${oldPrice}</span> <br />
                <span class="price__new">${newPrice}</span>
            </p>
        </div>
    </div>`;

    if (templateIndex === 0) {
        cartTempHtml.innerHTML = first;
    } else if (templateIndex === 1) {
        cartTempHtml.innerHTML = look;
    } else if (templateIndex === 2) {
        cartTempHtml.innerHTML = third;
    } else {
        console.log("templateIndex = ", templateIndex, "You don't have third template");
    }

    cartPlaceHolder.append(cartTempHtml);

    //make image movable inside container
    moveImage(document.querySelectorAll("img"));
}

//Tabs
function openTemplate(evt, templateName) {
    // Declare all variables
    let i, tabContent, tabLinks;

    // Get all elements with class="tabcontent" and hide them
    tabContent = document.querySelectorAll(".tabcontent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tabLinks = document.querySelectorAll(".tablinks");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(templateName).style.display = "block";
    evt.currentTarget.classList.add("active");
    // evt.currentTarget.className += " active";
}

renderBtns.forEach((button, index) => {
    button.addEventListener("click", () => {
        generateHTML(
            index,
            inputLogos[index].value,
            inputFronts[index].value,
            inputBacks[index].value,

            //FIXME:only index
            inputSide.value,

            inputOld_prices[index].value,
            inputNew_prices[index].value,
            inputOld_price2.value,
            inputNew_price2.value,
        );
    });
});

//clear inputs
document.querySelector("#clearBtn").addEventListener("click", () => {
    inputs.forEach(input => (input.value = ""));
});

//clear input on keyDown
function clearInputOnKeyDown() {
    inputs.forEach(input => {
        input.addEventListener("mousedown", e => (e.target.value = ""));
    });
}
clearInputOnKeyDown();


//make image movable inside container
function moveImage(image) {
    let mousePosition;
    let offset;
    let isDown = false;

    image.forEach(img => {

        //TODO:
        //Zoom image on mouse wheel
        // img.addEventListener('wheel', zoom);

        img.addEventListener("mousedown", e => {
            isDown = true;
            offset = [
                e.target.offsetLeft - e.clientX,
                e.target.offsetTop - e.clientY
            ];
            console.log(e.target);
            move(isDown, offset, e.target);


        }, true);
    });

    function move(isDown, offset, target) {
        document.addEventListener('mousemove', function (event) {
            event.preventDefault();
            if (isDown) {
                mousePosition = {
                    x: event.clientX,
                    y: event.clientY
                };
                target.style.left = (mousePosition.x + offset[0]) + 'px';
                target.style.top = (mousePosition.y + offset[1]) + 'px';
            }
        }, true);

        document.addEventListener('mouseup', function () {
            isDown = false;
        }, true);

    }
};


// function zoom(event) {
//     event.preventDefault();

//     if (event.deltaY < 0) {
//       // Zoom in
//       scale *= event.deltaY * -2;
//     }
//     else {
//       // Zoom out
//       scale /= event.deltaY * 2;
//     }

//     // Restrict scale
//     scale = Math.min(Math.max(.125, scale), 4);

//     // Apply scale transform
//     el.style.transform = `scale(${scale})`;
//   }

//   let scale = 1;
//   const el = document.querySelector('div');
//   document.onwheel = zoom;