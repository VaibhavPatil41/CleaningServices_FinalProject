import { useSelector } from "react-redux"

export default function  Feedback(){
    
    const mystate = useSelector(state=>state.logged)
    

    return(
            <div class="container mt-4 ">
                <p> Logged in : {mystate.loggedIn.toString()} </p>
                

                <h2>Feedback</h2>
                    <div class="mb-4 small">
                    Please provide your feedback in the form below
                    </div>
                    <form name="feedback_form" id="feedback_form" method="post">
                    <label>How do you rate your overall experience?</label>
                    
                    <div class="mb-3 d-flex flex-row py-1 " >
                        <div class="form-check mr-3">
                        <input class="form-check-input bg-info" type="radio" name="rating" id="rating_bad" value="bad"/>
                        <label class="form-check-label" for="rating_bad">
                            1
                        </label>
                        </div>
                        
                        <div class="form-check mx-3">
                        <input class="form-check-input bg-info" type="radio" name="rating" id="rating_good" value="good"/>
                        <label class="form-check-label" for="rating_good">
                            2
                        </label>
                        </div>
                        
                        <div class="form-check mx-3">
                        <input class="form-check-input bg-info"  type="radio" name="rating" id="rating_excellent" value="excellent"/>
                        <label class="form-check-label" for="rating_excellent">
                            3
                        </label>
                        </div>

                        <div class="form-check mx-3">
                        <input class="form-check-input bg-info"  type="radio" name="rating" id="rating_excellent" value="excellent"/>
                        <label class="form-check-label" for="rating_excellent">
                            4
                        </label>
                        </div>

                        <div class="form-check mx-3">
                        <input class="form-check-input bg-info"  type="radio" name="rating" id="rating_excellent" value="excellent"/>
                        <label class="form-check-label" for="rating_excellent">
                            5
                        </label>
                        </div>

                    </div>
                    <div class="mb-4 ">
                    <label class="form-label"  for="feedback_comments">Comments:</label>
                    <textarea class="form-control " required rows="6"  name="comments" id="feedback_comments" ></textarea>
                    </div>
                    
                    <button type="submit" class="btn btn-info btn-lg" >Post</button>
                    </form>
            </div>
        )

} 