function YandexReadyHandlero9fzxgo6() {
    var map = new ymaps.Map("mapo9fzxgo6", {
        center: [55.67038333032633, 52.30962880380246],
        zoom: 15,
        controls: ["zoomControl","geolocationControl"],
        type: "yandex#map"
    },{
        suppressMapOpenBlock: true
    });

    map.geoObjects.add(new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.67085628258516,52.28396542794784],
                hideIconOnBalloonOpen: false
            },
            properties: {
                balloonContent:decodeURIComponent("АЗС № 6 г. Наб. Челны, ул. Академика Королёва, д.11"),
                iconCaption:decodeURIComponent("%D0%A2%D0%BE%D1%87%D0%BA%D0%B01"),
                hintCaption:decodeURIComponent("%D0%A2%D0%BE%D1%87%D0%BA%D0%B01"),
            }
        }, {
            preset: "islands#redCircleDotIcon",
        })
    );    map.geoObjects.add(new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.6664418376097,52.31160290963744],
                hideIconOnBalloonOpen: false
            },
            properties: {
                balloonContent:decodeURIComponent("%3Cp%3E%0A%09%D0%A2%D0%BE%D1%87%D0%BA%D0%B0%0A%3C%2Fp%3E"),
                iconCaption:decodeURIComponent("%D0%A2%D0%BE%D1%87%D0%BA%D0%B02"),
                hintCaption:decodeURIComponent("%D0%A2%D0%BE%D1%87%D0%BA%D0%B02"),
            }
        }, {
            preset: "islands#redCircleDotIcon",
        })
    );    map.geoObjects.add(new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.67277228721311,52.318297703338615],
                hideIconOnBalloonOpen: false
            },
            properties: {
                balloonContent:decodeURIComponent("%3Cp%3E%0A%09%D0%A2%D0%BE%D1%87%D0%BA%D0%B0%0A%3C%2Fp%3E"),
                iconCaption:decodeURIComponent("%D0%A2%D0%BE%D1%87%D0%BA%D0%B03"),
                hintCaption:decodeURIComponent("%D0%A2%D0%BE%D1%87%D0%BA%D0%B03"),
            }
        }, {
            preset: "islands#redCircleDotIcon",
        })
    );    map.geoObjects.add(new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.66649035071271,52.297054607940645],
                hideIconOnBalloonOpen: false
            },
            properties: {
                balloonContent:decodeURIComponent("%3Cp%3E%0A%09%D0%A2%D0%BE%D1%87%D0%BA%D0%B0%0A%3C%2Fp%3E"),
                iconCaption:decodeURIComponent("%D0%A2%D0%BE%D1%87%D0%BA%D0%B04"),
                hintCaption:decodeURIComponent("%D0%A2%D0%BE%D1%87%D0%BA%D0%B04"),
            }
        }, {
            preset: "islands#redCircleDotIcon",
        })
    );    return map;
}

