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
  const street_name = document.getElementById("street-name").value
  const street_number = parseInt(document.getElementById("street-number").value)

  // output
  document.getElementById("address").innerHTML =
    "You live on: " + street_name + ", house " + street_number + "."
}
