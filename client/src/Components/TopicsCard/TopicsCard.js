import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import "./TopicsCard.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, CardActions, CardContent, CardMedia } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteTopict } from "../../JS/actions/TopicsList";
const TopicsCard = ({ topic }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);

  const handleDelete = () => {
    const result = window.confirm("confirm delete?");
    if (result) {
      dispatch(deleteTopict(topic._id));
    }
  };
  return (
    <>
      <div
        className="card"
        style={{
          backgroundColor: "aliceblue",
          margin: "5%",
          display: "flex",
          justifyContent: "spaceBetwwen",
          flexWrap: "wrap",
        }}
      >
        <Card style={{ width: "350px", height: "450px" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="https://i.ytimg.com/vi/IdO-PAJGVu4/sddefault.jpg"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ color: "darkblue" }}
            >
              {topic.Title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {topic.Description}
            </Typography>
            <CardActions style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  width: "100%",
                  marginLeft: "60%",
                  padding: "10px",
                }}
              >
                <Button>
                  <Link
                    to={
                      topic.Categories == "installation"
                        ? "/installation"
                        : topic.Categories == "course"
                        ? "/cours"
                        : "/tutorials"
                    }
                    style={{
                      backgroundColor: "rgb(235, 182, 35)",
                      borderRadius: "5px",
                      fontFamily: "revert",
                      color: "darkblue",
                    }}
                  >
                    See more
                  </Link>
                </Button>
              </div>
              <div
                style={{
                  width: "10%",
                  marginLeft: "78%",
                }}
              >
                {user.role == "admin" ? (
                  <div className="bnt-card">
                    <Link to={`/editTopic/${topic._id}`}>
                      <EditIcon />
                    </Link>
                    <DeleteIcon onClick={handleDelete} />
                  </div>
                ) : null}
              </div>
            </CardActions>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
export default TopicsCard;
