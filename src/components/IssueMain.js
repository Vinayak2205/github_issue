import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Issue from "./Issue";
import axios from "axios";

const IssueMain = () => {
  const [issue, setIssue] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [issuePerPage, setIssuePerPage] = useState(4);

  const getIssue = async () => {
    try {
      setLoading(true);
      await axios
        .get("https://api.github.com/repos/octocat/Spoon-Knife/issues")
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          let issues = data;
          setIssue(issues);
        });
      setLoading(false);
    } catch (err) {
      console.log("Error ==>", err);
    }
  };

  useEffect(() => {
    getIssue();
  }, []);

  //get current issue
  const indexOfLastIssue = currentPage * issuePerPage;
  const indexOfFisrtIssue = indexOfLastIssue - issuePerPage;
  const currentIssue = issue.slice(indexOfFisrtIssue, indexOfLastIssue);

  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <div className="App">
      <div className="container  py-4 mb-5">
        <Issue issue={currentIssue} loading={loading} />
        <Pagination
          issuePerPage={issuePerPage}
          totalIssues={issue.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default IssueMain;
