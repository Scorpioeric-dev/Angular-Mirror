const data = require('./data')
let id = data.length + 1;


module.exports = {
    getData: (req,res) => {
        console.log('back connected')
        res.status(200).send(data)
    }
}