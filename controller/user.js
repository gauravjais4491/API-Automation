const User = require('../model/User')

exports.postUserInfo = async (req, res) => {
    try {
        const { name, email, age } = req.body;

        const userInfo = new User({
            name,
            email,
            age,
        })
        if (!age) {
            return res.status(422).json({ error: "Please add your age" })
        }
        if (!name) {
            return res.status(422).json({ error: "Please add your name" })
        }
        if (!email) {
            return res.status(422).json({ error: "Please add your email" })
        }

        const userPortResult = await User.create(userInfo)

        res.status(201).json(userPortResult)

    } catch (error) {
        res.status(400).json({ error: "Something went wrong" })
    }
}

exports.getUserInfo = async (req, res) => {
    try {
        const userList = await User.find({}).sort({ date: "DESC" })
        res.status(200).json(userList)

    } catch (error) {
        return res.status(404).json({ error: "Page not Found" })
    }
}

exports.getSingleUserInfo = async (req, res) => {
    try {
        const userId = req.params.userid;

        const singleUser = await User.findOne({ _id: userId });


        if (!singleUser) {
            return res.status(404).json({ error: "Please provide User Id" });
        }

        res.status(200).json(singleUser);
    } catch (error) {
        return res.status(400).json({ error: "Internal server error" });
    }
}


exports.deleteUserInfo = async (req, res) => {
    try {
        var deleteQuery = { _id: req.params.userid }

        const deleteUser = await User.findByIdAndDelete(deleteQuery);

        // res.status(200).json('User Deleted .... ' + deleteUser)
        res.status(200).json(deleteUser)

    } catch (error) {
        return res.status(400).json({ error: "Internal server error" })
    }
}

exports.updateUserInfo = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        var updateQuery = { _id: req.params.userid }

        const payload = { name, email, age }
        
        const updateUser = await User.findByIdAndUpdate(updateQuery, {
            $set: payload
        })

        res.status(200).json(updateUser)

    } catch (error) {
        return res.status(400).json({ error: "Internal server error" })
    }
}
