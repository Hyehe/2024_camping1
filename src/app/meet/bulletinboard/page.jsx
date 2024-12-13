"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Card,
  IconButton,
  TextField,
  Button,
  Modal,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

// Swiper 최신 버전 설정
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BulletinBoard() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "캠핑 즐기기 팁",
      content: "캠핑에서 유용한 팁들을 공유합니다. 즐거운 캠핑 되세요!",
      category: "자유",
      author: "캠퍼",
      date: "2024-12-11",
      likes: 6,
      liked: false,
      comments: [{ id: 1, author: "유저1", content: "좋은 정보 감사합니다!" }],
      images: ["/images/sample1.jpg", "/images/sample2.jpg"],
      authorAvatar: "/images/avatar1.jpg",
    },
  ]);

  const [postModalOpen, setPostModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostCategory, setNewPostCategory] = useState("자유");
  const [selectedPost, setSelectedPost] = useState(null);
  const [newComment, setNewComment] = useState("");

  const handleLikeToggle = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? { ...post, liked: !post.liked, likes: post.likes + (post.liked ? -1 : 1) }
          : post
      )
    );
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setPosts((prev) =>
        prev.map((post) =>
          post.id === selectedPost.id
            ? {
                ...post,
                comments: [
                  ...post.comments,
                  { id: Date.now(), author: "익명", content: newComment },
                ],
              }
            : post
        )
      );
      setNewComment("");
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const images = files.map((file) => URL.createObjectURL(file));
    setSelectedImages([...selectedImages, ...images]);
  };

  const handleNewPost = () => {
    if (selectedImages.length) {
      const newPost = {
        id: posts.length + 1,
        title: newPostTitle,
        content: newPostContent,
        category: newPostCategory,
        author: "새로운 유저",
        date: new Date().toISOString().split("T")[0],
        likes: 0,
        liked: false,
        comments: [],
        images: selectedImages,
        authorAvatar: "/images/avatar1.jpg",
      };
      setPosts([newPost, ...posts]);
      setPostModalOpen(false);
      setSelectedImages([]);
      setNewPostTitle("");
      setNewPostContent("");
      setNewPostCategory("자유");
    }
  };

  return (
    <Box sx={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      {/* 게시물 리스트 */}
      {posts.map((post) => (
        <Card key={post.id} sx={{ marginBottom: "20px", borderRadius: "8px" }}>
          <Box sx={{ display: "flex", alignItems: "center", padding: "10px" }}>
            <Avatar src={post.authorAvatar} alt={post.author} sx={{ marginRight: "10px" }} />
            <Box>
              <Typography variant="subtitle2" fontWeight="bold">
                {post.author}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {post.date}
              </Typography>
            </Box>
          </Box>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            style={{ width: "100%", height: "400px" }}
          >
            {post.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Box sx={{ padding: "10px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <IconButton onClick={() => handleLikeToggle(post.id)}>
                {post.liked ? <FavoriteIcon sx={{ color: "red" }} /> : <FavoriteBorderIcon />}
              </IconButton>
              <IconButton onClick={() => setSelectedPost(post)}>
                <ChatBubbleOutlineIcon />
              </IconButton>
            </Box>
            <Typography variant="body2" sx={{ marginTop: "5px" }}>
              좋아요 {post.likes}개 · 댓글 {post.comments.length}개
            </Typography>
            <Typography variant="body2" sx={{ marginTop: "10px", fontWeight: "bold" }}>
              {post.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ marginTop: "5px" }}>
              {post.content}
            </Typography>
          </Box>
        </Card>
      ))}

      {/* 게시물 작성 모달 */}
      <Modal open={postModalOpen} onClose={() => setPostModalOpen(false)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "80%",
            height: "80%",
            backgroundColor: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <Box sx={{ flex: 2, overflow: "auto", display: "flex", flexDirection: "column" }}>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              style={{ width: "100%", height: "400px" }}
            >
              {selectedImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Selected ${index}`}
                    style={{ width: "100%", height: "400px", objectFit: "cover" }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Button
              variant="outlined"
              startIcon={<AddPhotoAlternateIcon />}
              sx={{ marginTop: "20px", alignSelf: "center" }}
              onClick={() => document.getElementById("fileInput").click()}
            >
              사진 추가
            </Button>
          </Box>

          <Box sx={{ flex: 1, padding: "20px" }}>
            <TextField
              fullWidth
              placeholder="제목 입력"
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
              sx={{ marginBottom: "20px" }}
            />
            <TextField
              fullWidth
              multiline
              rows={4}
              placeholder="내용 입력"
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              sx={{ marginBottom: "20px" }}
            />
            <FormControl fullWidth>
              <Select
                value={newPostCategory}
                onChange={(e) => setNewPostCategory(e.target.value)}
                displayEmpty
              >
                <MenuItem value="자유">자유</MenuItem>
                <MenuItem value="공지">공지</MenuItem>
                <MenuItem value="인사">인사</MenuItem>
              </Select>
            </FormControl>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleNewPost}
              sx={{ marginTop: "20px" }}
            >
              게시물 생성
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* 새 게시물 버튼 */}
      <IconButton
        onClick={() => setPostModalOpen(true)}
        sx={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#4caf50",
          color: "white",
        }}
      >
        <AddCircleIcon />
      </IconButton>
      <input
        type="file"
        accept="image/*"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleFileChange}
        multiple
      />

      
    </Box>
  );
}
