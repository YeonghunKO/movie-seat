const movie = document.getElementById('movie');
const allSeats = document.querySelectorAll('.row .seat:not(.occupied)');
const seatsContainer = document.querySelector('.seats-container');
const count = document.querySelector('#count');
const totalPrice = document.querySelector('#total');
const selectedSeats = document.querySelectorAll('.row .seat.selected');

export { movie, allSeats, seatsContainer, count, totalPrice, selectedSeats };
