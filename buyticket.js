let seatList = [];
let appliedCoupon = null;

function handleSeatClick(seatId) {
  const seatArray = document.getElementById(seatId);
  const index = seatList.indexOf(seatId);

  if (index === -1 && seatList.length < 4) {
    seatList.push(seatId);
    seatArray.style.backgroundColor = 'green';
    countSeat();
    addRowToTable(seatId);
    totalpriceCalc();

    if (seatList.length === 4) {
      document.getElementById('applyButton').removeAttribute('disabled');
    }
  }
}

function countSeat() {
  const seatNumber = document.getElementById('decrementNumber');
  const seatIncrementNumber = document.getElementById('incrementSeat');
  seatNumber.textContent = 40 - seatList.length;
  seatIncrementNumber.textContent = seatList.length;
}

function addRowToTable(idofSeat) {
  const newRowHtml = `<tr>
           <td>${idofSeat.toUpperCase()}</td>
           <td>Economy</td>
           <td>550</td>
        </tr>`;

  document.getElementById('table-section').querySelector('tbody').insertAdjacentHTML('beforeend', newRowHtml);
}

function totalpriceCalc() {
  const ticketPrice = 550;
  const totalSeats = seatList.length;

  let totalPrice = ticketPrice * totalSeats;
  let discountedPrice = totalPrice;

  if (appliedCoupon === 'NEW15') {
      discountedPrice *= 0.85; 
  } else if (appliedCoupon === 'Couple 20') {
      discountedPrice *= 0.8; 
  }

  const calctotalprice = 'BDT ' + totalPrice.toLocaleString();
  const calcdiscprice = 'BDT ' + discountedPrice.toLocaleString();

  document.getElementById('price-total').textContent = calctotalprice;
  document.getElementById('grand-total').textContent = calcdiscprice;
}

function updateGrandTotal(newTotal) {
  const calctotalprice = 'BDT ' + newTotal.toLocaleString();
  document.getElementById('grand-total').textContent = calctotalprice;
}

document.getElementById('applyButton').addEventListener('click', function () {
  const couponInput = document.getElementById('couponInput').value.trim();

  if (couponInput === 'NEW15' || couponInput === 'Couple 20') {
    appliedCoupon = couponInput;
    totalpriceCalc();
    document.getElementById('couponInput').value = ''; 
  } else {
    alert('Invalid coupon code');
  }
});


document.addEventListener('DOMContentLoaded', function () {

  
  const buyTicketsButton = document.getElementById('buyTickets');
  const busButton = document.getElementById('busButton');
  
  const ticketSection = document.getElementById('ticketSection');

  
  buyTicketsButton.addEventListener('click', function () {
    ticketSection.scrollIntoView({ behavior: 'smooth' });
  });

  
  busButton.addEventListener('click', function () {
    ticketSection.scrollIntoView({ behavior: 'smooth' });
  });

  const seatButtons = document.querySelectorAll('.grid-cols-5 button');
  seatButtons.forEach(button => {
    button.addEventListener('click', () => handleSeatClick(button.id));
  });
});