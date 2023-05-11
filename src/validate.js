export const validate = (data) => {
    const errors = {};
    if (!data.name.trim()) {
        errors.name = 'name is required';
    }else if (data.name.trim().length < 4){
        errors.name = 'name must has more than 4 charecter'
    }else {
        delete errors.name
    }

    if (!data.detail.trim()) {
        errors.detail = 'detail is required'
    }else if (data.detail.trim().length < 8) {
        errors.detail = 'detail must has more than 8 charecter'
    }else {
        delete errors.pass
    }

    // if (!data.confirmPass.trim()) {
    //     errors.confirmPass = 'confirm pass is required'
    // }else if (data.confirmPass.trim().length < 8) {
    //     errors.confirmPass = 'confirm pass must has more than 8 charecter'
    // }else if (data.confirmPass !== data.pass) {
    //     errors.confirmPass = 'password and confirm pass are not equal'
    // }else {
    //     delete errors.confirmPass
    // }

    // if (!data.mail.trim()) {
    //     errors.mail = 'mail is required'
    // }else if (!data.mail.match(/^\S+@\S+\.\S+$/)){
    //     errors.mail = 'mail is not correct'
    // }

    // if (!data.isAccepted) {
    //     errors.isAccepted = 'accept all terms is required'
       
    // }else {
    //     delete errors.isAccepted
    // }
    
    return errors;
}