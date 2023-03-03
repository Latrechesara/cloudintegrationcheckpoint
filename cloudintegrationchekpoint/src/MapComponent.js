import React, { useRef, useEffect } from 'react';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import Icon from 'ol/style/Icon';
import Style from 'ol/style/Style';
import VectorLayer from 'ol/layer/Vector';
import { fromLonLat } from 'ol/proj';
import { defaults as defaultControls } from 'ol/control';


  function MapComponent() {
    const mapRef = useRef(null);
  
    useEffect(() => {
      if (!mapRef.current) return;
  
      const map = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          center: fromLonLat([36.737232, 3.086472]),
          zoom: 12
        }),
        controls: defaultControls({
          zoom: true,
          zoomOptions: {
            zoomInLabel: 'Zoom in',
            zoomOutLabel: 'Zoom out'
          },
          attribution: true
        })
      });
  
      return () => {
        map.setTarget(undefined);
      };
    }, [mapRef]);
  
    return <div ref={mapRef} className="map"></div>;
  }
  
  
  
  export default MapComponent;  