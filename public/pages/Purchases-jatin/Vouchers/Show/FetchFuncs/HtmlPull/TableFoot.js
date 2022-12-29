let StartFunc = async () => {
    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

        let jVarLocalFetchUrl = `Html/ForHbs/InvTableFooter.html`;

        const response = await fetch(jVarLocalFetchUrl);
        const data = await response.text();

        LocalReturnObject.HtmlString = data;

        LocalReturnObject.KTF = true;
        return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    }

};

export { StartFunc };