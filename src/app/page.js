// src/app/page.js
'use client';

import { Box, Typography, Link } from '@mui/material';

export default function Home() {
  return (
    <Box sx={{ textAlign: 'center', padding: '20px' }}>
      <Box
        component="img"
        src="/images/car1.jpg"
        alt="배너"
        sx={{
          width: '100%',
          maxHeight: '300px',
          objectFit: 'cover',
          marginBottom: '20px',
        }}
      />
      <Typography variant="h4" gutterBottom>
        캠핑에 오신 것을 환영합니다!
      </Typography>
      <Typography variant="body1" gutterBottom>
        캠핑과 함께 다양한 모임에 참여해 보세요.
      </Typography>
      <Link
        href="/MeetingGroup/meeting"
        sx={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#FF914D',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          '&:hover': {
            backgroundColor: '#FFB04A',
          },
        }}
      >
        함께해요
      </Link>
    </Box>
  );
}
