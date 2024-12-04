'use client';

import { AppBar, Toolbar, Typography, Link, Box } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#FF914D', zIndex: 1201 }}>
      <Toolbar>
        {/* 로고 및 텍스트 */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Box
            component="img"
            src="/images/camping1.png" // 로고 이미지 경로
            alt="캠핑 로고"
            sx={{
              width: '40px',
              height: '40px',
              marginRight: '10px', // 텍스트와 간격
            }}
          />
          <Link href="/" color="inherit" underline="none" sx={{ marginRight: 2, fontWeight: 'bold' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            경빈 캠핑 모임
          </Typography>
            </Link>
        </Box>
        {/* 내비게이션 */}
        <Box>
          <Link href="/" color="inherit" underline="none" sx={{ marginRight: 2, fontWeight: 'bold' }}>
            홈
          </Link>
          <Link href="/MeetingGroup/regular-Meeting" color="inherit" underline="none" sx={{ marginRight: 2, fontWeight: 'bold' }}>
            정규모임
          </Link>
          <Link href="/MeetingGroup/lightning-Meeting" color="inherit" underline="none" sx={{ marginRight: 2, fontWeight: 'bold' }}>
            번개모임
          </Link>
          <Link href="/MeetingGroup/my-Meeting" color="inherit" underline="none" sx={{ fontWeight: 'bold' }}>
            내 모임
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
