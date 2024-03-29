import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Select, MenuItem } from '@mui/material';
import DashboardCard from '../../components/shared/DashboardCard';

const OfferedTrips = () => {

  const [trip, setTrip] = React.useState('1');

  const handleChange = (event) => {
    setTrip(event.target.value);
  };
  // Tur paketleri verilerini burada tanımlayabiliriz
  const tripPackages = [
    {
      name: 'İzmir Tour',
      description: 'Explore the historical sites, coastal areas, and culinary stops in Izmir, the pearl of the Aegean.',
      destinations: ['Kordon', 'Clock Tower', 'Kemeraltı Bazaar'],
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.2745537288355!2d27.142741814587105!3d38.4192410886793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb98f195d3d1%3A0x86a1946e037b7a7b!2sIzmir%20Clock%20Tower!5e0!3m2!1sen!2str!4v1644242925229!5m2!1sen!2str'
    },
    {
      name: 'Antalya Tour',
      description: 'Enjoy the sun and sea in Antalya, visit historical sites, and dine with magnificent views.',
      destinations: ['Konyaaltı Beach', 'Kaleiçi', 'Düden Waterfalls'],
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.5433544221847!2d30.724880814782105!3d36.882314079943935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba6e4b3a322a31%3A0xf2db18be1e571b38!2sKonyaalt%C4%B1%20Plaj%C4%B1!5e0!3m2!1sen!2str!4v1644243306865!5m2!1sen!2str'
    },
    {
      name: 'Cappadocia Tour',
      description: 'Take a balloon tour in Cappadocia, famous for its fairy chimneys and unique geography, explore underground cities, and try local delicacies.',
      destinations: ['Göreme Open Air Museum', 'Ürgüp', 'Avanos'],
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49743.378533944106!2d34.83153681736927!3d38.64399088537074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e5bd0ba0451245%3A0x7e1fa2d770b239a6!2sG%C3%B6reme%20A%C3%A7%C4%B1k%20Hava%20M%C3%BCzesi!5e0!3m2!1sen!2str!4v1644243468348!5m2!1sen!2str'
    },
  ];

  return (
    <DashboardCard>
      <Select
        defaultValue={8}
        size="small"
        onChange={handleChange}
      >
        <MenuItem value={1}>Beach</MenuItem>
        <MenuItem value={2}>Adventure</MenuItem>
        <MenuItem value={3}>Camping</MenuItem>
        <MenuItem value={4}>Road Trips</MenuItem>
        <MenuItem value={5}>Backpacking</MenuItem>
        <MenuItem value={6}>Cultural</MenuItem>
        <MenuItem value={7}>Relaxing</MenuItem>
        <MenuItem value={8}>Show me Anything</MenuItem>
      </Select>
    <div>
      <Grid container spacing={3}>
        {tripPackages.map((trip, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <TripPackage trip={trip} />
          </Grid>
        ))}
      </Grid>
    </div>
    </DashboardCard>
  );
};

const TripPackage = ({ trip }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
      <Typography variant="h2" align="center" style={{ marginBottom: '10px' }}>{trip.name}</Typography>
      <Typography variant="body1" style={{ marginBottom: '10px' }}>{trip.description}</Typography>
      <ul>
        {trip.destinations.map((destination, index) => (
          <li key={index}>{destination}</li>
        ))}
      </ul>
      <iframe
        title={trip.name}
        src={trip.mapUrl}
        width="100%"
        height="200"
        style={{ border: 0, marginTop: '10px' }}
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default OfferedTrips;
