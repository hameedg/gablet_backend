exports.protectAdminActions = (req, res, next) => {
    const username = req.headers['username'];
    const password = req.headers['password'];

    if (username === 'admin' && password === 'admin') {
        next(); 
    } else {
        return res.status(403).json({ message: 'Access denied: Admins only' });
    }
};
