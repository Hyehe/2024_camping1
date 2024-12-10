"use client";
import { Box, Button } from "@mui/material";

export default function AnimatedButton() {
  return (
    <Button
      sx={{
        width: "200px",
        height: "60px",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#79c75f",
        "&:hover .icon": {
          animation: "move 1.5s infinite",
        },
      }}
    >
      <Box
        component="img"
        src="/images/bg-dark.jpg"
        alt="Icon"
        className="icon"
        sx={{
          width: "50px",
          height: "50px",
          position: "absolute",
          left: "0",
          top: "50%",
          transform: "translateY(-50%)",
          animation: "none", // 기본 애니메이션 없음
        }}
      />
      버튼 텍스트
      <style>
        {`
          @keyframes move {
            0% { transform: translateX(0) translateY(-50%); }
            50% { transform: translateX(100px) translateY(-50%); }
            100% { transform: translateX(0) translateY(-50%); }
          }

          @keyframes move {
  0% { transform: translateX(0) scale(1); }
  50% { transform: translateX(100px) scale(1.2); }
  100% { transform: translateX(0) scale(1); }
}
@keyframes move {
  0% { transform: translateX(0) rotate(0deg); }
  50% { transform: translateX(100px) rotate(180deg); }
  100% { transform: translateX(0) rotate(360deg); }
}

        `}
      </style>
    </Button>
  );
}
