let Dal = require("../../../../../../Dal/AdminApi/Utility/Json/Folder/ForTableColumns/Visibility");

exports.Toggles = async ({ inUserPK }) => {
    return await Dal.Toggles({ inUserPK });
};

exports.AllInOneWithValues = async ({ inUserPK }) => {
    return await Dal.AllInOneWithValues({ inUserPK });
};

exports.KDataset = async ({ inUserPK }) => {
    return await Dal.KDataset({ inUserPK });
};

exports.ParentClasses = async ({ inUserPK }) => {
    return await Dal.ParentClasses({ inUserPK });
};

exports.WithDataAttributeAndDisplayName = async ({ inDataPk }) => {
    return await Dal.WithDataAttributeAndDisplayName({ inDataPk });
};

exports.WithOutSubTableColumns = async ({ inUserPK }) => {
    return await Dal.WithOutSubTableColumns({ inUserPK });
};

exports.DisplayType = async ({ inUserPK }) => {
    return await Dal.DisplayType({ inUserPK });
};

exports.KDatasetStuff = async ({ inUserPK }) => {
    return await Dal.KDatasetStuff({ inUserPK });
};

exports.Dynamic = async ({ inUserPK, inKeyForServerSide }) => {
    return await Dal.Dynamic({ inUserPK, inKeyForServerSide });
};

exports.DataAttributes = async ({ inUserPK }) => {
    return await Dal.DataAttributes({ inUserPK });
};

exports.Widths = async ({ inUserPK }) => {
    return await Dal.Widths({ inUserPK });
};

exports.DisplayOrder = async ({ inUserPK }) => {
    return await Dal.DisplayOrder({ inUserPK });
};

