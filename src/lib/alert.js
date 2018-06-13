import swal from 'sweetalert';

function bdpAlert(icon) {
  return (text, title) => {
    swal({
      title,
      text,
      icon,
      button: false,
      timer: 1000,
    });
  };
}
swal.success = bdpAlert('success');
swal.warning = bdpAlert('warning');
swal.error = bdpAlert('error');
swal.info = bdpAlert('info');
export default swal;
