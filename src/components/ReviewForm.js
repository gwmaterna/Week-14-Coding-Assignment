import React from "react"; 



export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {            
            reviews: [], // Starting the review state as an empty array
          };
        }
              
        handleReviewChange = (e) => {  // e is the event object
          this.setState({   // Setting state to whatever is typed in the review box
            review: e.target.value,  
            });  // How do I empty the review box afterward?
        };
        
        handleSubmit = (e) => {   // Function adds review to the array
          e.preventDefault(); // I do not understand what prevent default is for or why it's necessary.  I've 
          this.setState({     //  read explanations and still confused  
            reviews: [...this.state.reviews, this.state],
            });  //  Spread operator, but why?
        };
      
        render() {
          return (
            <div>              
              <form onSubmit={this.handleSubmit}>
                {/* I really don't know why onSubmit is different from handleSubmit */}
                <textarea rows={10} name="reviews" placeholder="Enter your name and a review:"
                  onChange={this.handleReviewChange} />
                <br></br>
                <input className="btn btn-dark" type="submit" value="submit" />
              </form>
              <br />               
              <h3>List of Reviews:</h3>
      
              {this.state.reviews.map(
                (review, index) => (
                  <p key={index}>{review.review}</p> // What is review.review?  This does NOT make sense.
                )                                    //  I'm really frustrated w/ this whole thing.           
              )}  
            </div>
            );  // I've tried all kinds of stuff. Some of it is below.  I wanted to take this info
                //  and get it to the review component to get the reviews into the card-footer, but 
                //  I couldn't figure out how to do it.




    //     this.state = {value: ''};
    
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //   }
    
    //   handleChange(event) {
    //     this.setState({value: event.target.value});
    //   }
    
    //   handleSubmit(event) {
    //     console.log(this.state.value);
    //     alert('A review was submitted: ' + this.state.value);
    //     event.preventDefault();
    //   }
    
    //   render() {
    //     return (
    //     <div>    
    //       <form onSubmit={this.handleSubmit}>
    //         <label>
    //           <textarea id="textbox" type="text" placeholder="Leave review here:" 
    //             value={this.state.value} onChange={this.handleChange}/> 
    //           {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
    //         </label>
    //         <br />
    //         {/* <button className="btn btn-primary" value={Submit} type="submit" /> */}
    //         <input className="btn btn-primary" type="submit" value="Submit" />
    //       </form>
    //       <h1>Reviews: </h1>
    //       <h1></h1>
    //     </div>  
    //     );
        
      }
}

    // render() {
    //     return (
    //         <form>
    //             <label>                    
    //                 {/* <input type="text" id="textbox"/> */}
    //                 <textarea id="textbox" type="text" placeholder="Leave review here:" />               </label>
    //                 <input type="submit" value="Submit" />
    //         </form>            
    //     );
    // }
