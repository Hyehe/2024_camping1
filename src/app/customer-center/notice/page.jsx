"use client";

import React from "react";
import { Box, Typography } from "@mui/material";

export default function NoticePage() {
  const notices = [
    { id: 1, title: "캠핑장 관련 공지사항", writer: "관리자", date: "2024-12-01" },
    { id: 2, title: "공지사항 테스트", writer: "관리자", date: "2024-11-30" },
  ];

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        공지사항
      </Typography>
      <Box>
        {notices.map((notice) => (
          <Box
            key={notice.id}
            sx={{
              mb: 2,
              p: 2,
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold">
              {notice.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {notice.writer} - {notice.date}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
