import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MyComponent from "../component/Table";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs({ header, tableData }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Container maxWidth="lg">
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Item One" {...a11yProps(0)} />
                            <Tab label="Item Two" {...a11yProps(1)} />
                            <Tab label="Item Three" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <Grid container spacing={2} style={{ marginBottom: '1rem' }}>
                            <Grid item xs={12} sm={9}>
                                <Box>
                                    <Typography variant="h7">Text 1 (20px)</Typography>
                                    <Typography variant="h7">Text 2 (10px)</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <TextField
                                        id="search"
                                        variant="outlined"
                                        fullWidth
                                        placeholder="Search" // Add a placeholder here
                                        InputProps={{
                                            startAdornment: (
                                                <SearchIcon style={{ marginRight: '8px' }} />
                                            ),
                                            style: { flex: 1 }, // Allow the text fields to take up the remaining space
                                        }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>

                        <MyComponent header={header} data={tableData} />

                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>

                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>

                    </CustomTabPanel>
                </Box>
            </Container>
        </Box>
    );
}