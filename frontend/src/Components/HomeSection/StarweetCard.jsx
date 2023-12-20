import React, { useState } from "react";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import BarChartIcon from "@mui/icons-material/BarChart";
import ReplyModal from "./ReplyModal";
import { createReStarweet, likeStarweet } from "../../Store/Starweet/Action";
import { FavoriteOutlined } from "@mui/icons-material";

const StarweetCard = ({ item }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [openReplyNodal, setOpenReplyModal] = useState(false);
  const handleOpenReplyModel = () => setOpenReplyModal(true);
  const handleCloseReplyModal = () => setOpenReplyModal(false);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteStarweet = () => {
    console.log("delete starweet");
    handleClose();
  };

  const handleCreateRestarweet = () => {
    dispatch(createReStarweet(item.id));
    console.log("handle create");
  };

  const handleLikestarweet = () => {
    dispatch(likeStarweet(item.id));
    console.log("handle like tweet");
  };
  return (
    <React.Fragment>
      {/* <div className="flex items-center font-semibold text-gray-700 py-2">
        <RepeatIcon />
        <p>You Retweet</p>
      </div> */}
      <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate(`profile/${6}`)}
          className="cursor-pointer"
          alt="username"
          src={item.image}
        />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className="font-semibold">{item.user.fullName}</span>
              <span className="text-gray-600">
                @{item.user.fullName.split(" ").join("_").toLowerCase()} · Nov 5
              </span>
              <img
                className="ml-2 w-5 h-5"
                src="https://img4.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202212/17/techplus/20221217160031072qlvq.png"
                alt=""
              />
            </div>
            <div>
              <Button
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem onClick={handleDeleteStarweet}>Delete</MenuItem>
                <MenuItem onClick={handleDeleteStarweet}>Edit</MenuItem>
              </Menu>
            </div>
          </div>

          <div className="mt-2">
            <div
              onClick={() => navigate(`/starweet/${3}`)}
              className="cursor-pointer"
            >
              <p className="mb-2 p-0">{item.content}</p>
              <img
                className="w-[28rem] border border-gray-400 p-5 rounded-md"
                src={item.image}
                alt=""
              />
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
              <div className="space-x-3 flex items-center text-gray-600">
                <ChatBubbleOutlineIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>{item.totalReplies}</p>
              </div>
              <div
                className={`${
                  item.restarweet ? "text-green-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                <RepeatIcon
                  onClick={handleCreateRestarweet}
                  className="cursor-pointer"
                />
                <p>{item.totalRestarweets}</p>
              </div>
              <div
                className={`${
                  item.liked ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                {item.liked ? (
                  <FavoriteOutlined
                    onClick={handleLikestarweet}
                    className="cursor-pointer"
                  />
                ) : (
                  <FavoriteIcon
                    onClick={handleLikestarweet}
                    className="cursor-pointer"
                  />
                )}
                <p>{item.totalLikes}</p>
              </div>
              <div className="space-x-3 flex items-center text-gray-600">
                <BarChartIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>141</p>
              </div>
              <div className="space-x-3 flex items-center text-gray-600">
                <FileUploadIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <ReplyModal
          item={item}
          open={openReplyNodal}
          handleClose={handleCloseReplyModal}
        />
      </section>
    </React.Fragment>
  );
};

export default StarweetCard;
