import React from "react";
import { ReactComponent as InstaLogo } from "@assets/icons/insta_icon.svg";
import { ReactComponent as FbLogo } from "@assets/icons/fb.svg";
import { ReactComponent as PlaneLogo } from "@assets/icons/plane.svg";
import { ReactComponent as LinkedinLogo } from "@assets/icons/linkedin.svg";
import { ReactComponent as YTLogo } from "@assets/icons/YT.svg";
export default function SocialMedia() {
  return (
    <div className="social-media__wrapper">
      <p>Be first to latest news, reviews and content now!</p>
      <div className="social-media__subscribe-input">
        <input placeholder="Enter your email" type="text" />
        <button>Subscribe</button>
      </div>
      <div className="social-media__icons">
        <p>Follow us</p>
        <i>
          <InstaLogo />
        </i>
        <i>
          <FbLogo />
        </i>
        <i>
          <PlaneLogo />
        </i>
        <i>
          <LinkedinLogo />
        </i>
        <i>
          <YTLogo />
        </i>
      </div>
    </div>
  );
}
