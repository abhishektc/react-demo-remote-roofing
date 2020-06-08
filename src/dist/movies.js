import React from "react";
import Loader from "./error";
const movies = (props) => {
    const { movies, loading, error } = props;
    return (
        <>
            { 
                <div className="content">
                    <div className="subHeader">
                        <span className="popular">Popular Movies</span>
                    </div>
                    <div className="row">
                        {error?
                            <Loader errorTitle="Oops, something went wrong..." />
                            :
                        loading ?
                            <Loader errorTitle="Loading..." />
                            :
                            
                            movies.slice(0, 21).sort((a, b) => a.title.localeCompare(b.title))
                            .map((src, index) => {
                                const imageUrl = src.images["Poster Art"].url;
                                return (
                                    <div className="card1" key={src.title}>
                                        <div className="card2">
                                            <img src={imageUrl} alt="Not Found" />
                                        </div>
                                        <span>{src.title}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default movies;