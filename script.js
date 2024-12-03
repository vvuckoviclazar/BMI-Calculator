"use strict";

const height = document.querySelector(".height");
const weight = document.querySelector(".weight");
const result = document.querySelector(".result");
const form = document.querySelector("form");
const span = document.querySelector("span");

let heightNumber;
let weightNumber;
let resultNumber;

height.addEventListener("input", (e) => {
  heightNumber = e.target.value;
});

weight.addEventListener("input", (e) => {
  weightNumber = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  resultNumber = weightNumber / ((heightNumber / 100) * (heightNumber / 100));
  result.value = resultNumber;

  if (result.value >= 30) {
    span.innerHTML = "Obesity!";
  } else if (result.value >= 15 && result.value <= 30) {
    span.innerHTML = "Overweight!";
  } else if (result.value <= 15 && result.value >= 10) {
    span.innerHTML = "Normal Weight.";
  } else if (result.value < 10) {
    span.innerHTML = "Underweight!";
  }
});
