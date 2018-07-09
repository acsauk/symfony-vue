/**
 * Mocking client-server processing
 */
const _charges = [
    {"id": 1, "order_id": "order_id_1_here", "customer_id": "customer_id_1_here", "pid": 2, "amount": "20.59", "currency": "gbp"},
    {"id": 2, "order_id": "order_id_2_here", "customer_id": "customer_id_2_here", "pid": 2, "amount": "100.50", "currency": "gbp"},
    {"id": 3, "order_id": "order_id_3_here", "customer_id": "customer_id_3_here", "pid": 2, "amount": "78.25", "currency": "gbp"},

]

export default {
    getCharges (cb) {
        setTimeout(() => cb(_charges), 100)
    },

    makeCharge (charge, cb, errorCb) {
        setTimeout(() => {
            // simulate random checkout failure.
            (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
                ? cb()
                : errorCb()
        }, 100)
    }
}