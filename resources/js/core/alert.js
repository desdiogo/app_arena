import Swal from 'sweetalert2'

const swal = (title, icon, text) => {
  Swal.fire({
    title,
    text,
    icon,
  })
}

export const alert = {
  success: (text) => swal('Success', 'success', text),
  error: (text) => swal('Error', 'error', text)
}
