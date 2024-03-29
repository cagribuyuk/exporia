import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { AccountProfile } from './account-profile';
import { AccountProfileDetails } from './account-profile-details';
import DashboardCard from '../../components/shared/DashboardCard';
const Page = () => (
  <DashboardCard>
    <Box
      component="main"
      sx={{
        flexGrow: 2,
        py: 5
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <div>
            <Typography variant="h3">
              Profile Information

            </Typography>
          </div>
          <div>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
                lg={4}
              >
                <AccountProfile />
              </Grid>
              <Grid
                xs={12}
                md={6}
                lg={8}
              >
                <AccountProfileDetails />
              </Grid>
            </Grid>

          </div>
        </Stack>
      </Container>
    </Box>
  </DashboardCard>
);

export default Page;
