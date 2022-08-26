import React, { useEffect } from 'react';

const MapIcon = ({ setCenter, setMarker }) => {
   
    useEffect(() => {
        findMe()
    },[])
    const findMe = () => {
        if (!navigator.geolocation) {
            alert('not ok')
            return;
        }
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                if (setCenter) {
                    setCenter(latitude, longitude);
                }
                if (setMarker) {
                    setMarker(latitude, longitude, 'hi', `lat:${latitude}`, `lng:${longitude}`);
                }
            },
            (error) => {
                alert('error')
            }
        )
    }

    return (
        <>
          {/* <button
            type='button'
            className='btn btn-info'
            onClick={findMe}
        >
            Alow
        </button> */}
        </>
      

    )
}
export default MapIcon;