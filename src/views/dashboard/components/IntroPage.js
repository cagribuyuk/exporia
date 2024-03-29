import React from 'react';
import travelimg from 'src/assets/images/travel-photos-6.jpg';
import travelimg2 from 'src/assets/images/travel-photos-7.jpg';
import travelimg3 from 'src/assets/images/travel-photos-8.jpg';
import travelimg4 from 'src/assets/images/travel-photos-14.jpg';
import { Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Button from '@mui/material/Button';
import {IconClipboardPlus,IconViewfinder } from '@tabler/icons';


const IntroPage = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
        <Typography variant="h1" style={{ marginLeft:'-10px', marginTop: '-200px' }}>Discover effortless travel planning with us
        </Typography>
        <Typography variant="h3" style={{ marginLeft:'-10px', marginTop: '30px', textAlign: 'left' }}>Build,
          organize, and map your custom itineraries for road trips, powered by our trip planner AI. You can create a trip or see the offered trips based on your survey.
         </Typography>
        <div style={{ marginLeft: '85px', marginTop: '30px', display: 'flex', gap: '50px' }}>
          <Button variant="contained" startIcon={<IconClipboardPlus />}>
            Add Trip
          </Button>
          <Button variant="contained" startIcon={<IconViewfinder />}>
            View Offered Trips
          </Button>
        </div>
      </div>
      <div>
        <Carousel width={600} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={5000}
                  transitionTime={100}>
          <div>
            <img src={travelimg} alt="Travel Photo 1" width={500} height={500} />
          </div>
          <div>
            <img src={travelimg2} alt="Travel Photo 2"  width={500} height={500} />
          </div>
          <div>
            <img src={travelimg3} alt="Travel Photo 3"  width={500} height={500} />
          </div>
          <div>
            <img src={travelimg4} alt="Travel Photo 4"  width={500} height={500} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default IntroPage;
