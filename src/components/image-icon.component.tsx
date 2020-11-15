import React from "react";
import icLocation from "../img/ic-location.png";
import icMail from "../img/ic-mail.png";
import icPhone from "../img/ic-phone.png";

import icInstagram from "../img/ic-instagram.png";
import icLinkedin from "../img/ic-linkedin.png";
import icYoutube from "../img/ic-youtube.png";

import icDeal from "../img/ic-deal.png";
import icCalendar from "../img/ic-calendar.png";
import icNetworking from "../img/ic-networking.png";

export const ImageIcon = {
  Deal: () => <img src={icDeal} alt="Deal icon" width="80px" />,
  Event: () => <img src={icCalendar} alt="Event icon" width="80px" />,
  Instagram: () => <img src={icInstagram} alt="Instagram icon" width="40px" />,
  Linkedin: () => <img src={icLinkedin} alt="Linkedin icon" width="40px" />,
  Location: () => <img src={icLocation} alt="Location icon" width="24px" />,
  Mail: () => <img src={icMail} alt="Mail icon" width="24px" />,
  Networking: () => <img src={icNetworking} alt="Networking icon" width="80px" />,
  Phone: () => <img src={icPhone} alt="Phone icon" width="24px" />,
  Youtube: () => <img src={icYoutube} alt="Youtube icon" width="40px" />,
} 