import React, { useEffect } from 'react';

const MapQuest = ({ zoom, height, width, center, tileLayer, apiKey }) => {
    useEffect(() => {
        window.L.mapquest.key = 'Gmjtd|luu2206zn9,8g=o5-lz2s1';
        const map = window.L.mapquest.map('map', {
            center,
            layers: window.L.mapquest.tileLayer('map'),
            zoom
        });
        map.addControl(window.L.mapquest.control());
        // new MQA.TileMap(map)

    }, [])
    useEffect(() => {
        // onload()
        console.log(center);
        
    }, [center])
    // const onload = () => {
    //     window.L.mapquest.key = 'Gmjtd|luu2206zn9,8g=o5-lz2s1';
    //     const map = window.L.mapquest.map('map', {
    //         center,
    //         layers: window.L.mapquest.tileLayer('map'),
    //         zoom
    //     });
    //     map.addControl(window.L.mapquest.control());
    // }
    return (
        <div id="map" style={{ height, width, }}>
            <p style={{ textAlign: 'center' }}>Map loading...</p>
        </div>
    )
}
export default MapQuest;