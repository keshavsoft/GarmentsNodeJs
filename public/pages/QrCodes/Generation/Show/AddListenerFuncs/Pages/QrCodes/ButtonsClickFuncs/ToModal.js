let StartFunc = () => {
    let jVarLocalShowQrCodeButtonId = document.getElementById("GenerateQrCodeButtonId");

    jVarLocalShowQrCodeButtonId.addEventListener("click", jFShowQrCodeButtonClickFunc);
};

let jFShowQrCodeButtonClickFunc = () => {
    let jVarLocalQrCodeOnModalId = document.getElementById("QrCodeOnModalId");
    jVarLocalQrCodeOnModalId.innerHTML = "16";
    let jVarLocalFromDom = DataFromDom();
    console.log("jVarLocalFromDom : ", jVarLocalFromDom);
    GenerateQrCodeOnModal({
        inQrData: `${jVarLocalFromDom.Barcode}/${jVarLocalFromDom.ProductName}/${jVarLocalFromDom.ProductAliasName}`, inCanvasId: document.getElementById("CanvasId")
    });

    let jVarLocalId = "ModalForQrCodeOnly";

    var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });

    myModal.show();
};


let DataFromDom = () => {
    let jVarLocalReturnObject = {};

    let jVarLocalBarcodeId = document.getElementById("BarcodeId");
    let jVarLocalItemNameLabelId = document.getElementById("ItemNameLabelId");
    let jVarLocalProductAliasName = document.getElementById("ProductAliasNameId");

    jVarLocalReturnObject.Barcode = jVarLocalBarcodeId.innerText;
    jVarLocalReturnObject.ProductName = jVarLocalItemNameLabelId.innerText;
    jVarLocalReturnObject.ProductAliasName = jVarLocalProductAliasName.innerText;


    return jVarLocalReturnObject;

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