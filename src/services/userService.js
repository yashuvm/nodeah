const User = require('../models/userModel');

module.exports.query1 = async (data) => {
    const tmp = new User({
        name: data.name,
        age: data.ages
    })
    return await tmp.save()
}

module.exports.query2 = async (data) => {
    return await User.find();
}
