import React from "react";
import { Panel } from "react-bootstrap";
import "./PanelLoader.css";

export const CorpLoader = () => {
  return (
    <Panel.Body className="flex-container">
      <div className="text-center">
        <div className="error-size bottom-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="currentColor"
            class="bi bi-arrow-up-short arrow-anim"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
            />
          </svg>
        </div>
        <h3 className="text-margin">Please Select Corporation</h3>
      </div>
    </Panel.Body>
  );
};
