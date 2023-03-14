let StartFunc = () => {
    let jVarLocalShowQrCodeButtonId = document.getElementById("GenerateQrCodeButtonId");

    jVarLocalShowQrCodeButtonId.addEventListener("click", jFShowQrCodeButtonClickFunc);
};

let jFShowQrCodeButtonClickFunc = () => {
    let jVarLocalFromDom = DataFromDom();

    GenerateQrCodeOnModal({
        inQrData: `${jVarLocalFromDom.Barcode}/${jVarLocalFromDom.ProductName}/${jVarLocalFromDom.ProductAliasName}/${jVarLocalFromDom.UserDescription}`,
        inCanvasId: document.getElementById("CanvasId")
    });

    jFShowQrCodeDetails({ inData: jVarLocalFromDom });

    let jVarLocalId = "ModalForQrCodeOnly";

    var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });

    myModal.show();
};

let jFShowQrCodeDetails = ({ inData }) => {
    let jVarLocalQrCodeOnModalId = document.getElementById("QrCodeOnModalId");
    jVarLocalQrCodeOnModalId.innerText = inData.Barcode;
};

let DataFromDom = () => {
    let jVarLocalReturnObject = {};

    let jVarLocalBarcodeId = document.getElementById("BarcodeId");
    let jVarLocalItemNameLabelId = document.getElementById("ItemNameLabelId");
    let jVarLocalProductAliasName = document.getElementById("ProductAliasNameId");
    let jVarLocalUserDescription = document.getElementById("UserDescription");

    jVarLocalReturnObject.Barcode = jVarLocalBarcodeId.innerText;
    jVarLocalReturnObject.ProductName = jVarLocalItemNameLabelId.innerText;
    jVarLocalReturnObject.ProductAliasName = jVarLocalProductAliasName.innerText;
    jVarLocalReturnObject.UserDescription = UserDescriptionId.innerText;

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