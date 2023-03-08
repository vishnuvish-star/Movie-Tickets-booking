"use strict";
const bookingFrame = document.getElementById("main");
// console.log(bookingFrame);
const overAllSeats = document.querySelectorAll(".row .seats:not(.occupied)");
// console.log(overAllSeats);
const selectMovie = document.getElementById("select-movies");
// console.log(selectMovie);
let howMuchTickets = document.getElementById("howMuch");
// console.log(howMuchTickets);
let totalPrice = document.getElementById("price");
// console.log(totalPrice);

// variables
let totalTickets = 0;
let ticketPrice = 0;
let totalAmount = 0;

// functions
function calculate() {
  let seatsSelected = document.querySelectorAll(".row .selected");
  totalTickets = seatsSelected.length;
  totalAmount = totalTickets * ticketPrice;
  totalPrice.innerText = totalAmount;
  howMuchTickets.innerText = totalTickets;
}

// Events

selectMovie.addEventListener("change", (e) => {
  ticketPrice = Number(e.target.value);
  /*which movie we selected that movie ticket price is keep in this variable "ticketPrice"  */
  calculate(); /* ticket price is send to calculate function() */
});

for (let i = 0; i < overAllSeats.length; i++) {
  const allSeats = overAllSeats[i];

  //   add event listener to all  selecting seats

  allSeats.addEventListener("click", (e) => {
    if (e.target.classList.contains("seats")) {
      e.target.classList.toggle("selected");
    }

    calculate(); /* call the calculate function for how many tickets we are  selected */
  });
}
