const { request } = require("express")
const express = require("express")
const app = express()

// set to read a request data from JSON format //
app.use(express.json())
// JSON is STRING //

app.post("/total", (request ,response) => {
    let data = request.body.barang
    let total_harga = 0

    for (let i = 0; i < data.length; i++) {
        total_harga += data[i].harga * data[i].jumlah * 11/10
        
    }
    return response.json({
        "Total Harga" : total_harga
    })
})



app.listen(2100, () => {
    console.log('server run on port 2100');
})