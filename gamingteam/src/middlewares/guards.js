function hasUser() {
    return (req, res, next) => {
        if (req.user) {
            next();
        } else {
            res.redirect('/404');
        }
    }
}

 
function isGuest() {
    return (req, res, next) => {
        if (req.user) {
            res.redirect('/404'); //Промени на изпита ако трябва
        } else {
            next();
        }
    }
}

module.exports = {
    hasUser,
    isGuest
};