/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import inclinedList from "../img/img-inclined-list.png";
import rocket from "../img/img-rocket.svg";
import members from "../img/img-members.svg";
import coin from "../img/img-coin.svg";
import logoWhite from "../img/img-logo-white.png";

export const Image = {
  coin: () => <img src={coin} alt="coinIcon" height="80px" />,
  LogoWhite: () => <img src={logoWhite} alt="Logo white" width="120px" />,
  InlinedList: () => <img src={inclinedList} alt="facebookIcon" width="300px" />,
  members: () => <img src={members} alt="membersIcon" height="80px" />,
  Rocket: () =>  <img src={rocket} alt="rocketIcon" height="80px" />,
};
