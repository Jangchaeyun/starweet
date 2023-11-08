import React from "react";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import BarChartIcon from "@mui/icons-material/BarChart";

const StarweetCard = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
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

  const handleOpenReplyModel = () => {
    console.log("open model");
  };

  const handleCreateRestarweet = () => {
    console.log("handle create");
  };

  const handleLikestarweet = () => {
    console.log("handle like tweet");
  };
  return (
    <div className="">
      {/* <div className="flex items-center font-semibold text-gray-700 py-2">
        <RepeatIcon />
        <p>You Retweet</p>
      </div> */}
      <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate(`profile/${6}`)}
          className="cursor-pointer"
          alt="username"
          src="https://pbs.twimg.com/profile_images/1685848528021790720/ZAwTwIj4_400x400.png"
        />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className="font-semibold">DAY6</span>
              <span className="text-gray-600">@day6official · Nov 5</span>
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
            <div className="cursor-pointer">
              <p className="mb-2 p-0">
                [ #DAY6_BEHIND ]<br />
                Young K와 원필도 함께한 후배님들의 3일 차 콘서트🎵 <br />
                무대가 더욱 그리웠던 순간🥹 <br />
                데이식스도 곧 완전체로 돌아올게요🤟🏻
                <br /> #DAY6 #데이식스 #YoungK #원필 #WONPIL @XH_official
              </p>
              <img
                className="w-[28rem] border border-gray-400 p-5 rounded-md"
                src="https://pbs.twimg.com/media/F-K1Z69bAAApsHR?format=jpg&name=large"
                alt=""
              />
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
              <div className="space-x-3 flex items-center text-gray-600">
                <ChatBubbleOutlineIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>347</p>
              </div>
              <div
                className={`${
                  true ? "text-green-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                <RepeatIcon
                  onClick={handleCreateRestarweet}
                  className="cursor-pointer"
                />
                <p>9K</p>
              </div>
              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                {true ? (
                  <FavoriteIcon
                    onClick={handleLikestarweet}
                    className="cursor-pointer"
                  />
                ) : (
                  <FavoriteBorderIcon
                    onClick={handleLikestarweet}
                    className="cursor-pointer"
                  />
                )}
                <p>14K</p>
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
    </div>
  );
};

export default StarweetCard;
