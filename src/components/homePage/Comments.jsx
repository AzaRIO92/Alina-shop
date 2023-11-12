import React from "react";
import CheckCircleIcon from "./assets/Frame.svg";
import { IconButton, Rating, Stack } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const Comments = () => {
  return (
    <div style={{ margin: "7% 100px" }}>
      <div style={{display: "flex", justifyContent: 'space-between'}}>
        <h2 style={commentTitleStyle}>OUR HAPPY CUSTOMERS</h2>
        <div style={{margin: '2% 2% 0 0'}}>
          <IconButton>
            <KeyboardDoubleArrowLeftIcon/>
          </IconButton>
          <IconButton>
            <KeyboardDoubleArrowRightIcon/>
          </IconButton>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        {[1].map((index) => (
          <div key={index} style={commentFeedbackStyle}>
            <Stack spacing={1} margin='8px 0'>
        <Rating name="half-rating" defaultValue={0} precision={1} />
        </Stack>
            <div style={feedbackCommentStyle}>
              <h3 style={iconCheckTitleStyle}>Sarah M.</h3>
              <ul style={iconCheckListStyle}>
                <li style={iconCheckListStyle}>
                  <img src={CheckCircleIcon} alt="" />
                </li>
              </ul>
            </div>
            <div style={textCommentStyle}>
              <p>
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const commentTitleStyle = {
  color: "#000",
  fontFamily: "Integral CF",
  fontSize: "48px",
  fontWeight: 700,
  lineHeight: "normal",
};

const commentFeedbackStyle = {
  margin: "40px 20px 0px 20px",
  borderRadius: "20px",
  display: "flex",
  width: "400px",
  height: "300px",
  padding: "28px 32px",
  alignItems: "flex-start",
  alignContent: "flex-start",
  gap: "24px 342px",
  flexShrink: 0,
  flexWrap: "wrap",
  border: "1px solid rgba(0, 0, 0, 0.1)",
};

const feedbackCommentStyle = {
  display: "flex",
};

const iconCheckTitleStyle = {
  fontSize: "24px",
};

const textCommentStyle = {
  color: "rgba(0, 0, 0, 0.6)",
  fontFamily: "Satoshi",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "22px",
};

const iconCheckListStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0,
};

export default Comments;
