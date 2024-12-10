'use client';

import { Box, Typography, Paper, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

const mockData = {
  1: { title: '번개모임 제목 1', location: '서울 은평구', date: '2024-12-03', description: '첫 번째 모임 설명', capacity: '10/20' },
  2: { title: '번개모임 제목 2', location: '서울 강남구', date: '2025-12-25', description: '두 번째 모임 설명', capacity: '5/15' },
  3: { title: '번개모임 겨울 캠프', location: '경기 남양주', date: '2024-12-01', description: '세 번째 모임 설명', capacity: '20/30' },
  4: { title: '겨울 번개', location: '인천 미추홀구', date: '2024-11-30', description: '번째 모임번째 모임번째 모임번째 모임번째 모임번째 모임번째 모임번째 모임번째 모임번째 모임번째 모임번째 모임번째 모임네 번째 모임 설명', capacity: '10/25' },
};

export default function DetailPage() {
  const { id } = useParams(); // URL 파라미터에서 id 가져오기
  const post = mockData[id]; // Mock 데이터로 가져옴
  if (!id || !mockData[id]) {
    return <Typography>해당 게시글을 찾을 수 없습니다.</Typography>;
  }
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleAddComment = () => {
    if (comment.trim()) {
      setComments((prev) => [...prev, comment]);
      setComment('');
    }
  };

  const router = useRouter();

  return (
    <Box sx={{ padding: '20px', maxWidth: '1000px', margin: '0 auto', paddingTop: '80px', width:"1000px" }}>
      <Paper sx={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="body1" sx={{ marginBottom: '10px' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
          {post?.title || '게시글을 찾을 수 없습니다.'}
        </Typography><br/>
          <strong>캠핑 장소 : </strong> {post?.location}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '10px' }}>
          <strong>일정 날짜 : </strong> {post?.date}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '10px' }}>
          <strong>정원 : </strong> {post?.capacity}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '10px' }}>
          <strong>내용 : </strong> {post?.description}
        </Typography>
      </Paper>

      <Paper sx={{ padding: '20px' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
          댓글
        </Typography>
        <h5>닉네임 : 
        <TextField
          fullWidth
          variant="outlined"
          placeholder="댓글을 입력하세요"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          sx={{ marginBottom: '10px' }}
        /></h5>
        <Button variant="contained"  onClick={handleAddComment}
        sx={{backgroundColor:'green'}}>
          댓글 작성
        </Button>
        <List>
          {comments.map((cmt, index) => (
            <ListItem key={index}>
              <ListItemText primary={cmt} />
            </ListItem>
          ))}
        </List>
      </Paper>
      <Button variant="outlined" sx={{ marginTop: '20px', borderColor:'green', color:'green' }} onClick={() => router.push('/MeetingGroup/lightning-Meeting')}>
        뒤로 가기
      </Button>
    </Box>
  );
}
