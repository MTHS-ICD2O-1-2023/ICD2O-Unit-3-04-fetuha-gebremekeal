// Created by: Fetuha
// Created on: Apr 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates celsius.
 */
function calculateCelsius() {
  // input
  const fahrenheit = parseInt(document.getElementById('fahrenheit').value)


  // process
  const celsius = 5.0 / 9.0* (fahrenheit-32)

  // output
  document.getElementById("celsius").innerHTML = 'Celsius is: ' + celsius.toFixed(2) + '<sup> 0'
}