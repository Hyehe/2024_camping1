'use client';

import { CssBaseline, Box } from '@mui/material';
import Header from './components/header';
import Footer from './components/footer';

export default function Layout({ children }) {
  return (
    <html lang="ko">
      <head />
      <body>
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
            width: '70%', // 화면 너비 80%로 설정 (좌우 여백 10%)
          }}
        >
          {children}
        </Box>
        {/* 푸터 */}
        <Footer />
        </body>
        </html>
  )}
