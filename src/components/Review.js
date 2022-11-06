import React from "react";
import ReviewForm from "./ReviewForm";

export default class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        };
    }
  // This WHOLE component is a wash.


    // render() {
    //     return (
    //        <div>
    //             {this.state.value}
    //        </div>

    //     );
    // }
}