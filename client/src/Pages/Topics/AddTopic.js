import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addTopic, editTopic, getTopic } from "../../JS/actions/TopicsList";
import { useHistory, useParams } from "react-router";

const AddTopic = () => {
  const [topic, setTopic] = useState({});
  const [edit, setEdit] = useState(false);
  const topicToEdit = useSelector((state) => state.TopicsListReducer.topic);
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    if (params.id) dispatch(getTopic(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    params.id ? setEdit(true) : setEdit(false);
    edit
      ? setTopic(topicToEdit)
      : setTopic({ ImgURL: "", Title: "", Description: "" });
  }, [edit, params.id, topicToEdit]);

  const handleChange = (e) =>
    setTopic({ ...topic, [e.target.name]: e.target.value });

  const handleTopic = () => {
    if (edit) {
      dispatch(editTopic(params.id, topic));
    } else {
      dispatch(addTopic(topic, history));
    }
    dispatch(addTopic());
    history.push("/topics");
  };
  return (
    <form>
      <h1 style={{ color: "wheat", marginTop: "3%" }}> Add Topic </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          margin: "auto",
        }}
      >
        <TextField
          style={{ marginTop: "5%" }}
          id="outlined-number"
          label="Title"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          name="Title"
          onChange={handleChange}
          value={topic.Title}
        />
        <TextField
          style={{ marginTop: "5%" }}
          id="outlined-number"
          label="Description"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          name="Description"
          onChange={handleChange}
          value={topic.Description}
        />{" "}
      </div>
      <Button onClick={handleTopic}> {edit ? "Edit" : "Save"} </Button>
    </form>
  );
};

export default AddTopic;
