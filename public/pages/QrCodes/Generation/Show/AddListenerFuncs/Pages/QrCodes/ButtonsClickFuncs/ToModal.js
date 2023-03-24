let StartFunc = () => {
    let jVarLocalShowQrCodeButtonId = document.getElementById("GenerateQrCodeButtonId");

    jVarLocalShowQrCodeButtonId.addEventListener("click", jFShowQrCodeButtonClickFunc);
};

let jFShowQrCodeButtonClickFunc = () => {
    let jVarLocalFromDom = DataFromDom();

    console.log("jVarLocalFromDom : ", jVarLocalFromDom);
    GenerateQrCodeOnModal({
        inQrData: `${jVarLocalFromDom.Barcode}/${jVarLocalFromDom.ProductName}/${jVarLocalFromDom.ProductAliasName}/${jVarLocalFromDom.UserDescription}/${jVarLocalFromDom.SalePrice}`,
        inCanvasId: document.getElementById("CanvasId")
    });

    jFShowQrCodeDetails({ inData: jVarLocalFromDom });

    jFShowItemNameLabelIdDetails({ inData: jVarLocalFromDom });
    jFShowProductAliasNameIdDetails({ inData: jVarLocalFromDom });
    jFShowUserDescriptionDetails({ inData: jVarLocalFromDom });
    jFShowUserSalePriceDetails({ inData: jVarLocalFromDom });

    let jVarLocalId = "ModalForQrCodeOnly";

    var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });

    myModal.show();
};

let jFShowQrCodeDetails = ({ inData }) => {
    let jVarLocalQrCodeOnModalId = document.getElementById("QrCodeOnModalId");
    jVarLocalQrCodeOnModalId.innerText = inData.Barcode;
};


let jFShowItemNameLabelIdDetails = ({ inData }) => {
    console.log("inData", inData);
    let jVarLocalItemNameLabelId = document.getElementById("ProductNameModalId");
    jVarLocalItemNameLabelId.innerText = inData.ProductName;
};

let jFShowProductAliasNameIdDetails = ({ inData }) => {
    let jVarLocalProductAliasNameId = document.getElementById("ProductAliasNameModalId");
    jVarLocalProductAliasNameId.innerText = inData.ProductAliasName;
};

let jFShowUserDescriptionDetails = ({ inData }) => {
    let jVarLocalUserDescription = document.getElementById("UserDescriptionModalId");
    jVarLocalUserDescription.innerText = inData.UserDescription;
};
let jFShowUserSalePriceDetails = ({ inData }) => {
    let jVarLocalSalePrice = document.getElementById("SalePriceModalId");
    jVarLocalSalePrice.innerText = inData.SalePrice;
};

let DataFromDom = () => {
    let jVarLocalReturnObject = {};

    let jVarLocalBarcodeId = document.getElementById("BarcodeId");
    let jVarLocalItemNameLabelId = document.getElementById("ItemNameLabelId");
    let jVarLocalProductAliasName = document.getElementById("ProductAliasNameId");
    let jVarLocalUserDescription = document.getElementById("UserDescriptionId");
    let jVarLocalSalePrice = document.getElementById("SalePriceId");

    jVarLocalReturnObject.Barcode = jVarLocalBarcodeId.innerText;
    jVarLocalReturnObject.ProductName = jVarLocalItemNameLabelId.innerText;
    jVarLocalReturnObject.ProductAliasName = jVarLocalProductAliasName.innerText;
    jVarLocalReturnObject.UserDescription = jVarLocalUserDescription.innerText;
    jVarLocalReturnObject.SalePrice = jVarLocalSalePrice.innerText;


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