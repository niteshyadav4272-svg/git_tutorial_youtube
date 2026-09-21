import jwt from 'jsonwebtoken'

const Verification = (req, res, next) => {
    try {
        const token = req.cookies.accessToken

        if (!token) {
            return res.status(401).json({
                message: 'Token not found'
            })
        }

        const payload = jwt.verify(token,'123456')

        req.session = {
            id: payload.id,
            email: payload.email,
            mobile: payload.mobile,
            fullname: payload.fullname
        }

        next()

    } catch (err) {
       
        return res.status(401).json({message: err.message })
    }
}

export default Verification