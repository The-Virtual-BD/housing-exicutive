import ApplicationStats from "components/Charts/ApplicationStats";
import UserJoiningStats from "components/Charts/UserJoiningStats";
import MessageStats from "components/Dashboard/MessageStats";
import Overview from "components/Dashboard/Overview";
import SubdivisionStats from "components/Dashboard/SubdivisionStats";
import withAuth from "HOC/withAuth";
import React from "react";

function Dashboard() {
  return (
    <>
      <h3>Dashboard</h3>
      <Overview />
      <div className="row mt-3">
        <div className="col-12 col-lg-6">
          <ApplicationStats />
          <div className="my-3"></div>
          <UserJoiningStats />
        </div>
        <div className="col-12 col-lg-6">
          <MessageStats />
          <div className="my-3"></div>
          <SubdivisionStats />
        </div>
      </div>
    </>
  );
}

export default withAuth(Dashboard);
