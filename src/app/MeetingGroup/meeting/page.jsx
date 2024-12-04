'use client';

import { Box, Grid, Paper, Typography } from '@mui/material';

export default function MeetingPage() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: '20px',
        paddingTop: '80px', // 헤더 높이만큼 여백
        paddingBottom: '60px', // 푸터 높이만큼 여백
      }}
    >
      {/* 배너 이미지 */}
      <Box
        component="img"
        src="/images/yellowsb.gif"
        alt="배너"
        sx={{
          width: '100%',
          maxHeight: '300px',
          objectFit: 'cover',
          marginBottom: '20px',
          height:'100%'
        }}
      />
      {/* 모임 버튼들 */}
      <Grid container spacing={12} justifyContent="center" sx={{ marginTop: '40px' }}>
        {/* 정규 모임 */}
        <Grid item>
          <Paper
            elevation={3}
            sx={{
              backgroundColor: '#FFFAE6',
              borderRadius: '10px',
              height: '300px',
              width: '230px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
              transition: 'background-color 0.3s',
              '&:hover': {
                backgroundColor: '#FFE5B4',
              },
            }}
          >
            <Typography variant="h5">정규 모임</Typography>
          </Paper>
        </Grid>
        {/* 번개 모임 */}
        <Grid item>
          <Paper
            elevation={3}
            sx={{
              backgroundColor: '#FFFAE6',
              borderRadius: '10px',
              height: '300px',
              width: '230px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
              transition: 'background-color 0.3s',
              '&:hover': {
                backgroundColor: '#FFE5B4',
              },
            }}
          >
            <Typography variant="h5">번개 모임</Typography>
          </Paper>
        </Grid>
        {/* 내 모임 */}
        <Grid item>
          <Paper
            elevation={3}
            sx={{
              backgroundColor: '#FFFAE6',
              borderRadius: '10px',
              height: '300px',
              width: '230px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0px 4px 6px rgba(051, 051, 000, 0.3)',
              transition: 'background-color 0.3s',
              '&:hover': {
                backgroundColor: '#FFE5B4',
              },
            }}
          >
            <Typography variant="h5">내 모임</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
