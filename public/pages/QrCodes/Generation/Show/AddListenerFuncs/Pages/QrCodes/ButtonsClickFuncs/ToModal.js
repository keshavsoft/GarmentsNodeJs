let StartFunc = () => {
    let jVarLocalShowQrCodeButtonId = document.getElementById("GenerateQrCodeButtonId");

    jVarLocalShowQrCodeButtonId.addEventListener("click", jFShowQrCodeButtonClickFunc);
};

let jFShowQrCodeButtonClickFunc = () => {
    let jVarLocalQrCodeOnModalId = document.getElementById("QrCodeOnModalId");
    jVarLocalQrCodeOnModalId.innerHTML = "16";

    GenerateQrCodeOnModal({ inQrData: "16", inCanvasId: document.getElementById("CanvasId") });

    let jVarLocalId = "ModalForQrCodeOnly";

    var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });

    myModal.show();

    // let jVarLocalDivToShowQrCodeId = document.getElementById("DivToShowQrCodeId");

};

let GenerateQrCodeOnModal = ({ inQrData = "", inCanvasId }) => {
    var canvas = inCanvasId;
    canvas.height = 1;
    canvas.width = 1;
    canvas.style.visibility = 'hidden';

    // Convert the options to an object.
    let opts = {};

    // Finish up the options
    opts.text = inQrData;
    opts.bcid = "qrcode";
    opts.scaleX = 1;
    opts.scaleY = 1;
    opts.rotate = "N";

    // Draw the bar code to the canvas
    try {
        let ts0 = new Date;
        bwipjs.toCanvas(canvas, opts);
        show(ts0, new Date);
    } catch (e) {
        console.log("error : ", e);

        return;
    }

    function show(ts0, ts1) {
        canvas.style.visibility = 'visible';
    }
};

export { StartFunc };