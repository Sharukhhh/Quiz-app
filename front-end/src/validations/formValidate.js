

export const validateQuizCred =  (username , category , email) => {

    let state = true
    let message = '';

    if(!username || !category || !email) {
        state =  false;
        message = 'Fill all the fields'
    }

    if(username.trim() === '' || category.trim() === '' || email.trim() === '') {
        state =  false;
        message = 'Invalid Entry'
    }

    return {
        state , message
    }

}