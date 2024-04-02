import React, { useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { useJsApiLoader, GoogleMap, Marker, InfoWindow, DirectionsRenderer } from '@react-google-maps/api';

const izmirCoords = { lat: 38.4192, lng: 27.1287 };
const izmirPlaces = [
  { name: 'Alsancak', coords: { lat: 38.4325, lng: 27.1503 }, details: 'Alsancak is a vibrant neighborhood in İzmir known for its entertainment and nightlife.' },
  { name: 'Konak Square', coords: { lat: 38.4192, lng: 27.1287 }, details: 'Konak Square is a popular public square in İzmir.' },
  { name: 'Kordon', coords: { lat: 38.4161, lng: 27.1287 }, details: 'Kordon is a promenade along the waterfront of İzmir.' },
  { name: 'Asansör', coords: { lat: 38.4267, lng: 27.1419 }, details: 'Asansör is a historical elevator in İzmir with panoramic views of the city.' },
  { name: 'Kemeraltı Market', coords: { lat: 38.4213, lng: 27.1281 }, details: 'Kemeraltı Market is a bustling bazaar in İzmir offering a variety of goods and foods.' },
  { name: 'Ephesus Ancient City', coords: { lat: 37.9499, lng: 27.3697 }, details: 'Ephesus Ancient City is an archaeological site near Selçuk, İzmir Province, Turkey. It is one of the best-preserved ancient cities in the world.' },
];

function DialogTrips() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  const [map, setMap] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    console.log('Google Maps API is loaded:', isLoaded);
    if (isLoaded) {
      handleCalculateRoute();
    }
  }, [isLoaded]);

  const renderDirections = () => {
    if (directions) {
      return <DirectionsRenderer directions={directions} />;
    }
    return null;
  };

  const handleCalculateRoute = () => {
    const waypoints = izmirPlaces.slice(0, 5).map(place => ({
      location: place.coords,
      stopover: true,
    }));

    const origin = izmirPlaces[0].coords;
    const destination = izmirPlaces[5].coords;

    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin,
        destination,
        waypoints,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error(`Error fetching directions ${result}`);
        }
      }
    );
  };

  if (loadError) return <div>Error: It cannot loaded</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Flex
      position='relative'
      flexDirection='column'
      alignItems='center'
      h='100vh'
      w='100vw'
    >
      <Box position='absolute' left={0} top={0} h='100%' w='100%'>
        <GoogleMap
          center={izmirCoords}
          zoom={12}
          mapContainerStyle={{ width: '70%', height: '100%' }}
          options={{
            zoomControl: true,
            mapTypeControl: true,
            streetViewControl: true,
            fullscreenControl: true,
          }}
          onLoad={map => setMap(map)}
        >
          {izmirPlaces.slice(0, 6).map((place, index) => (
            <Marker
              key={place.name}
              position={place.coords}
              onClick={() => setSelectedPlace(place)}
              label={(index + 1).toString()}
            />
          ))}

          {renderDirections()}

          {selectedPlace && (
            <InfoWindow
              position={selectedPlace.coords}
              onCloseClick={() => setSelectedPlace(null)}
            >
              <Box>
                <h2>{selectedPlace.name}</h2>
                <p>{selectedPlace.details}</p>
              </Box>
            </InfoWindow>
          )}
        </GoogleMap>
      </Box>
    </Flex>
  );
}

export default DialogTrips;
