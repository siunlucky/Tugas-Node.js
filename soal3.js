let express = require("express")
const { get } = require("express/lib/response")

//inisiasi objek baru dari express
let app = express()

app.get("/convert/decimal/:decimal", (request, response) => {
    let decimal = request.params.decimal
    let octal = Number(decimal).toString(8);
    let hexadecimal = Number(decimal).toString(16);
    let binary = Number(decimal).toString(2);

    return response.json({
        "decimal" : `${decimal}`,
        "result" : {
            "octal" : `${octal}`,
            "hexadecimal" : `${hexadecimal}`,
            "binary" : `${binary}`
        }
        
    })
}) 

app.get("/convert/octal/:octal", (request, response) => {
    let octal = request.params.octal
    let decimal = parseInt(octal, 8).toString(10);
    let hexadecimal = parseInt(octal, 8).toString(16);
    let binary = parseInt(octal, 8).toString(2);

    return response.json({
        "octal" : `${octal}`,
        "result" : {
            "decimal" : `${decimal}`,
            "hexadecimal" : `${hexadecimal}`,
            "binary" : `${binary}`
        }
        
    })
}) 

app.get("/convert/hexadecimal/:hexadecimal", (request, response) => {
    let hexadecimal = request.params.hexadecimal
    let decimal = parseInt(hexadecimal, 16).toString(10);
    let octal = parseInt(hexadecimal, 16).toString(8);
    let binary = parseInt(hexadecimal, 16).toString(2);

    return response.json({
        "hexadecimal" : `${hexadecimal}`,
        "result" : {
            "decimal" : `${decimal}`,
            "octal" : `${octal}`,
            "binary" : `${binary}`
        }
        
    })
}) 

app.get("/convert/binary/:binary", (request, response) => {
    let binary = request.params.binary
    let decimal = parseInt(binary, 2).toString(10);
    let hexadecimal = parseInt(binary, 2).toString(16);
    let octal = parseInt(binary, 2).toString(8);

    return response.json({
        "binary" : `${binary}`,
        "result" : {
            "decimal" : `${decimal}`,
            "hexadecimal" : `${hexadecimal}`,
            "octal" : `${octal}`
        }
        
    })
}) 


app.listen(2500, () => {
    console.log('server run on port 2500');
})