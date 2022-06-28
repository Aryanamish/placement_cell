let pass1;
let pass2;
window.onload = function(){
    pass1 = document.querySelector('[name="pass1"]');
    pass2 = document.querySelector('[name="pass2"]');
    let password_match = false;
    pass2.addEventListener("focusout",() => {
        if(pass1.value == pass2.value)
        {
            password_match = true;
            pass1.classList.remove("is-invalid");
            pass2.classList.remove("is-invalid");
            pass1.classList.add("is-valid");
            pass2.classList.add("is-valid");
        }

        else {
            password_match = false;
            pass1.classList.remove("is-valid");
            pass2.classList.remove("is-valid");
            pass1.classList.add("is-invalid");
            pass2.classList.add("is-invalid");
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
            pass1.classList.add("is-invalid");
            pass2.classList.add("is-invalid");
        }else{
            pass1.classList.remove("is-invalid")
            pass2.classList.remove("is-invalid")
        }

        if(valid_form === true){
            document.querySelector('form').submit();
        }
    })


    
}
