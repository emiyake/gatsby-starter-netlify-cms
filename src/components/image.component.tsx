/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import inclinedList from "../img/img-inclined-list.png";
import rocket from "../img/img-rocket.svg";
import members from "../img/img-members.svg";
import coin from "../img/img-coin.svg";

export const Image = {
  coin: () => {
    return <img src={coin} alt="coinIcon" width="100px" />;
  },
  InlinedList: () => {
    return <img src={inclinedList} alt="facebookIcon" width="300px" />;
  },
  members: () => {
    return <img src={members} alt="membersIcon" width="100px" />;
  },
  Rocket: () => {
    return <img src={rocket} alt="rocketIcon" width="100px" />;
  },
};
