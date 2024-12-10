// src/app/page.js
'use client';

import { Box, Typography, Link } from '@mui/material';

export default function Home() {
  return (
    <Box sx={{ textAlign: 'center', padding: '20px' }}>
      <Box
        component="img"
        src="/images/camping1.png"
        alt="배너"
        sx={{
          width: '100%',
          maxHeight: '300px',
          objectFit: 'cover',
          // backgroundImage: "url(/images/campingimg.webp)", // 배경 이미지
          backgroundSize: "cover", // 이미지 크기 조정
          backgroundPosition: "center", // 이미지 위치 중앙
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
