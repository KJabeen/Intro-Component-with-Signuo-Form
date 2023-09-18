
const form = document.querySelector(".container2 form");


// OR  const form = document.querySelector(".field-container form");


const inputs = document.querySelectorAll(".container2 form input");

// OR  const form = document.querySelector(".field-container form input");

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    inputs.forEach(input => {
        if(!input.value){
            input.parentElement.classList.add('error');
        }else{
            input.parentElement.classList.remove('error');
            if(input.type=='email'){
                if(validateEmail(input.value)){
                    input.parentElement.classList.remove('error');

                }else{
                    input.parentElement.classList.add('error');
                }
                
            }
            // for Password validation:
            // else if(input.type=='password') {
            //     if(validatePassword(input.value)){
            //         input.parentElement.classList.remove('error');

            //     }else{
            //         input.parentElement.classList.add('error');
            //     }
            // }
        }
    
    })
});

function validateEmail(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(String(email).toLowerCase());
  }

  // for Password validation:
//   function validatePassword(password) {
//     var pwd = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%&*]{6,20}$/;
//     return pwd.test(String(email).toLowerCase());
// //     At least one uppercase letter
// //      At least one lowercase letter
// //      At least one digit
// //      At least one special symbol
// //      should be more than 4 character
//   }