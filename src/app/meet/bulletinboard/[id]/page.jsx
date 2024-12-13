"use client";

import React, { useState } from "react";
import Detail from "../detail";

const initialPost = {
  id: 1,
  title: "게시글 제목",
  content: "게시글 내용입니다.",
  comments: [
    {
      id: 1,
      author: "익명",
      content: "안녕하세요!",
      createdAt: "방금 전",
      replies: [
        {
          id: 2,
          author: "답글 사용자",
          content: "네, 안녕하세요!",
          createdAt: "방금 전",
        },
      ],
    },
  ],
};

export default function BulletinDetailPage() {
  const [post, setPost] = useState(initialPost);

  // 댓글 삭제 함수
  const handleDeleteComment = (commentId) => {
    setPost((prev) => ({
      ...prev,
      comments: prev.comments.filter((comment) => comment.id !== commentId),
    }));
  };

  // 대댓글 삭제 함수
  const handleDeleteReply = (commentId, replyId) => {
    setPost((prev) => ({
      ...prev,
      comments: prev.comments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              replies: comment.replies.filter((reply) => reply.id !== replyId),
            }
          : comment
      ),
    }));
  };

  // 댓글 추가 함수
  const handleAddComment = (content) => {
    const newComment = {
      id: Date.now(),
      author: "익명",
      content,
      createdAt: "방금 전",
      replies: [],
    };
    setPost((prev) => ({
      ...prev,
      comments: [...prev.comments, newComment],
    }));
  };

  // 대댓글 추가 함수
  const handleAddReply = (commentId, content) => {
    setPost((prev) => ({
      ...prev,
      comments: prev.comments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              replies: [
                ...comment.replies,
                {
                  id: Date.now(),
                  author: "익명",
                  content,
                  createdAt: "방금 전",
                },
              ],
            }
          : comment
      ),
    }));
  };

  return (
    <Detail
      post={post}
      onAddComment={handleAddComment}
      onAddReply={handleAddReply}
      onDeleteComment={handleDeleteComment}
      onDeleteReply={handleDeleteReply} // 대댓글 삭제 함수 전달
    />
  );
}
