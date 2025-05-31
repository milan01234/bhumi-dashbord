import "./App.css";
import Firstpage from "./component/Firstpage";
import Processbar from "./component/Processbar";
import Secondpage from "./component/Secondpage";
import GetAnalytics from "./component/GetAnalytics";
import { useState } from "react";

function App() {
const formData = new FormData();

const [pageState, setPageState] = useState(1);

const [loanformData, setloanFormData] = useState({
  loanAmount: 15000,
  minLoanDuration: 5,
  maxLoanDuration: 9,
  interestRate: 36,
});

const [bsFiles, setBsFiles] = useState([]);
const [buFile, setBuFile] = useState([]);

const [loading, setLoading] = useState(true);
const [analyticsData, setAnalyticsData] = useState(null);
const [error, setError] = useState(null);

// Upload handler — just store the files in state
const uploadJson = function (event) {
  const input = event.target;
  const files = input.files;

  if (input.id === "bs_file") {
    setBsFiles([...files]); // store all bs files
  } else if (input.id === "bu_file") {
    if (files.length > 1) {
      alert("Only one file is allowed for BU.");
      return;
    }
    setBuFile(files[0]); // store single bu file
  }
};
const getAnalytics = function (event) {
  const input = event.target;
  if (input.id === "submit") {
    console.log("SUBMIT");

    // Create FormData at this point
    const formData = new FormData();

    // Append files
    bsFiles.forEach((file) => {
      // console.log(typeof(file))
      formData.append("bs_file", file);
    });
    if (buFile != []) {
      buFile.forEach((file) => {
      // console.log(typeof(file))
      formData.append("bu_file", file);
    });
    }

    // Append JSON data
    formData.append("loanform", JSON.stringify(loanformData));

    // Inspect FormData
    // console.log("Final FormData:");
    // for (let [key, value] of formData.entries()) {
    //   console.log(`${key}:`, value);
    // }

    fetch("http://127.0.0.1:8000/upload", {
      method: "POST",
      body: formData,
    })
    .then(res => res.json())
    .then((data) =>{ console.log(data.scoring_result.output);setAnalyticsData(data.scoring_result.output);setLoading(false) } )
    .catch(err => setError(err));

    
  }
};
  return (
    <div>
      {pageState === 1 ? (
        <Firstpage
          bsFiles={bsFiles}
          setBsFiles={setBsFiles}
          buFile={buFile}
          setBuFile={setBuFile}
          formData={formData}
          pageState={pageState}
          setPageState={setPageState}
          uploadJson={uploadJson}
        />
      ) : pageState === 2 ? (
        <Secondpage
          loanformData={loanformData}
          setloanFormData={setloanFormData}
          pageState={pageState}
          setPageState={setPageState}
          getAnalytics={getAnalytics}
        />
      ) : pageState === 3 ? (
          <GetAnalytics loading={loading} analyticsData={analyticsData} error={error} />
      ):null}
    </div>
  );
}

export default App;
