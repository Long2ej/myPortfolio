import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';



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
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', textAlign: 'center' }}>
            <Box
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example">
                    <Tab
                        className='tab '
                        label="Technical Skills"
                        {...a11yProps(0)}

                    />
                    <Tab
                        label="Soft Skills"
                        {...a11yProps(0)}
                        className='tab'
                    />
                </Tabs>
            </Box>


            <CustomTabPanel value={value} index={0}>
                <div className='skills-container'>


                    <div className='skills-box'>
                        <FontAwesomeIcon icon={faSquareJs} size="4x" />
                        <h1 className='JS'>JavaScript</h1>
                    </div>

                    <div className='skills-box'>
                        <FontAwesomeIcon icon={faReact} size="4x" />
                        <h1 className='React'>React</h1>
                    </div>

                    <div className='skills-box'>
                        <FontAwesomeIcon icon={faReact} size="4x" />
                        <h1 className='React'>React</h1>
                    </div>








                </div>

            </CustomTabPanel>


        </Box>

    );
}


