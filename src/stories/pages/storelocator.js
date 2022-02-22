import React, { useEffect } from 'react';
import { Map } from 'react-store-locator';


export default {
    title: 'Pages/Home',
    argTypes: {
      isAuthenticated: {
        name: 'Show Authenticated State',
        control: 'boolean',
        defaultValue: true
      }
    },
    parameters: {
      layout: 'fullscreen'
    }
  };


export const Mapquest = () => {
    const locations = [
      {
      id: 1,
      lat: 50,
      lng: 25.1,
      show: false,
      name: 'First Marker'
    },
    {
      id: 2,
      lat: 50,
      lng: 25.2,
      show: true,
      name: 'Second Marker'
    },
    {
      id: 3,
      lat: 50,
      lng: 25.3,
      show: true,
      name: 'Third Marker'
    }
    ]
    return(
      <Map locations={locations} googleApiKey={'Your Key Here'}/> // Pass google maps api key through here
    )
}  



// export const Mapquest = ({isAuthenticated, logout, height, width, center, titleLayer, zoom, apiKey, ...rest}) => {
    
//     useEffect(() => {
//       //api key;
//       window.L.mapquest.key = apiKey


//       const map = window.L.mapquest.map('map', {
//         center,
//         layers: window.L.mapquest.titleLayer(titleLayer),
//         zoom
//       });

//       map.addControl(window.L.mapquest.control())
//     }, []);


//     return (
//         <div id='map' style={{ width, height}}>
//           <p>...Loading maps</p>
//         </div>
//     )
// };

// Mapquest.storyName = 'Mapquest';







// L.mapquest.key = 'Gmjtd|luu2206zn9,8g=o5-lz2s1';
// var baseLayer = L.mapquest.tileLayer('dark');

// L.mapquest.geocoding().geocode(['New York, NY'], showMap);

// function showMap(err, data) {
//   var map = createMap();
//   map.addControl(L.mapquest.control());
//   addLayerControl(map);
// }

// function createMap() {
//   var map = L.mapquest.map('map', {
//     center: [40.7237, -73.9825],
//     zoom: 14,
//     layers: baseLayer
//   });
//   return map;
// }

// function addLayerControl(map) {
//   L.control.layers({
//     'Map': L.mapquest.tileLayer('map'),
//     'Satellite': L.mapquest.tileLayer('satellite'),
//     'Hybrid': L.mapquest.tileLayer('hybrid'),
//     'Light': L.mapquest.tileLayer('light'),
//     'Dark': baseLayer
//   }, {}, { position: 'topleft'}).addTo(map);
// }



