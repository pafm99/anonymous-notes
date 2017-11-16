const Message = require("../models/Message");

module.exports = {

    get: (req, res) => {
        Message.find({})
        .exec()
        .then(results =>{
            return res.status(200).json(results);
        })
        .catch(error =>{
            return res.status(500).json({
                error: "Wrong!!"
            })
        })
    },

    add: (req, res)=> {
        const message = new Message(req.body);
        message.save()
        .then(results => {
            return res.status(200).json(results);
        })
        .catch(error => {
            return res.status(500).json({
                error: "Can't Save"
            })
        })

    }


}