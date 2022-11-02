// Copyright (c) 2020 Mark Palfi All rights reserved
//
// Created by: Mark Palfi
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * This function gets users street name and number and shows it back to user.
 */
function enterClicked() {
  // input
  const userNumber = document.getElementById("user-number").value

  //process
  // returns a random integer from 1 to 10
  const machineNumber = Math.floor(Math.random() * 6) + 1
  console.log(machineNumber)

  // output
  if (userNumber == machineNumber) {
    document.getElementById("message").innerHTML =
    "That is correct."
  }

   if (userNumber != machineNumber) {
    document.getElementById("message").innerHTML =
    "That is incorrect."
   }
}