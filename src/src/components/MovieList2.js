import React, { Component } from 'react';
import Movie from './MovieCard2';

import EP4 from "../assets/EP4.jpg";
import EP5 from "../assets/EP5.jpg";
import EP6 from "../assets/EP6.jpg";

export default class MovieList extends Component {
    render() {
        let movieOne = {
            Title: "Star Wars: Episode IV - A New Hope",
            Year: "1977",
            Rating: "PG",
            Runtime: "2h 1m",
            id: 0,
            img:EP4,
        };

        let movieTwo = {
            Title: "Star Wars: Episode V - The Empire Strikes Back",
            Year: "1980",
            Rating: "PG",
            Runtime: "2h 4m",
            id: 1,
            img:EP5,
        };
        let movieThree = {
            Title: "Star Wars: Episode VI - Return of the Jedi",
            Year: "1983",
            Rating: "PG",
            Runtime: "2h 11m",
            id: 2,
            img:EP6,
        };
        return (
            <>
                <div className='row'>
                    <div className='col-4'>
                        {/* passing object props of movieOne to instance of components class Movie */}
                        <Movie {...movieOne} />
                    </div>
                

           
                    <div className='col-4'>
                        {/* passing object props of movieTwo to instance of components class Movie */}
                        <Movie {...movieTwo} />
                    </div>
                

                
                    <div className='col-4'>
                        {/* passing object props of movieThree to instance of components class Movie */}
                        <Movie {...movieThree} />
                    </div>
                </div>
            </>
        );
    }
}