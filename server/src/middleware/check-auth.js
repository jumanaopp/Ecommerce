const jwt = require('jsonwebtoken')

module.exports = (req, res, next) =>{
    
    try {
        console.log(req);
        // console.log(req.headers);
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        const decodedToken = jwt.verify(token,"secret_this_should_be_longer");
        console.log('decodedToken',decodedToken);
        req.userData = {userid: decodedToken.user_id, userRole:decodedToken.role};
        next();
    }
    catch(error){
        res.status(401).json({ message:"Auth failed!" });
    }
}