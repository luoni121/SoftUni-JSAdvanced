function validate() {
    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let company = $('#company');
    let companyNumber = $('#companyNumber');
    let companyInfo = $('#companyInfo');
    let submitBtn = $('#submit');
    let validationDiv = $('#valid');

    let isValid = true;

    company.on('change', function (){
       if(company.is(':checked')){
           companyInfo.css('display','block');
       }else{
           companyInfo.css('display','none');
       }
    });

    submitBtn.on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        validate();

        if(isValid === true) {
            validationDiv.css('display', 'block');
        }else{
            validationDiv.css('display', 'none');
        }

    });

    function validate() {
        isValid = true;

        validateForm(username, /^[A-Za-z0-9]{3,20}$/g);
        validateForm(email, /(.)*@(.)*\.(.)*/g);

        if(password.val() === confirmPassword.val()){
            validateForm(password, /^\w{5,15}$/g);
            validateForm(confirmPassword, /^\w{5,15}$/g);
        }else{
            password.css("border", "red");
            confirmPassword.css("border", "red");
            isValid = false;
        }
        if(company.is(':checked')) {
            let num = Number(companyNumber.val());
            if(num >= 1000 && num <= 9999 ){
                companyNumber.css('border','none');
            }else{
                companyNumber.css("border", "red");
                isValid = false;
            }
        }
    }

    function validateForm(input, pattern) {
        if(pattern.test(input.val())){
            input.css('border','none');
        }else{
            input.css("border", "red");
            isValid = false;
        }
    }
}
