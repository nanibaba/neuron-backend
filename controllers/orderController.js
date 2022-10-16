module.exports.createOrder = async (req, res) => {
    res.json({
        message: 
        `Successfully created order with number ${req.body.orderNo}`,
        status: 200
    })
}