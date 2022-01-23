// email validation
((submit) => {
  
  submit.addEventListener('click', (e)=> {
   if(e.target.classList.contains('submit-btn')) {
     
     const emailInputContain = e.target.parentElement.previousElementSibling;
     const emailInput = e.target.parentElement.previousElementSibling.children[0];
     const emailValidate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     
     if(emailValidate.test(emailInput.value)) {
       emailInputContain.classList.remove('error');
       emailInput.classList.remove('error');
       alert('Thank you :)');
       return true;
     } else {
       emailInputContain.classList.add('error');
       emailInput.classList.add('error');
       return false;
     }
     
   } 
  })
  
})(document.body);