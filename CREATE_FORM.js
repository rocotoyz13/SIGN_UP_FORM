
const fn = document.querySelector("#firstname");
const mn = document.querySelector("#middlename");
const ln = document.querySelector("#lastname");
const com = document.querySelector("#companyname");
const pn = document.querySelector("#phonenumber");
const ps = document.querySelector("#position");
const un = document.querySelector("#username");
const pass = document.querySelector("#password");
const cpass = document.querySelector("#cpassword");


const msg = document.querySelector("#error-msg");
const msg1 = document.querySelector("#error-msg1");
const msg2 = document.querySelector("#error-msg2");
const msg3 = document.querySelector("#error-msg3");
const msg4 = document.querySelector("#error-msg4");
const msg5 = document.querySelector("#error-msg5");
const msg6 = document.querySelector("#error-msg6");
const msg7 = document.querySelector("#error-msg7");
const msg8 = document.querySelector("#error-msg8");


const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;


 nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();

if(fn.value.length === 0 )
{
  msg.innerHTML = "<p class='error'> please enter your first name <i class='error-icon fas fa-exclamation-circle'></i></p> ";
  setTimeout(()=> document.querySelector(".error-icon").remove(),2000);
  setTimeout(()=> document.querySelector(".error").remove(),2000);
}


else if(mn.value.length === 0 )
{
  msg1.innerHTML = "<p class='error'> please enter your middle name <i class='error-icon fas fa-exclamation-circle'></i></p> ";
  setTimeout(()=> document.querySelector(".error-icon").remove(),2000);
  setTimeout(()=> document.querySelector(".error").remove(),2000);
}

else if(ln.value.length === 0 )
{
  msg2.innerHTML = "<p class='error'> please enter your last name <i class='error-icon fas fa-exclamation-circle'></i></p> ";
  setTimeout(()=> document.querySelector(".error-icon").remove(),2000);
  setTimeout(()=> document.querySelector(".error").remove(),2000);
}

else 
{

        slidePage.style.marginLeft = "-25%";
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
        }
    });


nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();

  if(com.value.length === 0 )
  {
    msg3.innerHTML = "<p class='error'> please enter your company name <i class='error-icon fas fa-exclamation-circle'></i></p> ";
    setTimeout(()=> document.querySelector(".error-icon").remove(),2000);
    setTimeout(()=> document.querySelector(".error").remove(),2000);
  }
  
  
  else if(pn.value.length === 0 )
  {
    msg4.innerHTML = "<p class='error'> please enter your phone number <i class='error-icon fas fa-exclamation-circle'></i></p> ";
    setTimeout(()=> document.querySelector(".error-icon").remove(),2000);
    setTimeout(()=> document.querySelector(".error").remove(),2000);
  }
  
  else if(ps.value.length === 0 )
  {
    msg5.innerHTML = "<p class='error'> please state your work position <i class='error-icon fas fa-exclamation-circle'></i></p> ";
    setTimeout(()=> document.querySelector(".error-icon").remove(),2000);
    setTimeout(()=> document.querySelector(".error").remove(),2000);
  }

  else 
  {

    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;

  }
 
});



prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();


  // if(un.value.length === 0 )
  // {
  //   msg6.innerHTML = "<p class='error'> please enter your username <i class='error-icon fas fa-exclamation-circle'></i></p> ";
  //   setTimeout(()=> document.querySelector(".error-icon").remove(),2000);
  //   setTimeout(()=> document.querySelector(".error").remove(),2000);
  // }
  
  
  // else if(pass.value.length === 0 )
  // {
  //   msg7.innerHTML = "<p class='error'> please enter your password <i class='error-icon fas fa-exclamation-circle'></i></p> ";
  //   setTimeout(()=> document.querySelector(".error-icon").remove(),2000);
  //   setTimeout(()=> document.querySelector(".error").remove(),2000);
  // }
  
  // else if(cpass.value.length === 0 )
  // {
  //   msg8.innerHTML = "<p class='error'> password retype your password <i class='error-icon fas fa-exclamation-circle'></i></p> ";
  //   setTimeout(()=> document.querySelector(".error-icon").remove(),2000);
  //   setTimeout(()=> document.querySelector(".error").remove(),2000);
  // }

// else {

  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;

// }

});


prevBtnFourth.addEventListener("click", function(event){

//     if(un.value.length === 0 )
//   {
//     msg6.innerHTML = "<p class='error'> please enter your username <i class='error-icon fas fa-exclamation-circle'></i></p> ";
//     setTimeout(()=> document.querySelector(".error-icon").remove(),2000);
//     setTimeout(()=> document.querySelector(".error").remove(),2000);
//   }
  
  
//   else if(pass.value.length === 0 )
//   {
//     msg7.innerHTML = "<p class='error'> please enter your password <i class='error-icon fas fa-exclamation-circle'></i></p> ";
//     setTimeout(()=> document.querySelector(".error-icon").remove(),2000);
//     setTimeout(()=> document.querySelector(".error").remove(),2000);
//   }
  
//   else if(cpass.value.length === 0 )
//   {
//     msg8.innerHTML = "<p class='error'> password retype your password <i class='error-icon fas fa-exclamation-circle'></i></p> ";
//     setTimeout(()=> document.querySelector(".error-icon").remove(),2000);
//     setTimeout(()=> document.querySelector(".error").remove(),2000);
//   }

// else {


  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;

  //}

});

submitBtn.addEventListener("click", function(event){
  event.preventDefault();

    if(un.value.length === 0 )
  {
    msg6.innerHTML = "<p class='error'> please enter your username <i class='error-icon fas fa-exclamation-circle'></i></p> ";
    setTimeout(()=> document.querySelector(".error-icon").remove(),2000);
    setTimeout(()=> document.querySelector(".error").remove(),2000);
  }
  
  
  else if(pass.value.length === 0 )
  {
    msg7.innerHTML = "<p class='error'> please enter your password <i class='error-icon fas fa-exclamation-circle'></i></p> ";
    setTimeout(()=> document.querySelector(".error-icon").remove(),2000);
    setTimeout(()=> document.querySelector(".error").remove(),2000);
  }
  
  else if(cpass.value.length === 0 )
  {
    msg8.innerHTML = "<p class='error'> please retype your password <i class='error-icon fas fa-exclamation-circle'></i></p> ";
    setTimeout(()=> document.querySelector(".error-icon").remove(),2000);
    setTimeout(()=> document.querySelector(".error").remove(),2000);
  }

else

 {

  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function(){
    alert("Your Form Successfully Signed up");
    location.reload();
  },800);

}
});
