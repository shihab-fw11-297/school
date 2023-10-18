import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import BarGraph from './BarGraph'; // Import your BarGraph component
import Image from '../assets/thumbnail.png'; // Import your image here
import '../style/Detail.css'; // Import your CSS file
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Details = () => {
    return (
        <Box>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} sm={6}>
                        <Grid>
                            <img src={Image} alt="Your Image" className="image" />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={8} sm={6}>
                        <Paper className="bluePaper">
                            <div className="rightTextContainer">
                                <Typography variant="body1" >
                                    Movie Properties
                                </Typography>
                                <Typography className='detailsText'>
                                    A list of details for this movie
                                </Typography>
                            </div>
                            <BarGraph className="barGraph" /> {/* Use your BarGraph component here */}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Details;
