import React from "react";
import PreviousNext from "./PreviousNext";
import LoanForm from "./Loanform";

export default function Secondpage(props) {
  return (
    <div className="position-relative min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="mt-auto d-flex flex-column flex-md-row justify-content-center align-items-center">
        <LoanForm  loanformData={props.loanformData} setloanFormData={props.setloanFormData} />
      </div>
        <footer className="py-4 mt-auto bottom-0 start-0 w-100 mb-4 d-flex">
          <PreviousNext
            pageState={props.pageState}
            setPageState={props.setPageState}
            getAnalytics={props.getAnalytics}
          />
        </footer>
    </div>
  );
}
