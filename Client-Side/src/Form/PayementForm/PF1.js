import React from "react";
import "./PF1.css";
import Nav from "../../Header/Nav";
import { Link, useHistory } from "react-router-dom";

function PaymentForm1() {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    //send POST request to backend.
    history.push("/signup");
  };
  return (
    <div>
      <Nav />
      <div class="simpleContainer" data-transitioned-child="true">
        <div
          class="centerContainer firstLoad"
          data-uia="password-only-page-container"
        >
          <div class="stepLogoContainer" data-uia="stepLogoContainer">
            <span class="stepLogo regStepLogo"></span>
          </div>

          <form onSubmit={handleSubmit} style={{ marginTop: "33px" }}>
            <div
              class="regFormContainer passwordFormContainer"
              data-uia="form-registration"
            >
              <div class="stepHeader-container" data-uia="header">
                <div class="stepHeader" data-a11y-focus="true">
                  <span id="" class="stepIndicator" data-uia="">
                    STEP <b>1</b> OF <b>3</b>
                  </span>
                  <h1 class="stepTitle" data-uia="stepTitle">
                    <span id="" data-uia="">
                      Finish setting up your account.
                    </span>
                  </h1>
                </div>
              </div>
              <div class="contextRow" data-uia="subtitle">
                Netflix is personalised for you. Create a password to watch
                Netflix on any device at any time.
              </div>
              <div>
                <ul class="simpleForm structural ui-grid">
                  <li data-uia="field-email+wrapper" class="nfFormSpace">
                    <div class="input-readOnly">
                      <div class="label-readOnly">Email</div>
                      <div
                        class="value-readOnly"
                        data-uia="field-email"
                        id="field-email"
                      >
                        prathmesh@gmail.com
                      </div>
                    </div>
                  </li>
                  <li data-uia="field-password+wrapper" class="nfFormSpace">
                    <div
                      data-uia="field-password+container"
                      class="nfInput nfInputOversize"
                    >
                      <div class="nfInputPlacement">
                        <input
                          type="password"
                          data-uia="field-password"
                          name="password"
                          class="nfTextField"
                          id="id_password"
                          tabIndex="0"
                          autocomplete="password"
                          maxlength="61"
                          minlength="4"
                          dir=""
                          placeholder="Enter your password"
                          required
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <a class="link-forgot-password" href="/LoginHelp">
                Forgot your password?
              </a>
              <div class="submitBtnContainer">
                <button
                  type="submit"
                  autocomplete="off"
                  class="nf-btn nf-btn-primary nf-btn-solid nf-btn-oversize"
                  data-uia="cta-registration"
                  placeholder="regForm_button_continue"
                >
                  Continue
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PaymentForm1;
