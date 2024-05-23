import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";

const Comment = ({ comments, onAddComment }) => {
  const { currentUser } = useAuth();

  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return;
    onAddComment(newComment);
    setNewComment("");
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>
      <div>
        {comments.map((comment, index) => (
          <div key={index} className="mb-2">{comment}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment here..."
          required
          className="w-full px-3 py-2 bg-gray-100 border border-gray-300 "
        ></textarea>
        <button
          type="submit"
          className="w-full border-black border-2 border-solid px-3 py-2.5 mb-10 mr-3">
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default Comment;
