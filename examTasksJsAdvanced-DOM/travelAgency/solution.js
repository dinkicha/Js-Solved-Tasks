window.addEventListener('load', solution);

function solution() {
  const inputFields = Array.from(document.getElementsByTagName("input"));
  const submitButton = document.getElementById('submitBTN');

  submitButton.addEventListener('click', onPreview);

  function onPreview(e) {
    e.preventDefault();

    let [fullName, email, address] = inputFields.map(
      (e) => `${e.value}`);
      let phoneNumber = document.getElementById('phone');
      let postalCode = document.getElementById('code');

      let secondPhone = phoneNumber.value;
      let secondPostal = postalCode.value;

      if (fullName == '' ||
        email == ''
      ) {
        return;
      }
      
      // let actionDiv = document.getElementById('actions');
      let ul = document.getElementById('infoPreview');
      ul.innerHTML = `<li>Full Name: ${fullName}</li><li>Email: ${email}</li><li>Phone Number: ${phoneNumber.value}</li><li>Address: ${address}</li><li>Postal Code: ${postalCode.value}</li>`;
      let editButton = document.getElementById('editBTN');   
      let continueButton = document.getElementById('continueBTN');  
      submitButton.disabled = true;
      
      editButton.disabled = false;
      continueButton.disabled = false;

      editButton.addEventListener('click', edited);
      continueButton.addEventListener('click', continued);

      function edited() {
        let inputInfo = [fullName, email, address];
        for (let i = 0; i < inputFields.length; i++) {
          inputFields[i].value = inputInfo[i];
        }
        phoneNumber.value = secondPhone;
        postalCode.value = secondPostal;
        ul.remove();
        submitButton.disabled = false;
      }

      function continued() {

      }

  }
 
}
