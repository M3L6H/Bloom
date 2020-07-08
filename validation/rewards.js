///////////////// Validations for creating rewards //////////////////

const Validator = require("validator");
const validText = require("./valid_text");
const positiveInt = require("./positive_int");

module.exports = function(data) {
    let {
        title,
        description,
        petalCost
    } = data;

    let errors = {};

    title = validText(title) ? title : "";
    description = validText(description) ? description : "";
    petalCost = petalCost || "";
    
    if(Validator.isEmpty(title)){
        errors.title = "Reward title is required";
    }


    if(!positiveInt(petalCost)){
        errors.petalCost = "Must be a positive integer!"
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}
