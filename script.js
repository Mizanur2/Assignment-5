const seats = document.querySelectorAll('.seat');


let seatCliked = [];
const pricePerSeat = 550;
// let totalPrice = 0;

for (let seat of seats) {

    seat.addEventListener('click', function (e) {

        // create a p tag with the value of the seat
        const bookedSeat = document.createElement('p');
        bookedSeat.innerText = e.target.innerText;

        seatCliked.push(bookedSeat)


        if (seatCliked.length <= 4) {
            e.target.style.backgroundColor = '#1DD100';
            e.target.style.color = 'white';

            //coupone 
            const couponBtn = document.getElementById('coupon-btn');
            if (seatCliked.length === 4) {

                couponBtn.removeAttribute('disabled')
            } else {

                couponBtn.setAttribute('disabled', true)
            }





            // calculate the total seats 
            const currentSeatElement = document.getElementById('total-seats');
            const currentSeatText = currentSeatElement.innerText;
            const currentSeat = parseInt(currentSeatText);
            const newTotalSeat = currentSeat - 1;
            currentSeatElement.innerText = newTotalSeat;
            // console.log(newTotalSeat);



            // console.log(seatCliked.length);


            // append the new p tag inside the booked seat container
            // console.log(bookedSeatContainer);
            const bookedSeatContainer = document.getElementById('seat-name');

            bookedSeatContainer.appendChild(bookedSeat);
            // console.log(bookedSeat.innerText);
            //create the class of the seat 

            const seatClass = document.createElement('p');
            seatClass.innerText = 'Economy';
            // console.log(seatClass);

            //append seat class to the container 
            const seatClassContainer = document.getElementById('seat-class');
            seatClassContainer.appendChild(seatClass)
            // console.log(seatClassContainer);

            //create price tag 
            const price = document.createElement('p');
            price.innerText = pricePerSeat;

            //append price tag 

            const priceContainer = document.getElementById('per-seat-price');
            priceContainer.appendChild(price)



            //selected seat 
            const currentSelectedSeatElement = document.getElementById('selected-seat');
            const currentSelectedSeatText = currentSelectedSeatElement.innerText;
            const currentSelectedSeat = parseInt(currentSelectedSeatText);
            const newSelectedSeat = currentSelectedSeat + 1;
            currentSelectedSeatElement.innerText = newSelectedSeat;

            // update total price 

            const totalPriceElement = document.getElementById('total-price');
            const totalPriceText = totalPriceElement.innerText;
            const totalPrice = parseInt(totalPriceText);
            const newTotalPrice = totalPrice + 550;
            totalPriceElement.innerText = newTotalPrice;

            //update grand total price 

            const grandTotalElement = document.getElementById('grand-total');
            const grandTotalText = grandTotalElement.innerText;
            const grandTotal = parseInt(grandTotalText);
            const newGrandTotal = grandTotal + 550;
            grandTotalElement.innerText = newGrandTotal

        }
        else {
            alert("you can't select more")
            return

        }

    })
}

const phone = document.getElementById('phone');
phone.addEventListener('keyup', function (e) {
    const phoneNumber = parseInt(e.target.value);
    const nextBtn = document.getElementById('next-btn');
    if (typeof phoneNumber === 'number' && seatCliked.length > 0) {
        nextBtn.removeAttribute('disabled')
    }
    else {
        nextBtn.setAttribute('disabled', true)
    }
    console.log(phoneNumber);
})

//coupon button 

const couponButton = document.getElementById('coupon-btn');
couponButton.addEventListener('click', function () {

    // grand total 


    const couponeInputField = document.getElementById('coupon-field-input');
    const couponInput = document.getElementById('coupon-input');
    const couponCode = couponInput.value;

    if (couponCode === 'New15') {

        const discountElement = document.getElementById('grand-total');
        const discountElementText = discountElement.innerText;
        const priceBeforeDiscount = parseInt(discountElementText);
        const discount = priceBeforeDiscount * 0.15;
        const finalPrice = priceBeforeDiscount - discount;
        console.log(finalPrice);
        discountElement.innerText = finalPrice;

        couponInput.value = '';
        couponeInputField.style.display = 'none';
    }
    else if (couponCode === 'Couple 20') {
        const discountElement = document.getElementById('grand-total');
        const discountElementText = discountElement.innerText;
        const priceBeforeDiscount = parseInt(discountElementText);
        const discount = priceBeforeDiscount * 0.2;
        const finalPrice = priceBeforeDiscount - discount;
        console.log(finalPrice);
        discountElement.innerText = finalPrice;

        couponInput.value = '';
        couponeInputField.style.display = 'none';

    }
    else {
        alert('invalid coupon')
    }
    // console.log(couponCode);
    // console.log('coupon button clicked');
})

