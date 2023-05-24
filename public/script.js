// ------numberscounter----------
if (isHomePage){
    function myNumbersCounter(){
    
        let delay1=100;
        let delay2=delay1*var1/var2;
        let delay3=delay1*var1/var3;
    
        let counts1=setInterval(updated1,delay1);
        let counts2=setInterval(updated2,delay2);
        let counts3=setInterval(updated3,delay3);
    
        let upto1=0;
        let upto2=0;
        let upto3=0;
    
        function updated1(){
            var count= document.getElementById("myValue1");
            if (count!=null){
                count.innerHTML=++upto1;
                if(upto1===var1)
                {
                    clearInterval(counts1);
                }
            }
        }
    
        function updated2(){
            var count= document.getElementById("myValue2");
            if (count!=null){
                count.innerHTML=++upto2;
                if(upto2===var2)
                {
                    clearInterval(counts2);
                }
            }
        }
    
        function updated3(){
            var count= document.getElementById("myValue3");
            if (count!=null){
                count.innerHTML=++upto3;
                if(upto3===var3)
                {
                    clearInterval(counts3);
                }
            } 
        }
    }
        
    const targetDiv = document.querySelector('.myNumbersContainer');
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          myNumbersCounter();
          observer.disconnect();
        }
      });
    });
    
    observer.observe(targetDiv);
}


//LOGIN MODAL
if ((!isProfilePage) && (!isAdminPage)) {
    const loginButton = document.getElementById("myLogIn");
    const loginModal = document.getElementById("myLoginModal");
    const signUpModal = document.getElementById("mySignUpModal");
    const openSignUpModal = document.getElementById("openSignUp");
    const closeLoginModal = loginModal.getElementsByClassName("close")[0];
    const closeSignUpModal = signUpModal.getElementsByClassName("close")[0];
    
    loginButton.addEventListener('click', () => {
        loginModal.style.display = "block";
    });
    
    closeLoginModal.addEventListener('click', () => {
        loginModal.style.display = "none";
    });
    
    openSignUpModal.addEventListener('click', (event) => {
        loginModal.style.display = "none";
        signUpModal.style.display = "block";
      });
    
    closeSignUpModal.addEventListener('click', () => {
        signUpModal.style.display = "none";
        loginModal.style.display = "block";
    });    
}

// PROFILE DROPDOWN
if (isProfilePage){

    const profileButton = document.getElementById("myProfileButton");
    const  profileDropdown = document.getElementById("myProfileDropdown");
    
    profileButton.addEventListener('click', () => {
        if (profileDropdown.style.display === "none") {
            profileDropdown.style.display = "block";
          } else {
            profileDropdown.style.display = "none";
          }});
}



// ADMIN DROPDOWN
if (isAdminPage){
    var adminButton = document.getElementById("myAdminButton");
    var adminDropdown = document.getElementById("myAdminDropdown");
    
    adminButton.addEventListener('click', () => {
        if (adminDropdown.style.display === "none") {
            adminDropdown.style.display = "block";
          } else {
            adminDropdown.style.display = "none";
          }
    });
}

//home form
function validateFormInputs() {

    const applicationNameInput = document.querySelector('[name="ApplicationName"]');
    const applicationSurnameInput = document.querySelector('[name="ApplicationSurname"]');
    const applicationEmailInput = document.querySelector('[name="ApplicationEmail"]');
    const applicationPhoneNumberInput = document.querySelector('[name="ApplicationPhoneNumber"]');
    const applicationUniversityInput = document.querySelector('[name="ApplicationUniversity"]');
    const applicationDepartmentInput = document.querySelector('[name="ApplicationDepartment"]');

    if (applicationNameInput.value.trim() === '') {
      // Display an error message or handle the validation failure
      alert('Please fill in the Application Name field.');
      return false;
    }
  
    if (applicationSurnameInput.value.trim() === '') {
        // Display an error message or handle the validation failure
        alert('Please fill in the Application Surname field.');
        return false;
    }

    if (applicationEmailInput.value.trim() === '') {
      // Display an error message or handle the validation failure
      alert('Please fill in the Application Email field.');
      return false;
    }

    if (applicationPhoneNumberInput.value.trim() === '') {
        // Display an error message or handle the validation failure
        alert('Please fill in the Application Phone Number field.');
        return false;
    }

    if (applicationUniversityInput.value.trim() === '') {
        // Display an error message or handle the validation failure
        alert('Please fill in the Application University field.');
        return false;
    }

    if (applicationDepartmentInput.value.trim() === '') {
        // Display an error message or handle the validation failure
        alert('Please fill in the Application Department field.');
        return false;
    }
    
    return true;

  }