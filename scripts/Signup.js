'use strict';


class Signup {
    constructor() {

      this.nameInput = document.querySelector("#name");
      this.emailInput = document.querySelector("#email");
      this.passwordInput = document.querySelector("#password");
      this.repeatPasswordInput = document.querySelector("#repeat-password");
  
      this.buttonInput = document.querySelector("#signup-button");
      this.errorsWrapper = document.querySelector(".message-container");
    }


    handleNameInput = (event) => {
      const name = event.target.value;

      validator.validateCorrectName(name);

      this.setErrorMessages();
    }
  
    handleEmailInput = (event) => {
      const email = event.target.value;
  
      validator.validateValidEmail(email);
      validator.validateUniqueEmail(email);
  
      this.setErrorMessages();
    };
  
  
  
  
    handlePasswordInput = (event) => {
      const password = event.target.value;
      const repeatPassword = this.repeatPasswordInput.value;

      validator.validatePassword(password);
      validator.validateRepeatPassword(password, repeatPassword);
  
      this.setErrorMessages();
    };
  
  
    handleRepeatPasswordInput = (event) => {
      const repeatPassword = event.target.value;
      const password = this.passwordInput.value;

      validator.validateRepeatPassword(password, repeatPassword);
  
      this.setErrorMessages();
    };
  

    toggleSignupButton = () => {
      
    }
  
  
    setErrorMessages = () => {
  
      this.errorsWrapper.innerHTML = "";
  
      const errorsObj = validator.getErrors();

      const errorStringsArr = Object.values( errorsObj );

      errorStringsArr.forEach( (str) => {
        const p = document.createElement('p');
        p.textContent = str;
  
        this.errorsWrapper.appendChild(p);
      })

      if (!errorStringsArr.length) {
        this.buttonInput.disabled = false;
      } else {
        this.buttonInput.disabled = true;
      }
    }
  
    
  
    saveData = (event) => {
  
      event.preventDefault();
  
      const name = this.nameInput.value;
      const email = this.emailInput.value;
      const password = this.passwordInput.value;
  
      const newUser = new User(name, email, password);
  
      db.saveNewUser(newUser);
  
      this.nameInput.value = "";
      this.emailInput.value = "";
      this.passwordInput.value = "";
      this.repeatPasswordInput.value = "";
    };
  


    addListeners = () => {
      this.nameInput.addEventListener("input", this.handleNameInput);
      this.emailInput.addEventListener("input", this.handleEmailInput);
      this.passwordInput.addEventListener("input", this.handlePasswordInput);
      this.repeatPasswordInput.addEventListener("input", this.handleRepeatPasswordInput);
      this.buttonInput.addEventListener("click", this.saveData);
    }
  
  }
  
  
  const signup = new Signup();
  
  
  
  window.addEventListener('load', signup.addListeners );