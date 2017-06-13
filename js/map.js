var container = document.querySelector("[id=map]");

ymaps.ready(function ()  {
  var myMap = new ymaps.Map(container, {
    center: [34.865966, -111.763806],
    zoom: 9,
    controls: ["zoomControl"]
  });
  myMap.behaviors.disable("scrollZoom");
  myMap.controls.add("zoomControl", {});

  var myPlacemark = new ymaps.Placemark([34.865966, -111.763806] , {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/icon-map-marker.svg",
      iconImageSize: [27, 27],
      iconImageOffset: [-13, -13] });

    myMap.geoObjects.add(myPlacemark);
});
