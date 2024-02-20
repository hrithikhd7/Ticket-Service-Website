let seatList = [];

function handleSeatClick(seatId) {
    const seatArray = document.getElementById(seatId);
    const index = seatList.indexOf(seatId);

    if (index === -1 && seatList.length < 3 ) {
        // Add the seat to the list if it's not already selected and less than 4 seats are selected
        seatList.push(seatId);
        seatArray.style.backgroundColor = 'green';
        countSeat();
    } else {
        // Toggle the seat: Remove it if it's already selected, add it if it's not selected 
        const disableSeat = document.querySelectorAll('.grid-cols-5 button');
        disableSeat.forEach(function disable(removeseat){
          removeseat.disabled= true;
        })

        if (index !== -1 ) {
            seatList.splice(index, 1);
            seatArray.style.backgroundColor = ''; // Remove the background color
            countSeat();
        } else {
            seatList.push(seatId);
            seatArray.style.backgroundColor = 'green';
            countSeat();
        }
    }
}


function countSeat() {
    const seatNumber = document.getElementById('decrementNumber');
    const seatIncrementNumber = document.getElementById('incrementSeat');
    seatNumber.textContent = 40 - seatList.length;
    seatIncrementNumber.textContent = seatList.length;
}



//Click on button to load the ticket section//
document.addEventListener('DOMContentLoaded', function() {
   //calling the button//
    const buyTicketsButton = document.getElementById('buyTickets');
    const busButton = document.getElementById('busButton');
  //reffering to the section//
    const ticketSection = document.getElementById('ticketSection');
  
    //adding the event on click//
    buyTicketsButton.addEventListener('click', function() {
      ticketSection.scrollIntoView({ behavior: 'smooth' });
    });
  
    //adding the event on click//
    busButton.addEventListener('click', function() {
      ticketSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  

  const seatButtons = document.querySelectorAll('.grid-cols-5 button');
  seatButtons.forEach(button => {
      button.addEventListener('click', () => handleSeatClick(button.id));
  });

