import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { SaveAlt as SaveAltIcon } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Heading = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Grid container spacing={2} justifyContent="space-between" alignItems="center">
            <Grid item xs={12} sm={8} md={10}>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  fontFamily: 'Helvetica Neue, sans-serif',
                  fontWeight: 700,
                  color: 'inherit',
                  textDecoration: 'none',
                  fontSize: 25,
                }}
              >
                Avengers Black Widow
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
              <Button
                variant="contained"
                sx={{
                  background: 'white',
                  color: 'black',
                  textTransform:'capitalize',
                  boxShadow: 'none',
                  border: '1px solid black',
                }}
                startIcon={<SaveAltIcon />}
              >
                Export
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </Box>
  );
};

export default Heading;
