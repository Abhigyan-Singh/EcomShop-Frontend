import React, { useState, useEffect } from 'react';
import alertStories from 'stories/components/alert.stories';


export const Geolocation = () => {
    if (navigator.geolocation) {
        var location_timeout = setTimeout(10000);
    
        navigator.geolocation.getCurrentPosition(function(position) {
            clearTimeout(location_timeout);
    
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            console.log("LAT", lat)
            console.log("LNG", lng)
    
           
        }, function(error) {
            clearTimeout(location_timeout);    
        });
    } else {
        // Fallback for no geolocation
    }

}


export default Geolocation;