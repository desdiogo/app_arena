import Swal from 'sweetalert2'

const swal = (type, title) => {
  Swal.fire({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    showCloseButton: true,
    timer: 10000,
    timerProgressBar: true,
    icon: type,
    title,
  })
}

export const toast = {
  success: (title) => swal('success', title),
  error: (title) => swal('error', title)
}
