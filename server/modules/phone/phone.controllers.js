const data = require("../../data.json");

async function getPhones(req, res) {
    try {
        console.log(data);
        res.status(200).json(data).end();

    } catch(err) {
        res.status(400).json(err.message);
    }
}

async function getPhoneById(req, res) {
    try {
        const { id } = req.params;
        const phone = await data.find(item => id === item.id);
        res.status(200).json(phone).end();
    } catch(err) {
        res.status(400).json(err.message);
    }

}


module.exports = {
    getPhones,
    getPhoneById,
}