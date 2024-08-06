import jwt from 'jsonwebtoken';
const secretKey = 'KevinDevFullStack';

function authenticationToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
        return res.sendStatus(401);
    } else {
        jwt.verify(token, secretKey, (err, response) => {
            if (err) {
                console.log('TOKEN VERIFICATION FAILED');
                return res.sendStatus(403)
            } else {
                res.locals = response;
                next();
            }
        })
    }
}

export default authenticationToken;