import React from "react";
import Movie from "./Movie";
import spaceballs from "../photos/spaceballs.png";
import pulpfiction from "../photos/pulpfiction.jpg";


export default class MovieList extends React.Component {
    render() {
        let movieOne = {
            image: <img src={spaceballs} alt="Spaceballs" />,                   
            title: "Spaceballs",
            year: "Released in 1987",
            about: "A star-pilot for hire and his trusty sidekick must come to the rescue of a princess and save Planet Druidia from the clutches of the evil Spaceballs.",
            director: "Directed by Mel Brooks",
            starring: "Starring: Bill Pullman, John Candy, Rick Moranis, Daphne Zuniga, Mel Brooks",
            rated: "Rated: PG-13"                                                                                                         
        };

        let movieTwo = {
            image: <img src={pulpfiction} alt="Pulp Fiction" />,
            title: "Pulp Fiction",
            year: "1994",
            about: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            director: "Directed by Quentin Tarantino",
            starring: "Starring: John Travolta, Uma Thurman, Samuel L. Jackson, Bruce Willis",
            rated: "Rated: R"
        };

        return (
            <div>
                <Movie {...movieOne} />
                <Movie {...movieTwo} />
            </div>
        );
    }
}