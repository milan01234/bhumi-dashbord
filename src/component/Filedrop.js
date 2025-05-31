import React from "react";

export default function filedrop(props) {
  return (
    <div className="col-12 col-sm-10 col-md-6 col-lg-4 mx-auto mb-4">
      <div className="card text-white bg-secondary h-100">
        <div className="card-header text-center">{props.card_header}</div>
        <div className="card-body d-flex flex-column align-items-center justify-content-center">
          {/* Upload Area */}
          <div
            className="w-100 border border-dashed border-2 rounded p-4 text-center"
            // Drag and drop logic can be added here
          >
            <svg
              className="mx-auto mb-3"
              width="40"
              height="40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6M4 6a2 2 0 012-2h6l6 6v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
              />
            </svg>

            <div className="d-flex justify-content-center align-items-center flex-wrap small text-white">
              <label
                htmlFor={props.card_id}
                className="text-decoration-underline text-info fw-semibold me-1"
                style={{ cursor: "pointer" }}
              >
                Upload a file
                <input
                  id={props.card_id}
                  name={props.card_id}
                  type="file"
                  className="d-none"
                  onChange={props.uploadJson}
                  multiple={props.card_id === "bs_file"}
                  accept="application/json"
                />
              </label>
              <span className="text-light">or drag and drop</span>
            </div>

            <p className="text-white-50 mt-2 small">PNG, JPG, GIF up to 10MB</p>
          </div>

          {/* Description */}
          <div className="container-fluid text-center">
            <ul class="list-group">
              <li class="mt-2 list-group-item list-group-item-success">
              <div className="row justify-content-center position-relative">
                <div className="col-9">A simple danger list group item</div>
                <button type="button" className="col-3 btn btn-close"></button>
               </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
