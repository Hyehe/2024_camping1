'use client';

import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Avatar,
} from '@mui/material';
import { useState } from 'react';

// 해시태그와 지역 리스트
const hashtags = [
  '#카라반', '#글램핑', '#야영', '#산', '#바다',
  '#오토캠핑', '#키워드1', '#키워드2', '#키워드3',
  '#키워드4', '#키워드5', '#키워드6', '#키워드7', '#키워드8',
  '#키워드9', '#키워드10', '#키워드11', '#키워드12', '#키워드13',
  '#키워드14', '#키워드15', '#키워드16', '#키워드17', '#키워드18',
];
const regions = ['서울', '경기', '인천', '강원도', '부산', '광주', '수원', '용인', '고양', '창원', '대구', '대전', '울산', '충청도', '전라도', '기타'];

export default function CreateMeetingPage() {
  const [selectedHashtags, setSelectedHashtags] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedSubRegion, setSelectedSubRegion] = useState('');
  const [otherRegion, setOtherRegion] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleHashtagClick = (hashtag) => {
    if (selectedHashtags.includes(hashtag)) {
      setSelectedHashtags(selectedHashtags.filter((tag) => tag !== hashtag));
    } else if (selectedHashtags.length < 3) {
      setSelectedHashtags([...selectedHashtags, hashtag]);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // 미리보기 URL 생성
    }
  };

  const handleSubmit = () => {
    // 모임 작성 로직
    console.log('모임 작성 완료');
  };

  return (
    <Box sx={{ padding: '20px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
      {/* 제목 */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
        정규 모임 만들기
      </Typography>

      {/* 모임 제목 */}
      <TextField
        fullWidth
        label="모임 제목"
        variant="outlined"
        sx={{ marginBottom: '20px' }}
      />

       {/* 모임 프로필 사진 */}
       <Box sx={{ marginBottom: '20px', textAlign: 'left' }}>
        <Button
          variant="contained"
          component="label"
        >
          프로필 사진 선택
          <input type="file" hidden accept="image/*" onChange={handleImageChange} />
        </Button>
        {selectedImage && (
          <Box sx={{ marginTop: '10px' }}>
            <Typography variant="body2" sx={{ marginBottom: '5px' }}>미리보기:</Typography>
            <Avatar
              src={selectedImage}
              alt="Selected Profile"
              sx={{ width: '100px', height: '100px', borderRadius: '8px' }}
            />
          </Box>
        )}
      </Box>

      {/* 해시태그 */}
      <Typography variant="h6" sx={{ marginBottom: '10px' }}>
        관련된 해시태그 선택 (최대 3개)
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center', marginBottom: '20px' }}>
        {hashtags.map((tag, idx) => (
          <Chip
            key={idx}
            label={tag}
            clickable
            onClick={() => handleHashtagClick(tag)}
            sx={{
              backgroundColor: selectedHashtags.includes(tag) ? '#FFB04A' : '#E0E0E0',
              color: selectedHashtags.includes(tag) ? 'white' : 'black',
            }}
          />
        ))}
      </Box>

      {/* 지역 선택 */}
      <Typography variant="h6" sx={{ marginBottom: '10px' }}>
        지역 선택
      </Typography>
      <FormControl fullWidth sx={{ marginBottom: '20px' }}>
        <InputLabel>지역</InputLabel>
        <Select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
        >
          {regions.map((region, idx) => (
            <MenuItem key={idx} value={region}>
              {region}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* 상세 지역 선택 */}
      {selectedRegion !== '기타' && (
        <TextField
          fullWidth
          label="구 작성 (예: 강남구)"
          variant="outlined"
          value={selectedSubRegion}
          onChange={(e) => setSelectedSubRegion(e.target.value)}
          sx={{ marginBottom: '20px' }}
        />
      )}
      {selectedRegion === '기타' && (
        <TextField
          fullWidth
          label="기타 지역 입력 (시.도.구)"
          variant="outlined"
          value={otherRegion}
          onChange={(e) => setOtherRegion(e.target.value)}
          sx={{ marginBottom: '20px' }}
        />
      )}

      {/* 모임 내용 */}
      <TextField
        fullWidth
        label="모임 내용"
        multiline
        rows={4}
        variant="outlined"
        sx={{ marginBottom: '20px' }}
      />

      {/* 정원 */}
      <TextField
        fullWidth
        label="정원 (숫자만 입력)"
        variant="outlined"
        type="number"
        sx={{ marginBottom: '20px' }}
      />

      {/* 버튼 */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          작성
        </Button>
        <Button variant="outlined" color="secondary" href="/MeetingGroup/regular-Meeting">
          취소
        </Button>
      </Box>
    </Box>
  );
}
