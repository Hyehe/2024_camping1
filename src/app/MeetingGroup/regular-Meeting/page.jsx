'use client';

import { Box, Typography, TextField, IconButton, Chip, Grid, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { useState } from 'react';

const meetings = [
  {
    id: 1,
    region: '서울',
    title: '글램핑 겨울 크리스마스',
    date: '2024.12.22',
    location: '은평구',
    members: '25/50',
    image: '/images/photo-3.jpg',
  },
  {
    id: 2,
    region: '경기',
    title: '야영 캠프',
    date: '2024.12.09',
    location: '마포구',
    members: '14/21',
    image: '/images/tree-3.jpg',
  },
  {
    id: 3,
    region: '인천',
    title: '유앤캠',
    date: '2024.11.30',
    location: '마포구',
    members: '5/7',
    image: '/images/bg-dark.jpg',
  },
  {
    id: 4,
    region: '강원도',
    title: '2024 굿바이 캠핑',
    date: '2024.12.29',
    location: '구로구',
    members: '18/24',
    image: '/images/sims.gif',
  },
];

const regions = ['전체', '서울', '경기', '인천', '강원도', '부산', '광주', '대구', '대전', '울산', '충청도', '전라도'];

export default function RegularMeetingPage() {
  const [filteredRegion, setFilteredRegion] = useState('전체');

  // 지역 필터링 함수
  const filteredMeetings = filteredRegion === '전체'
    ? meetings
    : meetings.filter((meeting) => meeting.region === filteredRegion);

  // 상세 페이지로 이동 함수
  const goToDetailPage = (meetingId) => {
    window.location.href = `/meeting/${meetingId}`; // 상세 페이지 URL (예: /meeting/1)
  };

  return (
    <Box sx={{ padding: '20px', textAlign: 'center' }}>
      {/* 페이지 제목 */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
        정규모임
      </Typography>

      {/* 검색바 */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
          marginBottom: '20px',
        }}
      >
        <TextField
          variant="outlined"
          placeholder="검색어를 입력하세요"
          sx={{ width: '300px' }}
        />
        <IconButton color="primary" size="large">
          <SearchIcon />
        </IconButton>
      </Box>

      {/* 지역 필터 */}
      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
        {regions.map((region, idx) => (
          <Chip
            key={idx}
            label={region}
            clickable
            onClick={() => setFilteredRegion(region)} // 클릭 시 지역 상태 업데이트
            sx={{
              fontSize: '14px',
              padding: '10px',
              backgroundColor: filteredRegion === region ? '#FFE5B4' : '#F0F0F0',
              '&:hover': { backgroundColor: '#D9D9D9' },
            }}
          />
        ))}
      </Box>

      {/* 모임 카드 */}
      <Grid container spacing={3} justifyContent="center">
        {filteredMeetings.map((meeting) => (
          <Grid item key={meeting.id}>
            <Paper
              elevation={3}
              sx={{
                width: '350px',
                display: 'flex',
                alignItems: 'center',
                padding: '16px',
                backgroundColor: '#FFFAE6',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer', // 클릭 가능 표시
              }}
              onClick={() => goToDetailPage(meeting.id)} // 카드 클릭 시 상세 페이지 이동
            >
              {/* 모임 이미지 */}
              <Box
                component="img"
                src={meeting.image}
                alt={meeting.title}
                sx={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '8px',
                  objectFit: 'cover',
                  marginRight: '16px',
                }}
              />
              {/* 모임 설명 */}
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
                  {meeting.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {meeting.region} · {meeting.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {meeting.date}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                  인원: {meeting.members}
                  <AvatarGroup max={4} sx={{ marginLeft: '8px' }}>
                    <Avatar alt="User 1" src="/images/picture4.png" />
                    <Avatar alt="User 2" src="/images/picture3.png" />
                    <Avatar alt="User 3" src="/images/picture2.png" />
                    <Avatar alt="User 4" src="/images/picture1.png" />
                  </AvatarGroup>
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
