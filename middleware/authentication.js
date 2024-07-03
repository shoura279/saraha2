import jwt from 'jsonwebtoken'

export const auth = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1]
    if (!token) return res.status(401).json({ message: 'Unauthorized' })

    try {
        const payload = jwt.verify(token, 'secret_key')
        req.userId = payload.id
        next()
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' })
    }
}

