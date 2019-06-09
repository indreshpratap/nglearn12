exports.SEND = (res, error, data,status=true) => {
    if (error) {
        console.warn(error);
        res.status(500).json({ status: false, error: 'Internal server Error', data: data });
    } else {
        res.json({ status: status, data: data });
    }
}