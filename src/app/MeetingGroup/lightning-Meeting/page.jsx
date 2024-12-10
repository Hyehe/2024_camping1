'use client';

import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, IconButton, Fab, Link } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/navigation';

// rows 데이터를 컴포넌트 외부에 선언한다.
const rows = [
  { no: 1, title: '번개모임 제목 1', author: '작성자1', date: '2024-12-03', counts: 5, location: '서울 은평구', description: '첫 번째 모임 설명', capacity: '10/20' },
  { no: 2, title: '번개모임 제목 2', author: '작성자2', date: '2025-12-25', counts: 3, location: '서울 강남구', description: '두 번째 모임 설명', capacity: '5/15' },
  { no: 3, title: '번개모임 겨울 캠프', author: '작성자3', date: '2024-12-01', counts: 12, location: '경기 남양주', description: '세 번째 모임 설명', capacity: '20/30' },
  { no: 4, title: '겨울 번개', author: '작성자4', date: '2024-11-30', counts: 8, location: '인천 미추홀구', description: '네 번째 모임 설명', capacity: '10/25' },
];

export default function LightningMeetingPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRows, setFilteredRows] = useState(rows); // 초기값으로 모든 rows 표시
  const [selectedDate, setSelectedDate] = useState(''); // 선택된 날짜
  const router = useRouter();

  const handleSearch = () => {
    const lowerSearchTerm = searchTerm.toLowerCase();

    // 검색어 입력 조건
    const searchTermFilter = searchTerm
      ? (row) =>
        row.title.toLowerCase().includes(lowerSearchTerm) || // 제목 검색
        row.author.toLowerCase().includes(lowerSearchTerm)   // 글쓴이 검색
      : () => true; // 검색어가 없으면 모든 항목 통과

    // 날짜 선택 조건
    const dateFilter = selectedDate
      ? (row) => row.date === selectedDate // 날짜가 선택된 경우 해당 날짜만 필터링
      : () => true; // 날짜가 없으면 모든 항목 통과

    // 두 조건을 모두 만족하는 경우
    const filtered = rows.filter((row) => searchTermFilter(row) && dateFilter(row));

    setFilteredRows(filtered);
  };



  const handleTitleClick = (row) => {
    router.push(`/MeetingGroup/lightning-Meeting/detail/${row.no}`);
  };

  return (
    <Box sx={{ textAlign: 'center', padding: '20px', paddingTop: '80px' }}>
      {/* 페이지 제목 */}
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
          <a href='/MeetingGroup/lightning-Meeting' style={{ textDecoration: 'none', color: 'inherit' }}>
            번개모임 &nbsp;
          </a>
          <Fab size="small" color="secondary" aria-label="add" href='/MeetingGroup/lightning-Meeting-Make'
            style={{ backgroundColor: '#79c75f' }}>
            <AddIcon />
          </Fab>
        </Typography>
      </Box>
      <br />

      {/* 검색바 */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, marginBottom: '20px' }}>
        <TextField
          variant="outlined"
          placeholder="검색어를 입력하세요"
          sx={{ width: '300px' }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // 검색어 업데이트
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSearch(); // Enter키 눌러도 검색 가능
            }
          }}
        />
        <IconButton color="primary" size="large" onClick={handleSearch}>
          <SearchIcon sx={{ color: "green" }} />
        </IconButton>
      </Box>

      {/* 날짜 검색 */}
      <Box sx={{
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        gap: 1,
        marginBottom: '20px',
        width: '200px',
        float: 'right'
      }}>
        <TextField
          type="date"
          variant="outlined"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)} // 날짜 업데이트
        />
        <IconButton color="primary" size="large" onClick={handleSearch}>
          <SearchIcon sx={{ color: "green" }} />
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
              <TableCell>일정날짜</TableCell>
              <TableCell>조회수</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.length > 0 ? (
              filteredRows.map((row) => (
                <TableRow key={row.no} onClick={() => handleTitleClick(row)}>
                  <TableCell>{row.no}</TableCell>
                  <TableCell>
                    <Link
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleTitleClick(row);
                      }}
                      color="primary"
                      sx={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      {row.title}
                    </Link>
                  </TableCell>
                  <TableCell>{row.author}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.counts}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  검색 결과가 없습니다.
                </TableCell>
              </TableRow>
            )}
          </TableBody>

        </Table>
      </TableContainer>
    </Box>
  );
}
