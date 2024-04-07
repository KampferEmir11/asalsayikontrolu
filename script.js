document.querySelector(".hesapla").addEventListener("click" , function(){
    let girilenSayi = Number(document.querySelector(".girilensayi").value);
    let sonuc = true;
    for(i=2; i <= Math.floor(girilenSayi / 2); i++){
        if (girilenSayi % i == 0) {
            sonuc = false;
            break;
        }
    }
    if (sonuc == true) {
        document.querySelector(".result").textContent = girilenSayi + " Asal Bir Sayıdır.";
        document.querySelector(".result").style.transform="translateX(-25%)"
    }
    else {
        document.querySelector(".result").textContent = girilenSayi + " Asal Bir Sayı Değildir."
        document.querySelector(".result").style.transform="translateX(-30%)"
    }
    if(girilenSayi < 0){
        alert("Negatif Sayılarda Kontrol Yapılamaz.")
        document.querySelector(".result").textContent = "!";
        document.querySelector(".result").style.textAlign="center";
        document.querySelector(".result").style.transform="translateX(-39%)"
    }
});
document.querySelector(".clear").addEventListener("click" , function(){
    document.querySelector(".girilensayi").value = "";
    document.querySelector(".result").textContent = "Sonuç";
    document.querySelector(".result").style.transform="translateX(-39%)"
});