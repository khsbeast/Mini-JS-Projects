const qr = document.getElementById('qr-code');
const qrtext = document.getElementById("qr-text");
const  createBtn = document.getElementById('create');
const result = document.getElementById('qr-result');

let r;

const f = ()=>{
    r = new QRious({
        element: qr,
        size: 150,
        value: "Demo"
    });
};

f();

createBtn.addEventListener('click',generateQRCode);

function generateQRCode() {
    console.log(qrtext.value)
    result.innerHTML = "QR code for " + qrtext.value +" :";
    r.set({
        foreground: 'black',
        size: 150,
        value: qrtext.value
    });
}

