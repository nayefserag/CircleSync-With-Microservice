const jwt = require('jsonwebtoken');
const il8n = require('../Localization/il8n.js');
exports.verifyToken = (req, res, next) => {
 
    il8n.setLocale(req.headers['accept-language'] || 'en');
    const token = req.headers[process.env.TOKEN_NAME];

    if (!token) {
        return res.status(401).json({
            message: il8n.__('No-token')
        });
    }


    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            const refreshedToken = jwt.sign({
                success: true,
            }, process.env.JWT_SECRET, {
                expiresIn: '5m'
            });

            return res.status(401).json({
                message: il8n.__('Token-expired'),
                refreshedToken: refreshedToken
            });
        } else {
            // Other token validation errors
            return res.status(403).json({
                message: il8n.__('Invalid-token')
            });
}
}};

exports.refreshedToken = async (req, res, next) => {
        const refreshToken = req.headers['refreshtoken'];
    
        if (!refreshToken) {
            return res.status(400).json({ message: il8n.__('Refresh-token-not-provided') });
        }
    
        try {
            const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
            const accessToken = jwt.sign({ userId: decoded.userId }, process.env.JWT_SECRET, {
                expiresIn: '15m', 
            });
            res.status(200).json({ accessToken });
        } catch (err) {

            return res.status(403).json(err);
        }
};




exports.protectedRoute = async (req, res, next) => {
    const token = req.headers[process.env.TOKEN_NAME];

    if (!token) {
        return res.status(401).json({
            message: il8n.__('No-token')
        });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({
                    message: il8n.__('Token-expired')
                });
            } else {
                return res.status(403).json({
                    message: il8n.__('Invalid-token')
                });
}}});
};

exports.isAdmin = (req, res, next) => {
    if (!req.user.isAdmin) {
        return res.status(403).json({
            message:  il8n.__('Unauthorized')
        });
    }
    next();
}