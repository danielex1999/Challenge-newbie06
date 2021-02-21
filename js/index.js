const finame = document.querySelector("#fname");
const laname = document.querySelector("#lname");
const email = document.querySelector("#mail");
const pass = document.querySelector("#password");
const img = document.querySelectorAll(".error");
const errortext = document.querySelectorAll(".text");
const form = document.querySelector("form");

form.addEventListener('submit',(xyz)=>{
    xyz.preventDefault();
    if( finame.value === ''){
        finame.classList.add('errorborder');
        img[0].style.display = 'block';
        errortext[0].style.display = 'block';
    }else{
        finame.classList.remove('errorborder');
        img[0].style.display = 'none';
        errortext[0].style.display = 'none';
    }
    if( laname.value === ''){
        laname.classList.add('errorborder');
        img[1].style.display = 'block';
        errortext[1].style.display = 'block';
    }else{
        laname.classList.remove('errorborder');
        img[1].style.display = 'none';
        errortext[1].style.display = 'none';
    }
    if( email.value === ''){
        email.classList.add('errorborder');
        img[2].style.display = 'block';
        errortext[2].style.display = 'block';
    }else{
        email.classList.remove('errorborder');
        img[2].style.display = 'none';
        errortext[2].style.display = 'none';
    }
    if( pass.value === ''){
        pass.classList.add('errorborder');
        img[3].style.display = 'block';
        errortext[3].style.display = 'block';
    }else{
        pass.classList.remove('errorborder');
        img[3].style.display = 'none';
        errortext[3].style.display = 'none';
    }
})
