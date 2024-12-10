"use client";

import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import HikingIcon from "@mui/icons-material/Hiking"; // 정규 모임 아이콘
import FlashOnIcon from "@mui/icons-material/FlashOn"; // 번개 모임 아이콘

export default function MeetingMainPage() {
  return (
    <Box>
      {/* 배너 섹션 */}
      <Box
        sx={{
          position: "relative",
          width: "2700px", 
          height: "800px",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          //src="/images/navystar.gif" // 배너 이미지 경로
           src="/images/unsplash.jpg" // 배너 이미지 경로
          alt="배너 이미지"
          sx={{
            width: "100%",
            height: "100%",
            margin: '0', // 여백 제거
    padding: '0', // 패딩 제거
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            bgcolor: "rgba(0, 0, 0, 0.5)", // 텍스트 배경 반투명 처리
            padding: "20px",
            borderRadius: "8px",
          }}
        >
           <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            함께해요
          </Typography> 
          <Typography variant="h6" sx={{ marginTop: "10px" }}>
            아래 버튼을 클릭하여 다양한 모임에 참여하세요.
          </Typography>
        </Box>
      </Box>

      {/* 모임 선택 섹션 */}
      <Grid
        container
        spacing={4}
        sx={{
          padding: "40px",
          justifyContent: "center",
          textAlign: "center",
          margin: '0 auto', // 화면 중앙 정렬
        }}
      >
        {/* 정규 모임 */}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={4}
            sx={{
              padding: "20px",
              textAlign: "center",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <HikingIcon sx={{ fontSize: "60px", color: "#79c75f" }} />
            <Typography variant="h5" sx={{ margin: "20px 0" }}>
              정규 모임
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "20px" }}>
              다양한 정기 모임에 참여하고 새로운 사람들을 만나보세요.
            </Typography>
            <Button
              variant="contained"
              color="success"
              href="/MeetingGroup/regular-Meeting"
            >
              정규 모임 보기
            </Button>
          </Paper>
        </Grid>

        {/* 번개 모임 */}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={4}
            sx={{
              padding: "20px",
              textAlign: "center",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                //transform: "translateY(-50%)",
                //animation: "none", // 기본 애니메이션 없음
              },
            }}
          >
            <FlashOnIcon sx={{ fontSize: "60px", color: "#ffca28",height:'200px' }} />
            <Typography variant="h5" sx={{ margin: "20px 0" }}>
              번개 모임
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "20px" }}>
              즉흥적인 모임에 참여하며 다양한 경험을 쌓아보세요.
            </Typography>
            <Button
              variant="contained"
              color="warning"
              href="/MeetingGroup/lightning-Meeting"
              sx={{marginBottom:'60px'}}
            >
              번개 모임 보기
              {/* <style>
        {`
          @keyframes move {
            0% { transform: translateX(0) translateY(-50%); }
            50% { transform: translateX(100px) translateY(-50%); }
            100% { transform: translateX(0) translateY(-50%); }
          }
        `}
      </style> */}
            </Button>
            <Button
              variant="contained"
              color="warning"
              href="/MeetingGroup/my-Meeting"
              sx={{marginBottom:'60px'}}
            >
              번개 모임 보기
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
