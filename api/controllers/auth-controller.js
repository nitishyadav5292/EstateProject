import User from '../models/user-model.js';
import bcryptjs from 'bcryptjs'

const signup = async (req, res) => {
    //const {username, email, password} = req.body;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({username, email, password: hashedPassword});
    try {
        await newUser.save();
        res.status(201).json("User created successfully ");
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export default signup;