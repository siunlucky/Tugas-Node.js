const { request } = require("express")
const express = require("express")
const app = express()

// set to read a request data from JSON format //
app.use(express.json())
// JSON is STRING //

app.post("/data", (request, response) => {
    let search = request.body.keyword

    let data = [
        {nis : 101, nama : "Adinda", alamat : "Araya"},
        {nis : 102, nama : "Andika", alamat : "Malang"},
        {nis : 103, nama : "Bagus", alamat : "Araya"}
    ]

    let jumlah_data = 0, hasil = []

    for (let i = 0; i < data.length; i++) {
        if (search == data[i].nis || search == data[i].nama || search == data[i].alamat) {
            jumlah_data += 1
            hasil.push(
                data[i]
            )
            
        }
        
    }
    return response.json({
        "Jumlah" : jumlah_data,
        "Data"   : hasil
    })







})
app.listen(2520, () => {
    console.log('server run on port 2520');
})