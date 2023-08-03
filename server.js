const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let locations = {
    'limburger dom': {
        "id": 1,
        "locationName": "Dom zu Limburg",
        "locationAddress": "Domplatz",
        "locationCoordinates": `50°23'19.7"N 8°03'60.0"E`,
        "locationDescription_de":"Der Limburger Dom, nach seinem Schutzpatron St. Georg auch Georgsdom genannt, ist seit 1827 die Kathedralkirche des Bistums Limburg und thront oberhalb der Altstadt von Limburg an der Lahn neben der Burg Limburg. Die hohe Lage auf dem Kalkfelsen oberhalb der Lahn sorgt dafür, dass der Dom weithin sichtbar ist. Er hat sieben Türme, mehr als jede andere Kirche in Deutschland.",
        "wikipedia_de": "https://de.wikipedia.org/wiki/Limburger_Dom"
    },
    'schloss limburg':{
        "id": 2,
        "locationName": "Schloss Limburg",
        "locationAddress": "Mühlberg 2",
        "locationCoordinates": `50°23'18.5"N 8°04'03.2"E`,
        "locationDescription_de":"Die Burg Limburg, auch Limburger Schloss genannt, ist eine mittelalterliche Felsenburg in Limburg an der Lahn im hessischen Landkreis Limburg-Weilburg.",
        "wikipedia_de": "https://de.wikipedia.org/wiki/Burg_Limburg_(Hessen)"
    },
    'alte lahnbrücke':{
        "id": 3,
        "locationName": "Alte Lahnbrücke",
        "locationAddress": "unknown",
        "locationCoordinates": `50°23'26.6"N 8°03'53.1"E`,
        "locationDescription_de":`Die Alte Lahnbrücke ist eine im 14. Jahrhundert gebaute Brücke in Limburg an der Lahn.
        Auf ihr überquerte im Mittelalter die Via Publica von Köln nach Frankfurt sowie später die Straße von Siegen nach Wiesbaden (damals Verlauf der B 54) die Lahn. Seit dem Bau der neuen Lahnbrücke im Jahr 1968, ca. 200 Meter flussabwärts, wird die Alte Lahnbrücke von keiner Fernstraße mehr genutzt. Gemeinsam mit dem Limburger Dom ist die Alte Lahnbrücke eines der beliebtesten Fotomotive in Limburg.`,
        "wikipedia_de": "https://de.wikipedia.org/wiki/Alte_Lahnbr%C3%BCcke_(Limburg)"
    },
    'werner-senger-haus':{
        "id": 4,
        "locationName": "Werner-Senger-Haus",
        "locationAddress": "Rütsche 5",
        "locationCoordinates": `50°23'21,2"N 8°3'51,9"E`,
        "locationDescription_de":`Das Werner-Senger-Haus ist ein denkmalgeschütztes Fachwerkhaus aus dem 13. Jahrhundert in der Altstadt von Limburg an der Lahn, Rütsche 5. Es war einst über Jahrhunderte hinweg der Sitz wohlhabender Limburger Kaufleute. Ob das Haus jemals von dem in der nahegelegenen Brückengasse wohnenden Kaufmann Werner Senger bewohnt war und wie es irrtümlich zu seinem Namen kam, ist bis heute ungeklärt.`,
        "wikipedia_de": "https://de.wikipedia.org/wiki/Werner-Senger-Haus"
    },
    'unknown':{
        "id": 0,
        "locationName": "unknown",
        "locationAddress": "unknown",
        "locationCoordinates": "unknown",
        "locationDescription_de":"unknown",
        "wikipedia_de": "unknown"
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) => {
    response.json(locations)
})

app.get('/api/:name', (request, response) => {
    const locationName = request.params.name.toLowerCase()
    if(locations[locationName]){
        response.json(locations[locationName])
    }else{
        response.json(locations['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})