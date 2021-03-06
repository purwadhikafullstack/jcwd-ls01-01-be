const jwt = require('jsonwebtoken')
require('dotenv').config()

const jwtVerify = (req, res, next) => {
    console.log('masukk')
    const token = req.headers.authorization
    console.log('token', token)

    if(!token) return res.status(406).send({ error: true, message: 'Token Not Found!' })

    jwt.verify(token, process.env.JWT_KEY, (err, dataToken) => {
        try {
           if(err) throw err 
           
           req.dataToken = dataToken
           console.log('ini jwt verify',req.dataToken)
           next()
        } catch (error) {
            res.status(500).send({
                error: true,
                message: error.message
            })
        }
    })
}

module.exports = jwtVerify
