
let featureParagraph = document.getElementById('features');
let featureList = document.getElementById('feature-list');


featureParagraph.addEventListener('click', function() {
  if (featureList.style.display === "none") {
    featureList.style.display = "block";
  } else {
    featureList.style.display = "none";
  }
});

let featureParagraph2 = document.getElementById('features-2');
let nextFeatureList = document.getElementById('feature-list-2');

featureParagraph2.addEventListener('click', function() {
  if (nextFeatureList.style.display === "none") {
    nextFeatureList.style.display = "block";
  } else {
    nextFeatureList.style.display = "none";
  }
});

let featureParagraph3 = document.getElementById('features-3');
let thirdFeatureList = document.getElementById('feature-list-3');

featureParagraph3.addEventListener('click', function() {
  if (thirdFeatureList.style.display === "none") {
    thirdFeatureList.style.display = "block";
  } else {
    thirdFeatureList.style.display = "none";
  }
});

let featureParagraph4 = document.getElementById('features-4');
let fourthFeatureList = document.getElementById('feature-list-4');

featureParagraph4.addEventListener('click', function() {
  if (fourthFeatureList.style.display === "none") {
    fourthFeatureList.style.display = "block";
  } else {
    fourthFeatureList.style.display = "none";
  }
});

let productOne = document.getElementById('product-1');
productOne.addEventListener('click', () => {
  location.href = "https://amzn.to/3QWIxcH";
})

let productTwo = document.getElementById('product-2');
productTwo.addEventListener('click', () => {
  location.href = "https://amzn.to/3FNd0mM";
})

let productThree = document.getElementById('product-3');
productTwo.addEventListener('click', () => {
  location.href = "https://amzn.to/3tPY1Wz";
})

let productFour = document.getElementById('product-4');
productTwo.addEventListener('click', () => {
  location.href = "https://amzn.to/3Sqtedh";
})

let productFive = document.getElementById('product-5');
productTwo.addEventListener('click', () => {
  location.href = "https://amzn.to/3Qqt96G";
})

let productSix = document.getElementById('product-6');
productTwo.addEventListener('click', () => {
  location.href = "https://amzn.to/46e0HL4";
})