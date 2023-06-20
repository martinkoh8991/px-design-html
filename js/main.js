// SCROLL TO TOP
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) { //pixels
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

// PRE LOADER 
var delay;

function load() {
  delay = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("bodyDiv").style.display = "block";
}

// COST ESTIMATOR SLIDER
var dataPriceInput = {
  "0": "$1,000+",
  "1": "$2,000+",
  "2": "$5,000+",
  "3": "$10,000+",
  "4": "$30,000+",
};

var dataPriceOutput = {
  "0": ["$", "100", "/mth"],
  "1": ["$", "200", "/mth"],
  "2": ["$", "500", "/mth"],
  "3": ["$", "800", "/mth"],
  "4": ["$", "1000+", "/mth"]
};

var dataListOutput = {
  "0": "5 Pages",
  "1": "5 Pages",
  "2": "10 Pages",
  "3": "15 Pages",
  "4": "20+ Pages"
}

const pricingSlider = document.querySelector(".pricing-slider"); 

// Input
const pricingInput = {
  data: dataPriceInput, // reference data price input object
  el: pricingSlider.querySelector("input"), //.pricing-slider's input html element ITSELF. needed here, to set attribute of min and max later
  sliderValue: pricingSlider.querySelector(".pricing-slider-value"), //SLIDER VALUE, $1000+, $2000+
};

// Output
const pricingOutput = []; 
const pricingOutputEl = pricingSlider.parentNode.querySelector(".pricing-item-price"); 
const pricingOutputList = document.getElementById("list-pages");
  const pricingOutputObj = {
      currency: pricingOutputEl.querySelector(".pricing-item-price-currency"),
      amount: pricingOutputEl.querySelector(".pricing-item-price-amount"),
      after: pricingOutputEl.querySelector(".pricing-item-price-after"),
      data: dataPriceOutput, 

      list: pricingOutputList,
      dataList: dataListOutput
  };
  pricingOutput.push(pricingOutputObj); //array object, method


pricingInput.el.setAttribute("min", 0); //set attribute of "pricing-slider" input element, minimum 0
pricingInput.el.setAttribute("max", Object.keys(pricingInput.data).length - 1); //object.keys method(), return the property NAME as array

function handlePricingSlider(input, output) {
  input.sliderValue.innerHTML = input.data[input.el.value]; 
  // input.data is pricingInput data object;  
  // [input.el.value] is .pricing-slider's input element, which can go from 0-4 as set above; 
  // if e.g input.data[0], then input.sliderValue.innerHTML = $1,000
  for (let i = 0; i < output.length; i++) {
    //pricingOutput is an array of objects; e.g ["$", "100", "/mth"],
      const outputObj = output[i]; //pricingOutput[0]
      outputObj.currency.innerHTML = outputObj.data[input.el.value][0]; //outputObj currency assigned to its dataPriceOutput
      // because dataPriceOutput is array of objects containing array, so [input.el.value][0]
      // [0,1,2] indicate position of array of dataPriceOutout object. e.g ["$", "100", "/mth"], [0] is "$"
      outputObj.amount.innerHTML = outputObj.data[input.el.value][1];
      outputObj.after.innerHTML = outputObj.data[input.el.value][2];
      outputObj.list.innerHTML = outputObj.dataList[input.el.value]; 
  }
}

// function call. pricingInput is an object of objects, pricingOutput is array of object
handlePricingSlider(pricingInput, pricingOutput);
window.addEventListener("input", function () {
handlePricingSlider(pricingInput, pricingOutput);
});




