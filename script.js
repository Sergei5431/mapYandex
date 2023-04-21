let center = [53.65010641347004,23.85473481317978]
let radius =800
let colorCircle = "#808080"
let colorCircleMin = "rgb(6, 6, 1)"
let colorLine = "rgb(6, 6, 1)"

let coefficient = [-0.000008378601498496404, 0.00000858306884765625]
let coefficient2 = [0.000008378601498496404, -0.00000858306884765625]
let longLine = [center[0]+coefficient[0]*radius, center[1]+coefficient[1]*radius]
let long = [center[0]+coefficient[0]*radius+0.0090, center[1]+coefficient[1]*radius+0.0045]
let long2 = [center[0]+coefficient2[0]*radius, center[1]+coefficient2[1]*radius]

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: center,
            zoom: 14
        }, {
            searchControlProvider: 'yandex#search'
        });

    var myCircle = new ymaps.Circle([
        center,
        radius
    ], {
        balloonContent: `Радиус круга - ${radius} м`,
    }, {
        fillColor: "#DB709300",
        strokeColor: colorCircle,
        strokeWidth: 10
    });


    var myCircleMim = new ymaps.Circle([
        center,
        60
    ], {

        balloonContent: `Радиус круга - 60 м`,
    }, {
        fillColor: "#fefefe",
        strokeColor: colorCircleMin,
        strokeWidth: 2
    });


    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "LineString",
            coordinates: [
                center,
                longLine
            ]
        },
        properties:{
            hintContent: "Я геообъект",
            balloonContent: "Линия"
        }
    }, {
        draggable: true,
        strokeColor: colorLine,
        strokeWidth: 5
    });


    var myGeoObject3 = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
                [
                    center,
                    long,
                    long2
                ]
            ],
               fillRule: "nonZero"
        },

        properties:{
            balloonContent: "Многоугольник"
        }
    }, {
 
        fillColor: '#00FF00',
        strokeColor: '#0000FF',
        strokeWidth: 5,
    });

    myMap.geoObjects
    .add(myCircle)
    .add(myGeoObject)
    .add(myGeoObject3)
    .add(myCircleMim);
}






