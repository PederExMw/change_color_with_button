// function yeniRenk() {
//     let sayilar, renk1;
//     sayilar = '123456789ABCDEF';
//     renk1 = '#';
//     for (let i = 0; i < 6; i++) {
//         renk1 = renk1 + sayilar[Math.floor(Math.random() * 16)];
//     }
//     return renk1;

//     function renkdegis() {


//     }
//     document.getElementById("hexyaz").innerHTML = '#' + sayilar;
//     let btn2 = "Renk Değiştirmeyi Durdur.";
//     document.getElementById("btn1").innerText = btn2;
//     // let btn3 = "Renk Değiştirmeyi Başlat.";
//     // document.getElementById("btn1").innerText = btn3;

// }

let isColorChangeWorking = false;

function rengiDegistir() {
    const sayilar = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = '#' + sayilar;
    document.getElementById("hexyaz").innerHTML = '#' + sayilar;
}
let changeColorIntervalId
function yeniRenk() {
    console.log('object :>> ', isColorChangeWorking);
    let btn2 = "Renk Değiştirmeyi Başlat.";

    if (isColorChangeWorking) {
        clearInterval(changeColorIntervalId)
        btn2 = "Renk Değiştirmeyi Başlat.";
        isColorChangeWorking = false
    } else {
        changeColorIntervalId = setInterval(rengiDegistir, 1000);
        btn2 = "Renk Değiştirmeyi Durdur.";
        isColorChangeWorking = true
    }

    document.getElementById("btn1").innerText = btn2;

}



