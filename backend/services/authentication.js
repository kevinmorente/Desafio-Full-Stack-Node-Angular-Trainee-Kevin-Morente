import jwt from 'jsonwebtoken';
const secretKey = 'KevinDevFullStack';

function authenticationToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
        console.log('access not authorized');
        return res.status(401).json({ message: "Unauthorized user, please login!"});
    } else {
        jwt.verify(token, secretKey, (err, response) => {
            if (err) {
                console.log('Token verification failed');
                return res.status(403).json({ message: "Token validation failed, please login again!"});
            } else {
                res.locals = response;
                next();
            }
        })
    }
}

export default authenticationToken;