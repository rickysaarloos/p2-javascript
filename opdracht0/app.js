document.addEventListener('DOMContentLoaded', () => {
    let showModalButton = document.getElementById('show-modal');
    let modal = document.getElementById('myModal');
    let verifyButton = document.getElementById('verify-age');
    let ageInput = document.getElementById('age');
    let tooYoungPage = document.getElementById('too-young');
    let closeModalButton = document.getElementsByClassName('close')[0];
    let openModalButton = document.getElementById('myBtn');
    
    
        openModalButton.onclick = function() {
            modal.style.display = "block";
        }
    
    
        closeModalButton.onclick = function() {
            modal.style.display = "none";
        }
    
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    
        verifyButton.addEventListener('click', () => {
            age = parseInt(ageInput.value);
    
            if (age >= 18) {
    
                window.location.href = 'https://www.google.com/'; 
            } else {
    
                window.location.href = 'to.html'; 
            }
        });
    });