import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress
                variant="determinate"
                style={{ color: 'white' }}
                size={60}
                {...props}
            />
            <Box
                sx={{

                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    border: '2px solid white',
                    width: '60px',
                    height: '60px',
                }}
            >
                <div style={{ color: 'white' }}>{`${Math.round(props.value)}%`}</div>
            </Box>
        </Box>
    );
}

export default function CircularWithValueLabel({ value }) {
    return <CircularProgressWithLabel value={value} />;
}
