const validateFormSignup = () => {
    // let fname = document.getElementById('firstname');
    // let lname = document.getElementById('lastname');
    // let mail = document.getElementById('mail');
    // let pwd = document.getElementById('pwd');
    // let tandc = document.getElementById('tandc');

        var fname = document.forms['form1']['firstname'];
        var lname = document.forms['form1']['lastname'];
        var mail = document.forms['form1']['email'];
        var passwd1 = document.forms['form1']['password1'];
        var passwd2 = document.forms['form1']['password2'];
        var tandc = document.forms['form1']['tandc'];

      console.log(tandc.value);

    if(fname.value === ''){
        alert('Please enter firstname');
        // name.focus();
        return false;
    }
    if (lname.value === ''){
        alert('Please enter lastname');
        return false;
    }
    if(mail.value === '' && !mail.value.includes('@') && !mail.value.includes('.')){
        alert('invalid email format, must contain @ ');
        return false;
    }
    if(passwd1.value === ''){
        alert('Please enter a password of 6 or more characters');
        return false;
    }
    if(passwd1.value < 6){
        alert('Pls enter a password of 6 or more characters')
        return false;
    }
    if(passwd2.value === '' ){
        alert('Please enter a password of more than 6 characters');
        return false;
    }
    if(passwd1.value !== passwd2.value){
        alert("password mismatch...");
        return false;
    }
    if(!tandc.value){
        alert('Please consent to terms and conditions to signup');
        return false;
    }
     return true;
}

const validateFormLogin = () => {
    // let mail = document.getElementById('mail');
    // let passwd = document.getElementById('passwd');
    // let passwd1 = document.getElementById('passwd1');

        var mail = document.forms['loginForm']['email'];
        var passwd1 = document.forms['loginForm']['password1'];
        var passwd2 = document.forms['loginForm']['password2'];



    if(mail.value === '' || !mail.value.includes('@')){
        alert('invalid mail address');
        return false;
    }
    if (passwd1.value === '' || passwd2.value === ''){
        alert('please enter password')
        return false;
    }else if (passwd1.value !== passwd2.value){
        alert('password mismatach');
        return false;
    }else {
        alert('Access granted');
        return true;}
}


