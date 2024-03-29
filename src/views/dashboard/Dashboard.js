import React from 'react';
import { Grid, Box } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
// components
import IntroPage from './components/IntroPage';
import ProductPerformance from './components/ProductPerformance';
import Blog from './components/Blog';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
          <Grid item xs={12} lg={8}>
            <IntroPage />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>
          <Grid item xs={12}>
            <Blog />
          </Grid>
      </Box>

    </PageContainer>
  );
};

export default Dashboard;
