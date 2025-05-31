import React from "react";
// import Filedrop from "./Filedrop";   
import PreviousNext from "./PreviousNext";
import FileUploadCard from "./FileUploadCard";

export default function Firstpage(props) {
  
  return (
<div className="d-flex flex-column min-vh-100 bg-secondary text-white">
  <div className="flex-grow-1 d-flex justify-content-center align-items-center">
    <div className="container">
      <div className="row justify-content-center gap-3">
        <div className="col-md-5">
          <FileUploadCard title="Bank Statement Data" multiple={true} files={props.bsFiles} setFiles={props.setBsFiles} />
        </div>
        <div className="col-md-5">
          <FileUploadCard title="Bureau Data" multiple={false} files={props.buFile }  setFiles={props.setBuFile} /> 
        </div>
      </div>
    </div>
  </div>

  <footer className="py-3 bg-dark border-top">
    <div className="container d-flex justify-content-center">
      <PreviousNext pageState={props.pageState} setPageState={props.setPageState} />
    </div>
  </footer>
</div>


    // <div className="position-relative min-vh-100 d-flex flex-column justify-content-center align-items-center">
    //   <div className="mt-auto d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 w-100 px-3">
    //     <Filedrop card_header="Bank Statement Data" card_id="bs_file" uploadJson={props.uploadJson}  />
    //     <Filedrop card_header="Bureau Data"  card_id="bu_file" uploadJson={props.uploadJson}/>
    //   </div>
    //   <footer className="py-4 mt-auto bottom-0 start-0 w-100 mb-4 d-flex">
    //     <PreviousNext pageState={props.pageState} setPageState={props.setPageState} />
    //   </footer>
    // </div>
  );
}
