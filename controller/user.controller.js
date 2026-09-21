import UserModel from "../model/user.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const signup = async (req, res) => {
    try {
        await UserModel.create(req.body)
        res.status(200).json({ message: 'Signup sucessfully ' })
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await UserModel.findOne({ email: email })


        if (!user)
            return res.status(404).json({ message: "User doesn`t exist" })

        const isLogin = bcrypt.compareSync(password, user.password)

        if (!isLogin)
            return res.status(401).json({ message: 'Incorrect password' })


        const payload = {
            email: user.email,
            mobile: user.mobile,
            fullname: user.fullname,
            id: user._id
        }

        const token = await jwt.sign(payload,'123456',{ expiresIn:"7d"})

        

        const options = {
            httpOnly: true
        }

        res.cookie("accessToken", token, options)

        res.json({message: 'login sucess'})

    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}



