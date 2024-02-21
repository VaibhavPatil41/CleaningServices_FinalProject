import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Feedback() {
    const mystate = useSelector(state => state.logged);
    const [rating, setRating] = useState("1");
    const [comment, setComment] = useState(""); // Changed variable name from comments to comment
    const navigate = useNavigate();

    const submitData = (e) => {
        e.preventDefault();

        const reqOption = {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                rating: rating,
                comment: comment // Changed variable name from comments to comment
            })
        };

        const user_id=localStorage.getItem('user_id');
        const service_id=localStorage.getItem('service_id');
        
        fetch("http://localhost:8073/feedback?service_id="+service_id+"&user_id="+user_id, reqOption)
        //fetch("http://localhost:8073/feedback?service_id="+9+"&user_id="+1, reqOption) // Fixed the fetch URL
            .then(resp => resp.text())
            .then(str => navigate('/orderstatus'))
            .catch(error => console.error('Error:', error)); // Added error handling
    };

    const handleRatingChange = (e) => {
        setRating(e.target.value);
    };

    const handleCommentChange = (e) => { // Changed function name from handleCommentsChange to handleCommentChange
        setComment(e.target.value);
    };

    return (
        <div className="container mt-4">
            <h2>Feedback</h2>
            <div className="mb-4 small">Please provide your feedback in the form below</div>
            <form name="feedback_form" id="feedback_form" onSubmit={submitData}>
                <label>How do you rate your overall experience?</label>
                <div className="mb-3 d-flex flex-row py-1 form-select" id="rating">
                    {[1, 2, 3, 4, 5].map((value) => (
                        <div key={value} className="form-check mx-3">
                            <input
                                className="form-check-input bg-info"
                                type="radio"
                                name="rating"
                                id={`rating_${value}`}
                                value={value.toString()}
                                checked={rating === value.toString()}
                                onChange={handleRatingChange}
                            />
                            <label className="form-check-label" htmlFor={`rating_${value}`}>
                                {value}
                            </label>
                        </div>
                    ))}
                </div>
                <div className="mb-4">
                    <label className="form-label" htmlFor="feedback_comments">Comments:</label>
                    <textarea
                        className="form-control"
                        required
                        rows="6"
                        name="comments"
                        id="feedback_comments"
                        value={comment} // Changed variable name from comments to comment
                        onChange={handleCommentChange} // Changed function name from handleCommentsChange to handleCommentChange
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-info btn-lg">Post</button>
                <button className="btn btn-info rounded-pill px-3" type="button" onClick={() => navigate('/orderstatus')}>Go Back</button> {/* Replaced anchor tag with a button and added onClick event */}
            </form>
        </div>
    );
}