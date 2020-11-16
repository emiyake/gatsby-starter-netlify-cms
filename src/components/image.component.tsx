import React from "react";
import inclinedList from "../img/img-inclined-list.png";
import rocket from "../img/img-rocket.svg";
import members from "../img/img-members.svg";
import coinIcon from "../img/img-coin.svg";
import logoWhite from "../img/img-logo-white.png";
import partnerGreat from "../img/img-partner-great.png";
import partnerTaqtile from "../img/img-partner-taqtile.png";
import partnerVianna from "../img/img-partner-vianna.png";
import subscription from "../img/ic-subscription.svg"
import pitch from "../img/ic-pitch.svg";
import committee from "../img/ic-committee.svg";
import interview from "../img/ic-interview.svg";
import investment from "../img/ic-investment.svg";
import getMoney from "../img/img-get-money.jpg";
import sectionBeInvestor from "../img/img-be-investor.jpg";

import logoAgriconnected from "../img/img-logo-agriconnected.png";
import logoBebidaNaPorta from "../img/img-logo-bebida.png";
import logoBynd from "../img/img-logo-bynd.png";
import logoIdgeo from "../img/img-logo-idgeo.png";
import logoOnTheGo from "../img/img-logo-onthego.png";
import logoPoliAngels from "../img/img-logo-pa.png";
import logoSourceLevel from "../img/img-logo-sourcelevel.png";
import logoWorc from "../img/img-logo-worc.png";


export const Image = {
  Coin: () => <img src={coinIcon} alt="coinIcon" style={{height: "60px" }} />,
  committee: () => <img src={committee} alt="committee" width="80px" />,
  BeInvestor: () => <img src={sectionBeInvestor} alt="Seja investidor" height="100%" />,
  GetMoney: () => <img src={getMoney} alt="Receba investimento" width="100%" />,
  LogoWhite: () => <img src={logoWhite} alt="Logo white" width="120px" />,
  InlinedList: () => <img src={inclinedList} alt="facebookIcon" width="300px" />,
  Interview: () =>  <img src={interview} alt="interview" width="80px" />,
  Investment: () =>  <img src={investment} alt="interview" width="80px" />,
  LogoAgriConnected: () => <img src={logoAgriconnected} alt="Agriconnected" style={{height: "80px" }} />,
  LogoBebidaNaPorta: () => <img src={logoBebidaNaPorta} alt="Bebida na porta" style={{height: "80px" }} />,
  LogoBynd: () => <img src={logoBynd} alt="Bynd" style={{height: "80px" }} />,
  LogoIdgeo: () => <img src={logoIdgeo} alt="IdGeo" style={{height: "80px" }} />,
  LogoOnTheGo: () => <img src={logoOnTheGo} alt="On the go" style={{height: "80px" }} />,
  LogoPoliAngels: () => <img src={logoPoliAngels} alt="Poli Angels" style={{height: "80px" }} />,
  LogoSourceLevel: () => <img src={logoSourceLevel} alt="Source Level" style={{height: "80px" }} />,
  LogoWorc: () => <img src={logoWorc} alt="Worc" style={{height: "80px" }} />,
  Members: () => <img src={members} alt="membersIcon" style={{height: "60px" }} />,
  PartnerGreat: () => <img src={partnerGreat} alt="Great Place to Work" width="60%" />,
  PartnerTaqtile: () => <img src={partnerTaqtile} alt="Instituto Taqtile" width="60%" />,
  PartnerVianna: () => <img src={partnerVianna} alt="Vianna, Burke & Oliveira Franco" width="80%" />,
  Pitch: () => <img src={pitch} alt="pitch" width="80px" />,
  Rocket: () =>  <img src={rocket} alt="rocketIcon" style={{height: "60px" }} />,
  Subscription: () =>  <img src={subscription} alt="subscriptionIcon" width="80px" />,
};
