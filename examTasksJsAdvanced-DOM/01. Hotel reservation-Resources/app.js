window.addEventListener("load", solve);

function solve() {
  const buttonNext = document.getElementById("next-btn");
  const inputFields = Array.from(document.getElementsByTagName("input"));

  buttonNext.addEventListener("click", onReserve);

  function onReserve(e) {
    e.preventDefault();
    let [firstName, lastName, inDate, outDate, numberOfGuests] = inputFields.map(
        (e) => `${e.value}`);
    if (
      firstName == "" ||
      lastName == "" ||
      inDate == "" ||
      outDate == "" ||
      numberOfGuests == "" ||
      new Date(inDate) >= new Date(outDate)
    ) {
      return;
    }


    let list = document.getElementsByClassName('info-list')[0] //it's [0] because it returns a lot of element - class
    let confirmList = document.getElementsByClassName('confirm-list')[0] //same thing
    let verification =  document.getElementById('verification');

    //creating a li because the task wants in
    let li = document.createElement('li');
    //setting a attribute to it
    li.setAttribute('class', 'reservation-content');
    //making innerHTML because with the closing tags
    li.innerHTML = `<article><h3>Name: ${firstName} ${lastName}</h3><p>From date: ${inDate}</p><p>To date: ${outDate}</p><p>For ${numberOfGuests} people</p></article>`;
    
    //making the button setting the attribute
    //setting the textContent and setting eventListener
    let buttonEdit = document.createElement('button');
    buttonEdit.setAttribute('class', 'edit-btn');
    buttonEdit.textContent = 'Edit';
    buttonEdit.addEventListener('click', EditReservation);

    //doing the exact same thing
    let buttonContinue = document.createElement('button');
    buttonContinue.setAttribute('class', 'continue-btn');
    buttonContinue.textContent = 'Continue';
    buttonContinue.addEventListener('click', ContinueReservation);

    //appending the buttons to the li element
    li.appendChild(buttonEdit);
    li.appendChild(buttonContinue);

    //appending the li to the list element
    list.appendChild(li);

    buttonNext.disabled = true;

    //making the function that we set on the eventListener
    function EditReservation() {
        //the array is in the correct order that's why  line 65 it's this way
        let inputInfo = [firstName, lastName, inDate, outDate, numberOfGuests];
        for (let i = 0; i < inputFields.length; i++) {
            inputFields[i].value = inputInfo[i];
        }
        li.remove();
        buttonNext.disabled = false;
    }
    //making the function that we set on the  eveneListener
        function ContinueReservation() {
            buttonEdit.setAttribute('class', 'confirm-btn');
            buttonEdit.textContent = 'Confirm';
            buttonEdit.removeEventListener('click', EditReservation);
            buttonEdit.addEventListener('click', ConfirmReservation);

            buttonContinue.setAttribute('class', 'cancel-btn');
            buttonContinue.textContent = 'Cancel';
            buttonContinue.removeEventListener('click', ContinueReservation);
            buttonContinue.addEventListener('click', CancelReservation);

            confirmList.appendChild(li);
        }


        function ConfirmReservation() {
            li.remove();

            verification.setAttribute('class', 'reservation-confirmed');
            verification.textContent = 'Confirmed.';

            buttonNext.disabled = false;
        }

        function CancelReservation() {
            li.remove();

            verification.setAttribute('class', 'reservation-cancelled');
            verification.textContent = 'Cancelled.';

            buttonNext.disabled = false;
        }
    }
  }

