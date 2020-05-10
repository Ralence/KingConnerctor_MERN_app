import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCurrentProfile } from "../../actions/profile";

const Dashboard = () => {
  const { auth, profile } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, []);

  return <div>DAshboard</div>;
};

export default Dashboard;
