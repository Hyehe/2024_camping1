'use client';

import { CssBaseline, Box } from '@mui/material';
import Header from './components/header';
import Footer from './components/footer';

import { useState, useEffect } from 'react';
import './globals.css';
import LoadingScreen from './components/LoadingScreen';


export default function Layout({ children }) {
  // 로컬 스토리지를 바로 확인하여 초기 상태를 설정
  const [isLoading, setIsLoading] = useState(()=>{
    // 'hasVisited' 키를 로컬 스토리지에서 확인
    const hasVisited = localStorage.getItem('hasVisited');
    return !hasVisited; // 방문기록이 없으면 효과 스크린을 보여준다.
  });

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem('hasVisited', 'true'); // 방문 기록 저장
      }, 3000); // 로딩 화면 3초 후 사라짐

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

return (
  <html lang="ko">
    <head />
    <body>
    {isLoading ? <LoadingScreen /> : ""}
      <CssBaseline />
      {/* 헤더 */}
      <Header />
      {/* 메인 컨텐츠 */}
      <Box
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          margin: '0 auto', // 화면 중앙 정렬
          // paddingTop: '0px', // 헤더 높이만큼 여백
          paddingBottom: '60px', // 푸터 높이만큼 여백
          width: '70%', // 화면 너비 70%로 설정 (좌우 여백 15%)
        }}
      >
        {children}
      </Box>
      {/* 푸터 */}
      <Footer />
    </body>
  </html>
)
}
