function fn_ValForm() {
    var ksng = "";

    var nama = document.getElementById("nama");
    var email = document.getElementById("email");
    var pesan = document.getElementById("pesan");

    // Cek kosong
    if (nama.value === "") {
        ksng += "\n* Anda belum mengisikan nama";
    }
    if (email.value === "") {
        ksng += "\n* Anda belum mengisikan email";
    }
    if (pesan.value === "") {
        ksng += "\n* Anda belum mengisikan pesan";
    }
    var emailRegular = /^[a-z0-9][a-z0-9._-]*@[a-z0-9][a-z0-9._-]*\.[a-z0-9]{2,4}$/i;
    if (email.value !== "" && !emailRegular.test(email.value)) {
        ksng += "\n* Format email tidak valid (contoh: nama@gmail.com)";
    }

    if (ksng !== "") {
        alert("Peringatan:\n" + ksng);
        return false;
    }
    return true;
}
