import React from "react";

const CommentList = ({ comments }) => {
  let content;

  if (comments.status === "approved") {
    content = comments.content;
  } else if (comments.content === "pending") {
    content = "This comment is awaiting for moderation";
  } else if (comments.status === "rejected") {
    content = "This comment has been rejected";
  }

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
