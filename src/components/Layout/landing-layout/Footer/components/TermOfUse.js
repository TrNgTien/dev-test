import React from "react";
import { ReactComponent as UCARSLogo } from "@assets/icons/UCARSLogo.svg";

function TermOfUse() {
  return (
    <div>
      <div className="divider-vertical">&nbsp;</div>
      <div className="wrapper_terms-and-conditions">
        <div className="wrapper__polices">
          <p>Advertising Terms and Conditions</p>
          <p>Platform Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <p>© 2022. All rights reserved.</p>
      </div>
      <div className="wrapper-sologan">
        <UCARSLogo
          style={{
            marginRight: "10px",
          }}
        />
        <p>
          CarBuyer Pte Ltd and the CarBuyer Singapore brand are wholly owned by
          UCARS Pte Ltd
        </p>
      </div>
    </div>
  );
}

export default TermOfUse;
