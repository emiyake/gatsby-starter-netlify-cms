/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import inclinedList from "../img/img-inclined-list.png";
import rocket from "../img/img-rocket.svg";
import members from "../img/img-members.svg";
import coin from "../img/img-coin.svg";
import logoWhite from "../img/img-logo-white.png";

import partnerGreat from "../img/img-partner-great.png";
import partnerTaqtile from "../img/img-partner-taqtile.png";
import partnerVianna from "../img/img-partner-vianna.png";

import sectionBeInvestor from "../img/img-investor-primary.jpg";


export const Image = {
  coin: () => <img src={coin} alt="coinIcon" height="80px" />,
  BeInvestor: () => <img src={sectionBeInvestor} alt="Seja investidor" height="100%" />,
  LogoWhite: () => <img src={logoWhite} alt="Logo white" width="120px" />,
  InlinedList: () => <img src={inclinedList} alt="facebookIcon" width="300px" />,
  members: () => <img src={members} alt="membersIcon" height="80px" />,
  PartnerGreat: () => <img src={partnerGreat} alt="Great Place to Work" width="60%" />,
  PartnerTaqtile: () => <img src={partnerTaqtile} alt="Instituto Taqtile" width="60%" />,
  PartnerVianna: () => <img src={partnerVianna} alt="Vianna, Burke & Oliveira Franco" width="60%" />,
  Rocket: () =>  <img src={rocket} alt="rocketIcon" height="80px" />,
};
