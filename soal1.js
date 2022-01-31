//load library express
let express = require("express")
const { get } = require("express/lib/response")

//inisiasi objek baru dari express
let app = express()

app.get("/kubus/:sisi", (request, response) => {
    let r = request.params.sisi
    let volume = r ** 3
    let luas = 6 * r ** 2

    return response.json({
        Bangun : `Kubus`,
        Volume : `${volume}`,
        Luas : `${luas}`
    })
}) 

app.get("/tabung/:r/:t", (request, response) => {
    let r = request.params.r
    let t = request.params.t
    let phi = 3.14

    let volume = phi * r ** 2 * t
    let luas = 2 * phi * r * (r + t)

    return response.json({
        Bangun : `Tabung`,
        Volume : `${volume}`,
        Luas : `${luas}`
    })
})

app.get("/bola/:r", (request, response) => {
    let r = request.params.r
    let phi = 3.14

    let volume = 4/3 * phi * r**3
    let luas = 4 * phi * r**2

    return response.json({
        Bangun : `Bola`,
        Volume : `${volume}`,
        Luas : `${luas}`

    })
})

app.get("/balok/:p/:l/:t",(request, response) => {
    let p = request.params.p
    let l = request.params.l
    let t = request.params.t

    let volume = p * l * t
    let luas = 2 * (p * l + p * t + l * t)

    return response.json({
        Bangun : `Balok`,
        Volume : `${volume}`,
        Luas : `${luas}`
    })
})

app.listen(5000, () => {
    console.log('server run on port 5000');
})