'use client';

import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, IconButton, Fab } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

// rows 데이터를 컴포넌트 외부에 선언
const rows = [
  { no: 1, title: '번개모임 제목 1', author: '작성자1', date: '2024-12-03', counts: 5 },
  { no: 2, title: '번개모임 제목 2', author: '작성자2', date: '2025-12-25', counts: 3 },
  { no: 3, title: '번개모임 겨울 캠프', author: '작성자3', date: '2024-12-01', counts: 12 },
  { no: 4, title: '겨울 번개', author: '작성자4', date: '2024-11-30', counts: 8 },
];

export default function LightningMeetingPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRows, setFilteredRows] = useState(rows); // 초기값으로 모든 rows 표시
  const [selectedDate, setSelectedDate] = useState(''); // 선택된 날짜

  const handleSearch = () => {
    const lowerSearchTerm = searchTerm.toLowerCase();

    // 검색어를 제목, 글쓴이, 작성일에 대해 하나의 글자라도 포함되면 필터링
    const filtered = rows.filter(
      (row) =>
      (searchTerm && 
        (row.title.toLowerCase().includes(lowerSearchTerm) || // 제목 검색
        row.author.toLowerCase().includes(lowerSearchTerm) || // 글쓴이 검색
        row.date.includes(lowerSearchTerm))) || // 작성일 검색
        (selectedDate && row.date === selectedDate) // 날짜 검색
    );

    setFilteredRows(filtered);
  };

  return (
    <Box sx={{ textAlign: 'center', padding: '20px', paddingTop: '80px' }}>
      {/* 페이지 제목 */}
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
        <a href='/MeetingGroup/lightning-Meeting' style={{textDecoration:'none', color: 'inherit'}}>
          번개모임 &nbsp;
          </a>
          <Fab size="small" color="secondary" aria-label="add" href='/MeetingGroup/lightning-Meeting-Make'
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
        <TextField
          variant="outlined"
          placeholder="검색어를 입력하세요"
          sx={{ width: '300px' }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // 검색어 업데이트
        />
        <IconButton color="primary" size="large" onClick={handleSearch}>
          <SearchIcon sx={{color:"green"}}/>
        </IconButton>
      </Box>

         {/* 날짜 선택 */}
      <Box
        sx={{
          display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          gap: 1,
          marginBottom: '20px',
          width:'200px',
          float:'right'
        }}
      >
        <TextField
          type="date"
          variant="outlined"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)} // 날짜 업데이트
          sx={{ width: '300px' }}
        />
        <IconButton  
        color="primary" size="large" onClick={handleSearch}>
          <SearchIcon sx={{color:"green"}}/>
        </IconButton>
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
              <TableCell>조회수</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <TableRow key={row.no}>
                <TableCell>{row.no}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.author}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.counts}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
