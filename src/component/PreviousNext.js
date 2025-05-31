import React from "react";

export default function PreviousNext(props) {

  const handleClick = (event) => {
  handlePageState(event);
  props.getAnalytics(event);
  };
  // console.log(props.pageState)
  function handlePageState(event) {

    // console.log(event.target.id)
    if (event.target.id === "previous") {
      props.setPageState(props.pageState - 1);
      // console.log(props.pageState)
      
    } else {
      props.setPageState(props.pageState + 1);
      // console.log(props.pageState)
    }
  
  }

  return (
    <div className="container justify-content-between col-12 col-sm-3 col-md-12">
      <div className="row justify-content-between">
        {/* Previous Button */}
        {(props.pageState === 1 || props.pageState === 2) && (
          <div className="justify-content-center col-12 col-sm-12 col-md-2 mb-3 d-flex">
            <button
              type="button"
              id="previous"
              onClick={handlePageState}
              className="btn btn-primary w-100"
              disabled={props.pageState === 0}
            >
              Previous
            </button>
          </div>
        )}

        {/* Next Button */}
        {props.pageState === 1 && (
          <div className="justify-content-center col-12 col-sm-12 col-md-2 mb-3 d-flex">
            <button
              type="button"
              id="next"
              onClick={handlePageState}
              className="btn btn-primary w-100"
              disabled={props.pageState === 0}
            >
              Next
            </button>
          </div>
        )}

        {/* Submit Button */}
        {props.pageState === 2 && (
          <div className="justify-content-center col-12 col-sm-12 col-md-2 mb-3 d-flex">
            <button
              type="submit"
              id="submit"
              onClick={handleClick} //{props.getAnalytics}
              className="btn btn-primary w-100"
              disabled={props.pageState === 0}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
