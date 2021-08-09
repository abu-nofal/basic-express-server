'use strict';
const notFoundHandler=(req, res, next) => {
    res.status(404).json({
        code: 404,
        route: req.path,
        message: "Page Not Found"
    });
}

module.exports = notFoundHandler