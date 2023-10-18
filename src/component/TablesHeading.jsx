import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';

const TableHeading = () => {
    return (
        <Box>
            <Container maxWidth="lg">
                <Grid container spacing={2} style={{ marginBottom: '1rem' }}>
                    <Grid item xs={12} sm={11}>
                        <Box>
                            <Typography variant="body1">
                                Movie Properties
                            </Typography>
                            <Typography className='detailsText'>
                                A list of details for this movie
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={1} sm={1}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <IconButton>
                                <StarIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>

    )
}

export default TableHeading;