let Dal = require("../../../../../../Dal/AdminApi/Utility/Json/Folder/ForSubTableColumns/Visibility");

exports.Toggles = async ({ inUserPK }) => {
    return await Dal.Toggles({ inUserPK });
};

exports.KDataset = async ({ inUserPK }) => {
    return await Dal.KDataset({ inUserPK });
};

exports.WithDataAttributeAndDisplayName = async ({ inUserPK }) => {
    return await Dal.WithDataAttributeAndDisplayName({ inUserPK });
};

exports.Widths = async ({ inUserPK }) => {
    return await Dal.Widths({ inUserPK });
};

exports.DisplayType = async ({ inUserPK }) => {
    return await Dal.DisplayType({ inUserPK });
};

exports.AllInOneWithValues = async ({ inUserPK }) => {
    return await Dal.AllInOneWithValues({ inUserPK });
};

exports.DisplayOrder = async ({ inUserPK }) => {
    return await Dal.DisplayOrder({ inUserPK });
};
