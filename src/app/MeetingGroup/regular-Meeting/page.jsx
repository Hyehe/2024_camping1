'use client';

import { Box, Typography, TextField, IconButton, Chip, Grid, Paper, Avatar, Fab } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AvatarGroup from '@mui/material/AvatarGroup';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AddIcon from '@mui/icons-material/Add';

const meetings = [
  {
    id: 1,
    region: '서울',
    title: '글램핑 겨울 크리스마스',
    date: '2024.12.22',
    location: '은평구',
    members: '25/50',
    image: '/images/photo-3.jpg',
    tags: ['#카라반', '#글램핑', '#산'],
  },
  {
    id: 2,
    region: '경기',
    title: '야영 캠프',
    date: '2024.12.09',
    location: '마포구',
    members: '14/21',
    image: '/images/tree-3.jpg',
    tags: ['#야영', '#바다', '#산'],
  },
  {
    id: 3,
    region: '인천',
    title: '유앤캠',
    date: '2024.11.30',
    location: '마포구',
    members: '5/7',
    image: '/images/bg-dark.jpg',
    tags: ['#오토캠핑', '#야영', '#카라반'],
  },
  {
    id: 4,
    region: '강원도',
    title: '2024 굿바이 캠핑',
    date: '2024.12.29',
    location: '구로구',
    members: '18/24',
    image: '/images/sims.gif',
    tags: ['#바다', '#글램핑', '#오토캠핑'],
  },
];

const regions = ['전체', '서울', '경기', '인천', '강원도', '부산', '광주', '수원', '용인', '고양', '창원', '대구', '대전', '울산', '충청도', '전라도'];
const tags = ['#카라반', '#글램핑', '#오토캠핑', '#산', '#바다', '#야영'];

export default function RegularMeetingPage() {
  const [filteredMeetings, setFilteredMeetings] = useState(meetings);
  const router = useRouter();

  const handleCardClick = (id) => {
    router.push(`/MeetingGroup/detail/${id}`);
  };

  const handleRegionFilter = (region) => {
    if (region === '전체') {
      setFilteredMeetings(meetings);
    } else {
      setFilteredMeetings(meetings.filter((meeting) => meeting.region === region));
    }
  };

  const handleTagFilter = (tag) => {
    setFilteredMeetings(meetings.filter((meeting) => meeting.tags.includes(tag)));
  };

  return (
    <Box sx={{ padding: '20px', textAlign: 'center', paddingTop: '80px' }}>
      {/* 페이지 제목 */}
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
          정규모임 &nbsp;  &nbsp;
          <Fab size="small" color="secondary" aria-label="add" href='/MeetingGroup/regular-Meeting-Make'>
            <AddIcon />
          </Fab>
        </Typography>
      </Box>

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
        <TextField variant="outlined" placeholder="검색어를 입력하세요" sx={{ width: '300px' }} />
        <IconButton color="primary" size="large">
          <SearchIcon />
        </IconButton>
      </Box>

      {/* 키워드 태그 */}
      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
        {tags.map((tag, idx) => (
          <Chip
            key={idx}
            label={tag}
            clickable
            onClick={() => handleTagFilter(tag)}
            sx={{
              fontSize: '14px',
              padding: '10px',
              backgroundColor: '#FFFAE6',
              '&:hover': { backgroundColor: '#FFE5B4' },
            }}
          />
        ))}
      </Box>

      {/* 지역 필터 */}
      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
        {regions.map((region, idx) => (
          <Chip
            key={idx}
            label={region}
            clickable
            onClick={() => handleRegionFilter(region)}
            sx={{
              fontSize: '14px',
              padding: '10px',
              backgroundColor: '#F0F0F0',
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
              onClick={() => handleCardClick(meeting.id)}
              sx={{
                cursor: 'pointer',
                width: '350px',
                height: '240px', // 높이를 통일
                display: 'flex',
                alignItems: 'center',
                padding: '16px',
                backgroundColor: '#FFFAE6',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  backgroundColor: '#FFE5B4',
                },
              }}
            >
              {/* 모임 이미지 */}
              <Box
                component="img"
                src={meeting.image}
                alt={meeting.title}
                sx={{
                  width: '130px',
                  height: '130px',
                  borderRadius: '8px',
                  objectFit: 'cover',
                  marginRight: '16px',
                  flexShrink: 0, // 이미지가 늘어나거나 줄어들지 않도록 설정
                }}
              />
              {/* 모임 설명 */}
              {/* <Box sx={{ width: '100%' }}> */}
              <Box
                sx={{
                  width: 'calc(100% - 136px)', // 이미지 크기 + margin을 제외한 너비 설정
                  overflow: 'hidden',
                }}
              >
                <Typography variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    whiteSpace: 'nowrap', // 텍스트가 한 줄에만 표시되도록 설정
                    overflow: 'hidden', // 텍스트가 넘치면 숨기기
                    textOverflow: 'ellipsis', // 넘친 텍스트에 "..." 표시
                  }}
                >
                  {meeting.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {meeting.region} · {meeting.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {meeting.date}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                  <Typography variant="body2" color="text.secondary" sx={{ marginRight: '8px' }}>
                    인원: {meeting.members}
                  </Typography>
                  <AvatarGroup max={4}>
                    <Avatar alt="User 1" src="/images/picture4.png" />
                    <Avatar alt="User 2" src="/images/picture3.png" />
                    <Avatar alt="User 3" src="/images/picture1.png" />
                    {/* <Avatar alt="User 4" src="/images/picture2.png" /> */}
                  </AvatarGroup>
                </Box>
                <Box sx={{ marginTop: '8px', display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {meeting.tags.map((tag, idx) => (
                    <Chip key={idx} label={tag} sx={{ backgroundColor: '#E3F2FD', fontSize: '12px' }} />
                  ))}
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
