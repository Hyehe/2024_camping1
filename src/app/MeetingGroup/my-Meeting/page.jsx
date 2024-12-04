'use client';

import { Box, Typography } from '@mui/material';

export default function MyMeetingPage() {
  return (
    <Box sx={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        내 모임
      </Typography>
      <Typography variant="body1">
        여기에서 내가 참여 중인 모임들을 확인할 수 있습니다.
      </Typography>
    </Box>
  );
}
