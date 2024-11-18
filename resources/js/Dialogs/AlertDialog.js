import Swal from "sweetalert2"

export const AlertDiaLog = ({text = '',title = '',icon = 'error', onPassed}) => {
    Swal.fire({
        icon,
        title,
        text,
        allowOutsideClick : false,
        showCancelButton : true,
        confirmButtonText : "ตกลง",
        cancelButtonText :  "ยกเลิก"
    }).then((result) => {
        if (result.isConfirmed) {
            onPassed(true)
        }else{
            onPassed(false)
        }
    })
}