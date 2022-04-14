import React from "react";
import RedoOutlined from "@ant-design/icons";

const Issue = ({ issue, loading }) => {
  var date1 = new Date();
  let updateAt = date1.toDateString(issue.updated_at);
  var date2 = new Date();
  let createdAt = date2.toDateString(issue.created_at);
  if (loading) {
    return (
      <RedoOutlined
        spin
        className="d-flex justify-content-center display-1 text-primary p-5"
      />
    );
  }

  return (
    <div className="App">
      <div className="container py-4 mb-5 card-body ">
        {issue.map((data) => (
          <div className="row border border-secondary py-3 px-md-5">
            <div className="col">
              <h4 className="title text-primary card-title" key={data.id}>
                {data.title}
              </h4>

              <h6 className="body text-light card-text">
                Description: {data.body}
              </h6>

              <p>
                <span className="text-muted card-text">
                  Created On: {createdAt}
                </span>
                {"   "}
                <span className="text-muted card-text px-md-5">
                  Updated On: {updateAt}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Issue;
