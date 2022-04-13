import React from "react";

const Issue = ({ issue, loading }) => {
  var date1 = new Date();
  let updateAt = date1.toDateString(issue.updated_at);
  var date2 = new Date();
  let createdAt = date2.toDateString(issue.created_at);
  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <div className="App">
      <div className="container py-4 mb-5 ">
        {issue.map((data) => (
          <div className="row border-bottom">
            <div className="col">
              <h4 className="title text-white" key={data.id}>
                Title: {data.title}
              </h4>
              <h6 className="updateAt text-white">ID: {data.id}</h6>
              <h6 className="body text-white">Description: {data.body}</h6>
              <p>
                <span className="text-white">Created On: {createdAt}</span>
                {"   "}
                <span className="text-white">Updated On: {updateAt}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Issue;
