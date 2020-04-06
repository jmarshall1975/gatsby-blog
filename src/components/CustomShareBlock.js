import PropTypes from "prop-types";
import React from "react";

import { FaTwitter, FaFacebook, FaGooglePlus, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { ShareButtonRectangle, ShareBlockStandard } from "react-custom-share";

const CustomReactShare = props => {

  const { url, title, excerpt } = props;

  const shareBlockProps = {
    url: url,
    button: ShareButtonRectangle,
    buttons: [
      { network: "Linkedin", icon: FaLinkedin },
      { network: "Twitter", icon: FaTwitter },
      { network: "Facebook", icon: FaFacebook },
      { network: "GooglePlus", icon: FaGooglePlus },
      { network: "Email", icon: FaEnvelope }
    ],
    text: title,
    longtext: excerpt
  };

  return <ShareBlockStandard {...shareBlockProps} />;
};

CustomReactShare.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    excerpt: PropTypes.string
  };
  
  CustomReactShare.defaultProps = {
    url: "https://blog.jamesmarshall.org",
    title: "Take a look at this guys blog.",
    excerpt: "Take a look at this guys blog. He's got some interesting posts you might be interested in."
  };

export default CustomReactShare;
