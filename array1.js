const { request } = require("express")
const express = require("express")
const app = express()

// set to read a request data from JSON format //
app.use(express.json())
// JSON is STRING //

app.post("/ages", (request, response) => {
    let data = request.body.ages
    let jmlRemaja = 0, jmlTua = 0, jmlDewasa = 0

    for (let i = 0; i < data.length; i++) {
        if (data[i].umur >= 12 && data[i].umur <= 24) {
            jmlRemaja += 1
            
        } 

        if (data[i].umur >= 25 && data[i].umur <= 55) {
            jmlDewasa += 1
            
        } 

        if (data[i].umur > 55 ) {
            jmlTua += 1
            
        } 
        
    }

    // give a response data
    return response.json({
        "jumlah_remaja" : jmlRemaja,
        "Jumlah Dewasa" : jmlDewasa,
        "Jumlah Tua" : jmlTua
    })
})
    // Store the request data

app.listen(1500, () => {
    console.log('server run on port 1500');
})