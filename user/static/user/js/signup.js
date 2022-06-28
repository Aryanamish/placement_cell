let password;
let confirm_password;
window.onload = function(){
    password = document.querySelector('[name="password"]');
    confirm_password = document.querySelector('[name="confirm_password"]');
    let password_match = false;
    confirm_password.addEventListener("focusout",() => {
        if(password.value == confirm_password.value)
        {
            password_match = true;
            password.classList.remove("is-invalid");
            confirm_password.classList.remove("is-invalid");
            password.classList.add("is-valid");
            confirm_password.classList.add("is-valid");
        }

        else {
            password_match = false;
            password.classList.remove("is-valid");
            confirm_password.classList.remove("is-valid");
            password.classList.add("is-invalid");
            confirm_password.classList.add("is-invalid");
        }
    });

    document.querySelector('input[type="submit"]').addEventListener('click', (e)=>{
        
        e.preventDefault();
        let email = document.querySelector('input[name="email"]');

        let reg_no = document.querySelector('input[name="reg_no"]');

        let valid_form = true;

        if(validateEmail(email.value) === null){
            valid_form = false;
            email.classList.add("is-invalid");

        }else{
            email.classList.remove("is-invalid")
        }

        if(!reg_no.isNumber() && reg_no.length != 8){
            valid_form = false;
            reg_no.classList.add("is-invalid")
        }else{
            reg_no.classList.remove("is-invalid")
        }

        if(!password_match){
            valid_form=false;
            password.classList.add("is-invalid");
            confirm_password.classList.add("is-invalid");
        }else{
            password.classList.remove("is-invalid")
            confirm_password.classList.remove("is-invalid")
        }

        if(valid_form === true){
            document.querySelector('form').submit();
        }
    })


    
}
