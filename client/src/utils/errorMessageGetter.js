
export const login = (values) => {

    if(values.email === ''){
        throw 'Email field must not be empty';
    }

    if(values.password === ''){
        throw 'Password field must not be empty';
    }

    
}