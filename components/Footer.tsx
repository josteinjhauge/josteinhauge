import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box padding="2rem 0.5rem">
        <Typography
          variant="body1"
          fontSize="1.25rem"
          fontWeight="500"
          color="textPrimary"
          align="center"
        >
          © {new Date().getFullYear()} Jostein Hauge
        </Typography>
      </Box>
    );
};

export default Footer;