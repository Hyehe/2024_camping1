'use client';

import { Box, Grid, Paper, Typography } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: '20px',
        // paddingTop: '0px', // 헤더 높이만큼 여백
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
        }}
      />
      <Typography variant="h4" gutterBottom>
        함께해요
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        아래 버튼을 클릭해 다양한 모임에 참여하세요.
      </Typography>
      {/* 버튼 그룹 */}
      <Grid container spacing={5} justifyContent="center" sx={{ marginTop: '40px' }}>
        {/* 정규 모임 */}
        <Grid item>
          <Link href="/MeetingGroup/regular-Meeting" passHref style={{ textDecoration: 'none' }}>
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
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'background-color 0.3s',
                '&:hover': {
                  backgroundColor: '#FFE5B4',
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  color: 'inherit', // 기본 링크 색상 유지
                }}
              >
                정규 모임
              </Typography>
            </Paper>
          </Link>
        </Grid>
        {/* 번개 모임 */}
        <Grid item>
          <Link href="/MeetingGroup/lightning-Meeting" passHref style={{ textDecoration: 'none' }}>
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
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'background-color 0.3s',
                '&:hover': {
                  backgroundColor: '#FFE5B4',
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                번개 모임
              </Typography>
            </Paper>
          </Link>
        </Grid>
        {/* 내 모임 */}
        <Grid item>
          <Link href="/MeetingGroup/my-Meeting" passHref style={{ textDecoration: 'none' }}>
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
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'background-color 0.3s',
                '&:hover': {
                  backgroundColor: '#FFE5B4',
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                내 모임
              </Typography>
            </Paper>
          </Link>
        </Grid>
      </Grid>
    </Box>
  )}