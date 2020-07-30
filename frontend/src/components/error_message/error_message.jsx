// Util function for handling errors

import React from "react"; 

export default function renderErrors(errors,type) {
    if (Object.keys(errors).length > 0) {

        return (
            <div className='error-message'>
                {errors[type]}
            </div>
        )
    }

}