import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  outline: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};

const features = [
  "Edit post, Longer posts, Undo post",
  "Post longer videos, Top Articles Reader",
  "Background video playback, Download videos, No Ads in For You and Following",
  "Largest reply boost, Get paid to post, Creator Subscriptions",
  "X Pro (web only), Media Studio (web only), Analytics (web only)",
];

export default function SubscriptionModal({ handleClose, open }) {
  const [plan, setPlan] = React.useState("Anunalluy");

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex items-center space-x-3">
            <IconButton onClick={handleClose} aria-label="delete">
              <CloseIcon />
            </IconButton>
          </div>
          <div className="flex justify-center py-10">
            <div className="w-[80%] space-y-10">
              <div className="p-5 rounded-md flex items-center justify-between bg-slate-400 shadow-lg">
                <h1 className="text-xl pr-5">
                  Verify your phone number to subscribe for Premium. It should
                  just take a few minutes.
                </h1>
                <img
                  className="w-24 h-24"
                  src="https://img4.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202212/17/techplus/20221217160031072qlvq.png"
                  alt=""
                />
              </div>

              <div className="flex justify-between border rounded-full px-5 py-3 border-gray-500">
                <div>
                  <span
                    onClick={() => setPlan("Anunalluy")}
                    className={`${
                      plan === "Anunalluy" ? "text-black" : "text-gray-400"
                    } cursor-pointer`}
                  >
                    Anunalluy
                  </span>
                  <span className="text-green-500 text-sm ml-5">SAVE 12%</span>
                </div>
                <p
                  onClick={() => setPlan("monthly")}
                  className={`${
                    plan === "monthly" ? "text-black" : "text-gray-400"
                  } cursor-pointer`}
                >
                  Monthly
                </p>
              </div>
              <div className="space-y-3">
                {features.map((item) => (
                  <div className="flex items-center space-x-5">
                    <FiberManualRecordIcon
                      sx={{ width: "7px", height: "7px" }}
                    />
                    <p className="text-xs">{item}</p>
                  </div>
                ))}
              </div>

              <div className="cursor-pointer flex justify-center bg-gray-900 text-white rounded-full px-5 py-3">
                <span className="line-through italic">￦249,600</span>
                <span className="px-5">￦218,000/year</span>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
