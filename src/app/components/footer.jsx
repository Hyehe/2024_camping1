'use client';

import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#FF914D',
        color: 'white',
        textAlign: 'center',
        padding: '10px 20px',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        boxShadow: '0px -4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="body2">© 2024 캠핑 페이지</Typography>
    </Box>
  );
}
