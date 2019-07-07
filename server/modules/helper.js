exports.SEND = (res, error, data,status=true) => {
    if (error) {
        console.warn(error);
        res.status(500).json({ status: false, error: 'Internal server Error', data: data });
    } else {
        res.json({ status: status, data: data });
    }
}
exports.NOT_OK = (res, error, data) => {
    if (error) {
        console.warn(error);
        res.status(500).json({ status: false, error: 'Internal server Error', data: data });
    } else {
        res.status(400).json({ status: false, data: data });
    }
}
