// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get a reference to the Buy Tickets button
  const buyTicketsButton = document.getElementById('buyTickets');

  // Get a reference to the Ticket Section
  const ticketSection = document.getElementById('ticketSection');

  // Add a click event listener to the Buy Tickets button
  buyTicketsButton.addEventListener('click', function() {
      // Scroll the page to the Ticket Section
      ticketSection.scrollIntoView({ behavior: 'smooth' });
  });
});


//Button Click Color Change// 
const buttons = document.querySelectorAll('.btn');


buttons.forEach(button => {
    button.dataset.initialColor = button.style.backgroundColor; 
});

buttons.forEach(button => {

    button.addEventListener('click', () => {
        const currentColor = button.style.backgroundColor;
        const initialColor = button.dataset.initialColor;

        if (currentColor === initialColor) {
            button.style.backgroundColor = '#1DD100';
        } else {
            button.style.backgroundColor = initialColor;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const seatDecrement = document.getElementById('seatDecrement');
  const seatButtons = document.querySelectorAll('.btn.bg-[#0307121A]');

  let remainingSeats = 40;

  function updateSeatCount() {
      seatDecrement.textContent = remainingSeats + ' Seats Left';
  }

  seatButtons.forEach(function (button) {
      button.addEventListener('click', function () {
          if (button.classList.contains('selected')) {
              button.classList.remove('selected');
              remainingSeats++;
          } else {
              button.classList.add('selected');
              remainingSeats--;
          }
          updateSeatCount();
      });
  });

  updateSeatCount();
});
