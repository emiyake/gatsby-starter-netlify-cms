import React from "react";
import icLocation from "../img/ic-location.png";
import icMail from "../img/ic-mail.png";
import icPhone from "../img/ic-phone.png";

import icInstagram from "../img/ic-instagram.png";
import icLinkedin from "../img/ic-linkedin.png";
import icYoutube from "../img/ic-youtube.png";

export const ImageIcon = {
    Location: () => <img src={icLocation} alt="Location icon" width="24px" />,
    Phone: () => <img src={icPhone} alt="Phone icon" width="24px" />,
    Mail: () => <img src={icMail} alt="Mail icon" width="24px" />,
    Instagram: () => <img src={icInstagram} alt="Instagram icon" width="40px" />,
    Linkedin: () => <img src={icLinkedin} alt="Linkedin icon" width="40px" />,
    Youtube: () => <img src={icYoutube} alt="Youtube icon" width="40px" />,

} 