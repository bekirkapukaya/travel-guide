import React, { useState, useEffect } from 'react';
import { Map, View } from 'ol';
import Overlay from 'ol/Overlay';
import Feature from 'ol/Feature';
import { toLonLat } from 'ol/proj';
import Point from 'ol/geom/Point';
import Vector from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import { defaults as defaultControls } from 'ol/control';
import 'ol/ol.css';
import '../sass/map.scss';
import AddLocationDialog from './AddLocationDialog';

const MapBase = () => {
  const [open, setOpen] = useState(false);
  const [currentCoordinates, setCurentCoordinates] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    map.setTarget('map');
  });

  const iconFeature = new Feature({
    geometry: new Point(36, 40),
    name: 'Somewhere near Nottingham',
  });

  var iconStyle = new Style({
    image: new Icon({
      anchor: [0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: 'https://openlayers.org/en/latest/examples/data/icon.png',
    }),
  });

  iconFeature.setStyle(iconStyle);

  const vectorPoint = new Vector({
    source: new VectorSource({
      features: [iconFeature],
    }),
    zIndex: 99,
  });

  const map = new Map({
    target: null,
    view: new View({
      center: [3905418.768, 4796901.69],
      zoom: 6,
    }),
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
      vectorPoint,
    ],
    controls: defaultControls({ attribution: false }),
  });

  var element = document.getElementById('popup');

  var popup = new Overlay({
    element: element,
    positioning: 'bottom-center',
    stopEvent: false,
    offset: [0, -50],
  });
  map.addOverlay(popup);

  map.on('singleclick', function (event) {
    var coordinates = toLonLat(event.coordinate);
    setCurentCoordinates(coordinates);
    handleOpen();
  });

  return (
    <>
      <div id="map">
        <div id="popup"></div>
      </div>
      <AddLocationDialog
        open={open}
        handleClose={handleClose}
        currentCoordinates={currentCoordinates}
      />
      ;
    </>
  );
};

export default MapBase;
