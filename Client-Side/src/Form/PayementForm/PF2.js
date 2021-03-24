import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../Header/Nav";
import "./PF2.css";

function PF2() {
  return (
    <div>
      <Nav />
      <div class="simpleContainer" data-transitioned-child="true">
        <div
          class="centerContainer contextStep"
          style={{
            display: "block",
            transform: "none",
            opacity: 1,
            transitionDuration: "250ms",
          }}
        >
          <div class="planContainer" data-uia="plan-context-page-container">
            <div class="stepLogoContainer">
              <span class="stepLogo planStepLogo"></span>
            </div>
            <div class="stepHeader-container" data-uia="header">
              <div class="stepHeader" data-a11y-focus="true" tabindex="0">
                <span id="" class="stepIndicator" data-uia="">
                  STEP <b>2</b> OF <b>3</b>
                </span>
                <h1 class="stepTitle" data-uia="stepTitle">
                  Choose your plan.
                </h1>
              </div>
            </div>
            <div class="contextBody contextRow">
              <ul class="checkmark-group" data-uia="checkmark-group">
                <li
                  class="checkmark-group--row"
                  data-uia="checkmark-group+row-0"
                >
                  <svg
                    viewBox="0 0 24 24"
                    class="checkmark-group--icon"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z"
                    ></path>
                  </svg>
                  <span
                    class="checkmark-group--text"
                    data-uia="checkmark-group+row-0+content"
                  >
                    No commitments, cancel anytime.
                  </span>
                </li>
                <li
                  class="checkmark-group--row"
                  data-uia="checkmark-group+row-1"
                >
                  <svg
                    viewBox="0 0 24 24"
                    class="checkmark-group--icon"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z"
                    ></path>
                  </svg>
                  <span
                    class="checkmark-group--text"
                    data-uia="checkmark-group+row-1+content"
                  >
                    Everything on Netflix for one low price.
                  </span>
                </li>
                <li
                  class="checkmark-group--row"
                  data-uia="checkmark-group+row-2"
                >
                  <svg
                    viewBox="0 0 24 24"
                    class="checkmark-group--icon"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z"
                    ></path>
                  </svg>
                  <span
                    class="checkmark-group--text"
                    data-uia="checkmark-group+row-2+content"
                  >
                    No ads and no extra fees. Ever.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="submitBtnContainer">
            <button
              type="button"
              autocomplete="off"
              class="nf-btn nf-btn-primary nf-btn-solid nf-btn-oversize"
              data-uia="continue-button"
              placeholder="button_see_plans"
            >
              See the Plans
            </button>
            <Link to="/Movies">
              <button
                type="button"
                style={{ margin: "20px 0" }}
                autocomplete="off"
                class="nf-btn nf-btn-primary nf-btn-solid nf-btn-oversize"
                data-uia="continue-button"
                placeholder="button_see_plans"
              >
                Later?
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PF2;
