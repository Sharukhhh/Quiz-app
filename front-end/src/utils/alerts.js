import Swal from 'sweetalert2'


export const errorAlert = (message) => {
    Swal.fire({
        text: message,
        icon: 'error'
    });
}