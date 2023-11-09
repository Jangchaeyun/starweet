import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";

const RightPart = () => {
  const handleChangeTheme = () => {
    console.log("handle change theme");
  };
  return (
    <div className="py-5 sticky top">
      <div className="relative flex items-center">
        <input
          type="text"
          className="py-3 rounded-full text-gray-500 w-full pl-12"
        />
        <div className="absolute top-0 left-0 pl-3 pt-3">
          <SearchIcon className="text-gray-500" />
        </div>
        <Brightness6Icon
          className="ml-3 cursor-pointer"
          onClick={handleChangeTheme}
        />
      </div>
      <section className="my-5">
        <h1 className="text-xl font-bold">Subscribe to Premium</h1>
        <h1 className="font-bold my-2">
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </h1>
        <Button
          variant="contained"
          sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px" }}
        >
          Subscribe
        </Button>
      </section>
      <section className="mt-7 space-y-5">
        <h1 className="font-bold text-xl py-1">Trends for you</h1>
        <div>
          <p className="font-bold">#우리마음_빼빼로로_말해요</p>
          <p className="text-sm">✨ Say Hello with PEPERO ✨</p>
        </div>
        {[1, 1, 1].map((item) => (
          <div className="flex justify-between w-full">
            <div>
              <p>Trending</p>
              <p className="font-bold">KISS OF LIFE</p>
              <p>30.7K posts</p>
            </div>
            <MoreHorizIcon />
          </div>
        ))}
      </section>
    </div>
  );
};

export default RightPart;
