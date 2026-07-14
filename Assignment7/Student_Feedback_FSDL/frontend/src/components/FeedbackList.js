import React, { useEffect, useState } from "react";
import axios from "axios";

function FeedbackList() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios.get("http://localhost:5000/api/feedback")
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="feedback-list">
      <h2>All Feedback</h2>

      {data.map((item) => (
        <article key={item._id} className="feedback-card">
          <div className="feedback-card-header">
            <h4>{item.studentName}</h4>
            <span className="feedback-subject">{item.subject}</span>
          </div>
          <p className="feedback-rating">Rating: {item.rating}/5</p>
          <p className="feedback-comment">{item.comment}</p>
        </article>
      ))}
    </section>
  );
}

export default FeedbackList;