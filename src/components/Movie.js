import React from "react";
import ReviewForm from "./ReviewForm";
import StarRating from "./Star-Rating";
import Review from "./Review";

export default class Movie extends React.Component {
    render() {
        return (  // At least here I basically understood what I was doing
            <div className="container">
                <div className="card w-75">
                    <div className="card-header">
                        <div className="row">                            
                            <div className="col-3 m-3" id="pics">
                                {this.props.image}
                            </div>
                            <div className="col-8 m-2" id="">
                              <div className="title"> 
                                {this.props.title}
                              </div>
                              <div className="year m-1">
                                    {this.props.year}
                              </div>
                              <div className="director m-1">
                                {this.props.director} 
                              </div>
                              <div className="rated m-1">
                                    {this.props.rated}
                              </div>                                                        
                              <div className="about m-2">
                                    {this.props.about}
                              </div>
                              <div className="starring m-3">
                                    {this.props.starring}
                              </div>
                            </div>
                        </div>
                    <div className="card-body">
                        <ReviewForm /> 
                        <StarRating />
                    </div>
                    <div className="card-footer">
             
                    </div>
                        
                        

                        {/* <h3>Movies</h3> */}
                        {/* <MovieList /> */}
                        {/* <button className="btn btn-primary" id="submit">submit</button> */}
                    </div>
                </div>
            </div>

        );
    }
}