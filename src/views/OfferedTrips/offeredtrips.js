import React, { useState } from 'react';
import { Grid, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Select, MenuItem } from '@mui/material';
import DashboardCard from '../../components/shared/DashboardCard';
import izmirImage from '../../assets/images/izmir.jpg';
import antalyaImage from '../../assets/images/antalya.jpg';
import kapadokyaImage from '../../assets/images/kapadokya.jpg';
import DialogTrips from './dialogTrips'; // dialogTrips bileşenini import ettik

const OfferedTrips = () => {
  const [trip, setTrip] = useState('1');
  const [openDialog, setOpenDialog] = useState(false);

  const handleChange = (event) => {
    setTrip(event.target.value);
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const tripPackages = [
    {
      name: 'İzmir Tour',
      description: 'Explore the historical sites, coastal areas, and culinary stops in Izmir, the pearl of the Aegean.',
      image: izmirImage,
    },
    {
      name: 'Antalya Tour',
      description: 'Enjoy the sun and sea in Antalya, visit historical sites, and dine with magnificent views.',
      image: antalyaImage,
    },
    {
      name: 'Cappadocia Tour',
      description: 'Take a balloon tour in Cappadocia, famous for its fairy chimneys and unique geography, explore underground cities, and try local delicacies.',
      image: kapadokyaImage,
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
              <TripPackage trip={trip} onDialogOpen={handleDialogOpen} />
            </Grid>
          ))}
        </Grid>
      </div>
      <Dialog open={openDialog} onClose={handleDialogClose} fullWidth maxWidth="lg">
        <DialogTitle>Trip Details</DialogTitle>
        <DialogContent dividers>
          <DialogTrips />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </DashboardCard>
  );
};

const TripPackage = ({ trip, onDialogOpen }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '25px', borderRadius: '5px', position: 'relative' }}>
      <img src={trip.image} alt={trip.name} style={{ width: '100%', borderRadius: '5px 5px 0 0', marginBottom: '10px' }} />
      <Typography variant="h2" align="center" style={{ marginBottom: '10px' }}>{trip.name}</Typography>
      <Typography variant="body1" style={{ marginBottom: '10px' }}>{trip.description}</Typography>
      <Button variant="contained" color="primary" onClick={onDialogOpen} style={{ position: 'absolute', bottom: '10px', right: '10px' }}>Search</Button>
    </div>
  );
};

export default OfferedTrips;
