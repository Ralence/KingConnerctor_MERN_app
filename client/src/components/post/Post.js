import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import { getPost } from "../../actions/post";
import PostItem from "../posts/PostItem";
import CommentForm from "./CommentForm";

const Post = ({ match }) => {
  const dispatch = useDispatch();
  const { post, loading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPost(match.params.id));
  }, []);

  if (loading || post === null) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <Link to="/posts" className="btn">
        Back To Posts
      </Link>
      {post && <PostItem post={post} showActions={false} />}
      <CommentForm postId={post._id} />
    </Fragment>
  );
};

export default Post;
