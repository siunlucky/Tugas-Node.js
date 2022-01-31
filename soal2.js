//load library express
let express = require("express")
const { get } = require("express/lib/response")

//inisiasi objek baru dari express
let app = express()

app.get("/convert/celcius/:c", (request, response) => {
    let c = request.params.c
    let f = 9/5 * c + 32
    let r = 4/5 * c
    let k = c + 273

    return response.json({
        "celcius" : `${c}`,
        "result" : {
            "reamur" : `${r}`,
            "fahrenheit" : `${f}`,
            "kelvin" : `${k}`
        }
        
    })
}) 

app.get("/convert/reamur/:r", (request, response) => {
    let r = request.params.r
    let c = 5/4 * r
    let f = 9/4 * r + 32 
    let k = 5/4 * r + 273

    return response.json({
        "reamur" : `${r}`,
        "result" : {
            "celcius" : `${c}`,
            "fahrenheit" : `${f}`,
            "kelvin" : `${k.toFixed()}`
        }
        
    })
}) 

app.get("/convert/kelvin/:k", (request, response) => {
    let k = request.params.k
    let c = k - 273
    let f = (k - 273.15) * 9/5 + 32
    let r = 4/5 * (k - 273.15)

    return response.json({
        "kelvin" : `${k}`,
        "result" : {
            "celcius" : `${c}`,
            "fahrenheit" : `${f.toFixed(2)}`,
            "reamur" : `${r.toFixed(2)}`
        }
        
    })
}) 

app.get("/convert/fahrenheit/:f", (request, response) => {
    let f = request.params.f
    let c = 5/9 * (f - 32)
    let r = 4/9 * (f - 32)
    let k = (f - 32) * 5/9 + 273.15

    return response.json({
        "fahrenheit" : `${f}`,
        "result" : {
            "celcius" : `${c}`,
            "reamur" : `${r}`,
            "kelvin" : `${k.toFixed()}`
        }
        
    })
}) 

app.listen(8000, () => {
    console.log('server run on port 8000');
})