import React from "react";
import inclinedList from "../img/img-inclined-list.png";
import rocket from "../img/img-rocket.svg";
import members from "../img/img-members.svg";
import coin from "../img/img-coin.svg";
import logoWhite from "../img/img-logo-white.png";
import partnerGreat from "../img/img-partner-great.png";
import partnerTaqtile from "../img/img-partner-taqtile.png";
import partnerVianna from "../img/img-partner-vianna.png";
import subscription from "../img/ic-subscription.svg"
import pitch from "../img/ic-pitch.svg";
import committee from "../img/ic-committee.svg";
import interview from "../img/ic-interview.svg";
import investment from "../img/ic-investment.svg";
import sectionBeInvestor from "../img/img-investor-primary.jpg";

export const Image = {
  coin: () => <img src={coin} alt="coinIcon" height="80px" />,
  committee: () => <img src={committee} alt="committee" height="80px" />,
  BeInvestor: () => <img src={sectionBeInvestor} alt="Seja investidor" height="100%" />,
  LogoWhite: () => <img src={logoWhite} alt="Logo white" width="120px" />,
  InlinedList: () => <img src={inclinedList} alt="facebookIcon" width="300px" />,
  Interview: () =>  <img src={interview} alt="interview" height="80px" />,
  Investment: () =>  <img src={investment} alt="interview" height="80px" />,
  Members: () => <img src={members} alt="membersIcon" height="80px" />,
  PartnerGreat: () => <img src={partnerGreat} alt="Great Place to Work" width="60%" />,
  PartnerTaqtile: () => <img src={partnerTaqtile} alt="Instituto Taqtile" width="60%" />,
  PartnerVianna: () => <img src={partnerVianna} alt="Vianna, Burke & Oliveira Franco" width="60%" />,
  Pitch: () => <img src={pitch} alt="pitch" height="80px" />,
  Rocket: () =>  <img src={rocket} alt="rocketIcon" height="80px" />,
  Subscription: () =>  <img src={subscription} alt="subscriptionIcon" height="80px" />,
};
