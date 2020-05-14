import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";

import { getCurrentProfile } from "../../actions/profile";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const {
    auth: { user },
    profile: { profile, loading },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, []);

  if (loading && profile === null) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet set up a profile, please add info!</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Dashboard;
