const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let locations = {
    'limburger-dom': {
        "id": 1,
        "locationName": "Dom zu Limburg",
        "locationAddress": "Domplatz",
        "locationCoordinates": `50°23'19.7"N 8°03'60.0"E`,
        "locationDescription_de":`Der Limburger Dom, nach seinem Schutzpatron St. Georg auch Georgsdom genannt, ist seit 1827 die Kathedralkirche des Bistums Limburg und thront oberhalb der Altstadt von Limburg an der Lahn neben der Burg Limburg. Die hohe Lage auf dem Kalkfelsen oberhalb der Lahn sorgt dafür, dass der Dom weithin sichtbar ist. Er hat sieben Türme, mehr als jede andere Kirche in Deutschland.`,
        "wikipedia_de": "https://de.wikipedia.org/wiki/Limburger_Dom"
    },
    'schloss-limburg':{
        "id": 2,
        "locationName": "Schloss Limburg",
        "locationAddress": "Mühlberg 2",
        "locationCoordinates": `50°23'18.5"N 8°04'03.2"E`,
        "locationDescription_de":`Die Burg Limburg, auch Limburger Schloss genannt, ist eine mittelalterliche Felsenburg in Limburg an der Lahn im hessischen Landkreis Limburg-Weilburg.`,
        "wikipedia_de": "https://de.wikipedia.org/wiki/Burg_Limburg_(Hessen)"
    },
    'alte-lahnbrücke':{
        "id": 3,
        "locationName": "Alte Lahnbrücke",
        "locationAddress": "unknown",
        "locationCoordinates": `50°23'26.6"N 8°03'53.1"E`,
        "locationDescription_de":`Die Alte Lahnbrücke ist eine im 14. Jahrhundert gebaute Brücke in Limburg an der Lahn. Auf ihr überquerte im Mittelalter die Via Publica von Köln nach Frankfurt sowie später die Straße von Siegen nach Wiesbaden (damals Verlauf der B 54) die Lahn. Seit dem Bau der neuen Lahnbrücke im Jahr 1968, ca. 200 Meter flussabwärts, wird die Alte Lahnbrücke von keiner Fernstraße mehr genutzt. Gemeinsam mit dem Limburger Dom ist die Alte Lahnbrücke eines der beliebtesten Fotomotive in Limburg.`,
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
    'neues-rathaus':{
        "id": 5,
        "locationName": "Neues Rathaus",
        "locationAddress": "Werner-Senger-Straße 10",
        "locationCoordinates": `50°23'12,5"N 8°3'40,2"O`,
        "locationDescription_de":`Das Neue Rathaus ist seit 1900 das Rathaus der mittelhessischen Kreisstadt Limburg an der Lahn. Seit spätestens 1502 wurde das Haus Fischmarkt 21 als Rathaus genutzt, dieses wurde jedoch im 19. Jahrhundert zu klein. Ab 1865 zog die Verwaltung in ein Schulgebäude am Neumarkt, bevor am 1. Dezember 1892 die Stadtverordnetenversammlung einen Neubau beschloss. Am 31. Oktober 1895 kaufte die Stadt schließlich ein Grundstück an der kürzlich erschlossenen Werner-Senger-Straße; 1897 wurden die Pläne fertiggestellt. Verantwortlich für den 100.000 Mark teuren Bau zeichneten der Wiesbadener Stadtbaumeister Felix Genzmer, dem der größere Anteil zugeschrieben wird, sowie der Limburger Stadtbaumeister Joseph Kauter. Laut Inschrift im Giebel wurde das Gebäude 1898 fertig gestellt, der Bezug erfolgte 1899 bis 1900.`,
        "wikipedia_de": "https://de.wikipedia.org/wiki/Neues_Rathaus_(Limburg_an_der_Lahn)"
    },
    'haus-der-sieben-laster':{
        "id": 6,
        "locationName": "Haus der sieben Laster",
        "locationAddress": "Brückengasse 9",
        "locationCoordinates": `50°23'22,9"N 8°3'52,4"O`,
        "locationDescription_de":`Das Haus der sieben Laster ist ein denkmalgeschütztes Fachwerkhaus aus dem 16. Jahrhundert in der Altstadt von Limburg an der Lahn, dessen Fassade von Schnitzereien geziert wird, die allgemein hin als die sieben biblischen Laster Hochmut, Neid, Unmäßigkeit, Geiz, Wollust, Zorn und Trägheit gedeutet werden.`,
        "wikipedia_de": "https://de.wikipedia.org/wiki/Haus_der_sieben_Laster"
    },
    'roemer-2-4-6':{
        "id": 7,
        "locationName": "Römer 2-4-6",
        "locationAddress": "Römer 4",
        "locationCoordinates": `50°23'20,9"N 8°3'52,2"O`,
        "locationDescription_de":`Römer 2-4-6 ist die Bezeichnung für ein gotisches Fachwerkhaus, dessen älteste verbaute Teile aus dem Jahr 1289 stammen. Damit ist der Römer 2-4-6 heute eines der ältesten, freistehenden Fachwerkhäuser in Deutschland und nationales Denkmal. Es steht in der historischen Altstadt von Limburg an der Lahn. Der Name leitet sich ab von der Straßenbezeichnung sowie den Hausnummern. Außerdem ist der Römer 2-4-6 das älteste Fachwerkhaus Limburgs.`,
        "wikipedia_de": "https://de.wikipedia.org/wiki/R%C3%B6mer_2-4-6"
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