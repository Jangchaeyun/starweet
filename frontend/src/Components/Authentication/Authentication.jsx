import { Grid } from "@mui/material";
import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const Authentication = () => {
  return (
    <div>
      <Grid className="overflow-y-hidden" container>
        <Grid className="hidden lg:block" item lg={7}>
          <img
            src="https://i.redd.it/5xirqoi1mpy61.png"
            className="w-full h-screen"
            alt=""
          />
          <div className="absolute top-[26%] left-[19%]">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="300"
              height="300"
              viewBox="0 0 1280.000000 1280.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <metadata>
                Created by potrace 1.15, written by Peter Selinger 2001-2017
              </metadata>
              <g
                transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M8599 11975 c-1067 -87 -1965 -463 -2613 -1095 -449 -438 -667 -895
-692 -1450 -21 -448 142 -946 468 -1434 221 -329 321 -440 1198 -1321 774
-778 878 -887 1024 -1084 206 -278 361 -606 428 -907 19 -87 22 -129 22 -339
1 -211 -2 -254 -22 -352 -80 -397 -280 -744 -619 -1074 -283 -276 -598 -488
-966 -649 -427 -187 -883 -282 -1427 -297 -623 -16 -1078 88 -1454 334 -106
69 -291 260 -345 356 -100 178 -135 361 -113 601 37 414 226 717 602 970 100
68 345 190 480 239 470 174 1077 267 1835 284 181 3 298 10 312 17 12 6 46 42
77 79 63 77 65 88 46 236 -11 85 -18 94 -104 151 l-62 40 -410 0 c-904 0
-1590 -72 -2229 -235 -855 -217 -1436 -589 -1693 -1083 -250 -482 -221 -1084
74 -1519 350 -515 1064 -869 1969 -977 380 -45 737 -56 1075 -31 556 41 976
120 1445 272 863 280 1666 818 2138 1431 396 514 611 1114 582 1622 -33 582
-253 1111 -677 1632 -95 117 -172 196 -1104 1143 -590 600 -675 689 -818 860
-258 307 -413 562 -500 825 -53 160 -69 269 -69 460 0 196 21 316 84 477 218
557 878 1050 1598 1192 400 79 904 69 1187 -25 243 -80 424 -217 507 -383 50
-100 60 -161 54 -321 -6 -155 -28 -234 -99 -355 -52 -87 -179 -215 -278 -280
-333 -217 -764 -325 -1376 -344 -165 -5 -226 -10 -238 -20 -9 -8 -37 -41 -61
-73 l-45 -60 0 -109 c0 -124 -2 -121 103 -193 49 -33 59 -36 182 -48 196 -19
723 -16 910 5 597 70 1046 217 1424 467 238 157 401 321 514 515 193 333 193
786 1 1106 -237 395 -726 650 -1404 734 -183 23 -696 29 -921 10z"
                />
              </g>
            </svg>
          </div>
        </Grid>
        <Grid className="px-10" lg={5} xs={12}>
          <h1 className="font-bold text-7xl">Happening Now</h1>
          <h1 className="font-bold text-3xl py-16">Join Starweet Todaay</h1>
          <div className="w-[60%]">
            <div className="w-full">
              <GoogleLogin width={330} />
              <p className="py-5 text-center">OR</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Authentication;
