export const login = values => {
  if (values.email === "") {
    throw new Error("Email field cannot be empty");
  }

  if (values.password === "") {
    throw new Error("Password field cannot be empty");
  }
};

export const register = values => {
  if (values.firstName === "") {
    throw new Error("First name field cannot be empty");
  }

  if (values.lastName === "") {
    throw new Error("Last name field cannot be empty");
  }

  if (values.email === "") {
    throw new Error("Email field cannot be empty");
  }

  if (!values.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    throw new Error("Email is not valid");
  }

  if (values.password === "") {
    throw new Error("Password field cannot be empty");
  }
  if (values.password.length < 5) {
    throw new Error("Password length must be at least 5 chars long");
  }

  if (values.reeatPassword === "") {
    throw new Error("You must repeat the password");
  }

  if (values.repeatPassword !== values.password) {
    throw new Error("Passwords mismatch!");
  }
};

export const postAdd = (values) => {
    if(values.imageUrl== '' || values.addCaption == ''){
        throw new Error('All fields are required');
    }
    if(!values.imageUrl.match(/^(http|https):\/\//)){
        throw new Error(`Image's url must start with "http" or "https"`);
    }
    if(values.addCaption.length < 5){
        throw new Error('Caption must be at least 5 charaters long');
    }
    if(values.addCaption.length > 50){
        throw new Error('Caption cannot be longer than  50 characters');
    }
}
export const postUpdate = (values) => {
    if(values.imageUrl== ''){
        throw new Error('All fields are required');
    }else if(values.addCaption == ''){
        throw new Error('All fields are required');
    }else if(!values.imageUrl.match(/^(http|https):\/\//)){
        throw new Error(`Image's url must start with "http" or "https"`);
    }else if(values.caption.length < 5){
        throw new Error('Caption must be at least 5 charaters long');
    }else if(values.caption.length > 50){
        throw new Error('Caption cannot be longer than  50 characters');
    }
}
