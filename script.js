function validasi() {
  var nama = document.getElementById("nama").value;
  var email = document.getElementById("email").value;
  if (nama != "" && email!="") {
    return true;
  }else{
    alert('Anda harus mengisi data dengan lengkap !');
  }
}