'use client';

import { Box, Typography, TextField, IconButton, Chip, Grid, Paper, Avatar, Fab } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AvatarGroup from '@mui/material/AvatarGroup';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
  {
    id: 5,
    region: '서울',
    title: '2025 하이바이 캠핑',
    date: '2024.12.29',
    location: '마포구',
    members: '17/24',
    image: '/images/yellowsb.gif',
    tags: ['#바다', '#야영', '#자연'],
  },
  {
    id: 6,
    region: '경기',
    title: '노는게 제일 좋아',
    date: '2024.02.29',
    location: '강서구',
    members: '10/35',
    image: '/images/tree-2.jpg',
    tags: ['#산', '#글램핑', '#오토캠핑'],
  },
];

const regions = ['전체', '서울', '경기', '인천', '강원도', '부산', '광주', '수원', '용인', '고양', '창원', '대구', '대전', '울산', '충청도', '전라도'];
const tags = ['#카라반', '#글램핑', '#야영', '#산', '#바다',
  '#오토캠핑', '#자연', '#캠프파이어', '#별 관찰', '#텐트',
  '#캠핑 장비', '#팀워크', '#소통', '#즐거운 추억', '#자연 보호',
  '#힐링', '#맛있는 음식', '#트레킹', '#낚시', '#자전거 타기',
  '#하이킹', '#스모어', '#캠핑 요리', '#자연 탐험', '#야외 게임',
  '#일출', '#일몰', '#야생동물 관찰 ', '#사진', '#물놀이',
  '#친목', '#산책', '#명상', '#휴식', '#오프그리드 생활',];

export default function RegularMeetingPage() {
  const [filteredMeetings, setFilteredMeetings] = useState(meetings);
  const [searchTerm, setSearchTerm] = useState('');
  const [tagPage, setTagPage] = useState(0);
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

  const handleSearch = () => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    setFilteredMeetings(
      meetings.filter(
        (meeting) =>
          meeting.region.toLowerCase().includes(lowerSearchTerm) ||
          meeting.title.toLowerCase().includes(lowerSearchTerm) ||
          meeting.date.includes(lowerSearchTerm) ||
          meeting.location.toLowerCase().includes(lowerSearchTerm) ||
          meeting.tags.some((tag) => tag.toLowerCase().includes(lowerSearchTerm))
      )
    );
  };

  const handleTagPagination = (direction) => {
    setTagPage((prevPage) => {
      // 태그 갯수를 기준으로 총 페이지 수 계산
      const totalPages = Math.ceil(tags.length / 7); // 7개씩 표시하므로 총 페이지 수는 태그 길이 / 7

      if (direction === 'next') {
        // 마지막 페이지에서 오른쪽 화살표 클릭 시 첫 페이지로 돌아가도록 설정
        return prevPage === totalPages - 1 ? 0 : prevPage + 1; // 현재 마지막 페이지면 첫 페이지로, 아니면 다음 페이지로
      } else {
        // 첫 페이지에서 왼쪽 화살표 클릭 시 마지막 페이지로 돌아가도록 설정
        return prevPage === 0 ? totalPages - 1 : prevPage - 1; // 현재 첫 페이지면 마지막 페이지로, 아니면 이전 페이지로
      }
    });
  };


  const visibleTags = tags.slice(tagPage * 7, (tagPage + 1) * 7);

  return (
    <Box sx={{ padding: '20px', textAlign: 'center', paddingTop: '80px' }}>
      {/* 페이지 제목 */}
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
          정규모임 &nbsp; 
          <Fab size="small" color="secondary" aria-label="add" href='/MeetingGroup/regular-Meeting-Make'
            style={{ backgroundColor: '#79c75f' }}>
            <AddIcon />
          </Fab>
        </Typography>
      </Box>
      <br/>
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
        <TextField variant="outlined" placeholder="검색어를 입력하세요" sx={{ width: '300px' }}
          value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <IconButton color="primary" size="large" onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
      </Box>
      <br/>
      {/* 키워드 태그 */}
      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', marginBottom: '20px', flexWrap: 'nowrap' }}>
        <IconButton onClick={() => handleTagPagination('prev')} disabled={tagPage === 0} sx={{ alignSelf: 'center' }}>
          <ArrowBackIosIcon />
        </IconButton>
        {visibleTags.map((tag, idx) => (
          <Chip
            key={idx}
            label={tag}
            clickable
            onClick={() => handleTagFilter(tag)}
            sx={{
              fontSize: '14px',
              padding: '10px',
              backgroundColor: '#f2faeb',
              '&:hover': { backgroundColor: '#d7f0c2' },
              whiteSpace: 'nowrap', // 텍스트가 한 줄로만 표시되도록 설정
            }}
          />
        ))}

        <IconButton onClick={() => handleTagPagination('next')} disabled={(tagPage + 1) * 7 >= tags.length} sx={{ alignSelf: 'center' }}>
          <ArrowForwardIosIcon sx={{ fontSize: '24px' }} />
        </IconButton>

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
      <br/>
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
                backgroundColor: '#f2faeb',
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
                    <Chip key={idx} label={tag} sx={{ backgroundColor: '#d7f0c2', fontSize: '12px' }} />
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
