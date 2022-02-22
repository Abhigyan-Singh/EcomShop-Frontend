import React, { useState, useEffect } from 'react';



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




// export const Geolocation = () => {
//     const [location , setLocation] = useState({lat: "", lng: ""})

//     const onSuccesss = (location) => {
//         setLocation({
//             coordinated: {
//                 lat: location.coords.latitude,
//                 lng: location.coords.longitde,
//             }
//         })
//     }

//     const onError = (error) => {
//         setLocation({
//             error,
//         })
//     }

//     useEffect(() => {
//        if(!("geolocation" in navigator)) {
//          onError({
//              code: 0,
//              message: "Geolocation not supported"
//          })
//        }
   
//        navigator.geolocation.getCurrentPositon(onSuccesss, onError,  {maximumAge:0, timeout:5000})
//    }, [])
   

//     return location
// }