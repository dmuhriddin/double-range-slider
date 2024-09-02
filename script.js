window.onload = function () {
  slideOne();
  slideTwo();
};

let sliderOne = document.getElementById("slider-1"),
  sliderTwo = document.getElementById("slider-2"),
  displayValOne = document.getElementById("range1"),
  displayValTwo = document.getElementById("range2");

let minGap = 5;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.textContent = sliderOne.value;
  fillColor();
}

function slideTwo() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.textContent = sliderTwo.value;
  fillColor();
}

function fillColor() {
  parcent1 = (sliderOne.value / sliderMaxValue) * 100;
  parcent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${parcent1}%, #3264fe ${parcent1}%, #3264fe ${parcent2}%, #dadae5 ${parcent2}%)`;
}
