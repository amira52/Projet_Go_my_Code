import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { getAllTopics } from "../../JS/actions/TopicsList";
import TopicsCard from "../../Components/TopicsCard/TopicsCard";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

const TopicList = () => {
  const topics = useSelector((state) => state.TopicsListReducer.topics);
  const user = useSelector((state) => state.userReducer.user);
  const isLoad = useSelector((state) => state.TopicsListReducer.isLoad);
  const isError = useSelector((state) => state.TopicsListReducer.isError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTopics());
  }, [dispatch]);
  return (
    <div
      style={{
        marginTop: "2%",
        borderRadius: "5px",
        height: "100vh",
      }}
    >
      {user.role == "admin" ? (
        <Button>
          <Link
            to="/addTopic"
            style={{
              padding: "5px",
              backgroundColor: "darkBlue",
              margin: "auto",
              borderRadius: "5px",
              fontFamily: "arial",
              color: "white",
            }}
          >
            Add Topic
          </Link>
        </Button>
      ) : null}
      <div>
        {isLoad ? (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        ) : !topics.length ? (
          <p> No contact to show</p>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {topics.map((el) => (
              <TopicsCard topic={el} key={el._id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TopicList;
