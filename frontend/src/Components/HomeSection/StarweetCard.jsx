import React from "react";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

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
          src="https://file3.instiz.net/data/cached_img/upload/2019/08/02/2/cbb5df1bafd0642bee1ce64289520108.jpg"
        />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className="font-semibold">EVERYDAY6</span>
              <span className="text-gray-600">@everyday6 · 2m</span>
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
              <p>아니 둘 다 얼굴 미쳤네;;;</p>
              <img
                className="w-[28rem] border border-gray-400 p-5 rounded-md"
                src="https://pbs.twimg.com/media/F-UgqEubwAAhbVR?format=jpg&name=900x900"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarweetCard;
