import toast, { Toaster } from 'react-hot-toast';



// const Toast = (toastMessage, toastType='success') => {
//     // toast[toastType](toastMessage);
    
//     toast('Here is your toast.');
// };

import React from 'react'

const Toast = () => {
    const notify = () => toast('Here is your toast.');
    return (
        <div>
            {notify()}
            <Toaster />
        </div>
    )
}

export default Toast;
