
let featureParagraph = document.getElementById('features');
let featureList = document.getElementById('feature-list');


featureParagraph.addEventListener('click', function() {
  if (featureList.style.display === "block") {
    featureList.style.display = "none";
  } else {
    featureList.style.display = "block";
  }
});

let featureParagraph2 = document.getElementById('features-2');
let nextFeatureList = document.getElementById('feature-list-2');

featureParagraph2.addEventListener('click', function() {
  if (nextFeatureList.style.display === "block") {
    nextFeatureList.style.display = "none";
  } else {
    nextFeatureList.style.display = "block";
  }
});

let featureParagraph3 = document.getElementById('features-3');
let thirdFeatureList = document.getElementById('feature-list-3');

featureParagraph3.addEventListener('click', function() {
  if (thirdFeatureList.style.display === "block") {
    thirdFeatureList.style.display = "none";
  } else {
    thirdFeatureList.style.display = "block";
  }
});

let featureParagraph4 = document.getElementById('features-4');
let fourthFeatureList = document.getElementById('feature-list-4');

featureParagraph4.addEventListener('click', function() {
  if (fourthFeatureList.style.display === "block") {
    fourthFeatureList.style.display = "none";
  } else {
    fourthFeatureList.style.display = "block";
  }
});

let productOne = document.getElementById('product-1');
productOne.addEventListener('click', () => {
  location.href = "https://amzn.to/49AGiTw";
})

let productTwo = document.getElementById('product-2');
productTwo.addEventListener('click', () => {
  location.href = "https://amzn.to/40C28C9";
})

let productThree = document.getElementById('product-3');
productTwo.addEventListener('click', () => {
  location.href = "https://amzn.to/40CGGgd";
})

let productFour = document.getElementById('product-4');
productTwo.addEventListener('click', () => {
  location.href = "https://amzn.to/3N89PdR";
})

let productFive = document.getElementById('product-5');
productTwo.addEventListener('click', () => {
  location.href = "https://amzn.to/47cuXHz";
})

let productSix = document.getElementById('product-6');
productTwo.addEventListener('click', () => {
  location.href = "https://amzn.to/40Vwsb7";
})