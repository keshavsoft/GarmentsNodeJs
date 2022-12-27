exports.Insert = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                inFolderName: ""
            }
        });
    } else {
        if (("KeshavSoft" in req) === false) {
            res.json({ KTF: false, KReason: "KeshavSoft not found in Request" })
        } else {
            if (("DataPk" in req.KeshavSoft) === false) {
                res.json({ KTF: false, KReason: "DataPk not found in KeshavSoft" })
            } else {
                if (("inFolderName" in req.body) === false) {
                    res.json({ KTF: false, KReason: "inFolderName not found in body" })
                } else {
                    next();
                };

            };
        };
    };
};


