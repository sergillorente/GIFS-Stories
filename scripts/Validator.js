'use strict';

class Validator {
    constructor() {
      this.invalidNameError = "Name is a required field";
      this.invalidEmailError = "Enter a valid email address";
      this.emailExistsError = "The entered email is being already used by another user.";
      this.passwordError = "Password must be at least 6 characters long";
      this.repeatPasswordError = "Password and reapeat password are not equals";
  
  
      this.errors = {
        invalidNameError: this.invalidNameError,
        invalidEmailError: this.invalidEmailError,
        emailExistsError: this.emailExistsError,
        passwordError: this.passwordError,
        repeatPasswordError: this.repeatPasswordError,
      };
    }
  
    validateCorrectName = (name) => {
      if (name) {
        delete this.errors.invalidNameError;
      } else {
        this.errors.invalidNameError = this.invalidNameError;
      }
    };


    validateValidEmail = (email) => {
      if (this.emailSyntaxIsValid(email)) {
        delete this.errors.invalidEmailError;
      } else {
        this.errors.invalidEmailError = this.invalidEmailError;
      }
    };
  
  
    emailSyntaxIsValid = (email) => {
      const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  
      const emailIsValid = emailRegEx.test(email);
      return emailIsValid;
    };
  
  

    validateUniqueEmail = (newEmail) => {
      const users = db.getAllUsers();

      let isEmailUnique = true;
  
      users.forEach((userObj) => {
        if (userObj.email === newEmail) {
          isEmailUnique = false; 
        }
      });
  
      if (isEmailUnique) {
        delete this.errors.emailExistsError;
      } else {
        this.errors.emailExistsError = this.emailExistsError;
      }
    };
  
  

    validatePassword = (password) => {
      if (password.length >= 6) {
        delete this.errors.passwordError;
      } else {
        this.errors.passwordError = this.passwordError;
      }
    };
  
  
    validateRepeatPassword = (password, repeatPassword) => {
      if (password === repeatPassword) {
        delete this.errors.repeatPasswordError;
      } else {
        this.errors.repeatPasswordError = this.repeatPasswordError;
      }
    };
  
    getErrors = () => {
      return this.errors;
    };
  }
  
  const validator = new Validator();
  