'use client';

import { CssBaseline, Box } from '@mui/material';
import Header from './components/header';
import Footer from './components/footer';
import { useState, useEffect } from 'react';
import './globals.css';
import LoadingScreen from './components/LoadingScreen';
import { useRouter } from 'next/navigation';


export default function Layout({ children }) {

  const router = useRouter(); // 현재 경로 가져오기
  const [isMeetingPage, setIsMeetingPage] = useState(false);

  useEffect(() => {
    if (router.pathname) {
      // router가 초기화된 후 경로를 확인
      setIsMeetingPage(router.pathname?.startsWith('/meeting'));
    }
  }, [router.pathname]); // 경로가 변경될 때마다 실행

  // 로컬 스토리지를 바로 확인하여 초기 상태를 설정
  const [isLoading, setIsLoading] = useState(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    return !hasVisited; // 방문기록이 없으면 로딩 화면을 보여준다.
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
          // margin: '0 auto', // 화면 중앙 정렬
          padding: '0', // 모든 방향에서 여백 제거
          // paddingTop: '0px', // 헤더 높이만큼 여백
          paddingBottom: '100px', // 푸터 높이만큼 여백
          width: isMeetingPage ? '100%' : '70%', // meeting 페이지에서는 100%, 그 외는 70%
          // width: '100%' 
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
