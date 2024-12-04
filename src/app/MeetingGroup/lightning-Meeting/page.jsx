'use client';

import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function LightningMeetingPage() {
  const rows = [
    { no: 1, title: '번개모임 제목 1', author: '작성자1', date: '2024-12-03', likes: 5 },
    { no: 2, title: '번개모임 제목 2', author: '작성자2', date: '2024-12-02', likes: 3 },
  ];

  return (
    <Box sx={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        번개모임
      </Typography>
      {/* 검색 바 */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          marginBottom: '20px',
        }}
      >
        <Typography variant="body1">검색어를 입력하세요:</Typography>
        <input type="text" style={{ padding: '8px', width: '300px' }} />
      </Box>
      {/* 게시판 */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>제목</TableCell>
              <TableCell>글쓴이</TableCell>
              <TableCell>작성일</TableCell>
              <TableCell>좋아요</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.no}>
                <TableCell>{row.no}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.author}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.likes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
