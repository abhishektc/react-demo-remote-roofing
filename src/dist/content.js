import React from "react";
import { Link } from "react-router-dom";
import './Style.css';
import Loader from "./error";
const content = (props) => {
    const { loading, error } = props;
        return (
            <div className="content">
                <div className="subHeader">
                    <span className="popular">Popular Titles</span>
                </div>
                <div className="row">
                {error?
                        <Loader errorTitle="Oops, something went wrong..." />
                    :
                    loading ?
                        <Loader errorTitle="Loading..." />
                        :
                    <>
                    <div className="contentcard1">
                        <Link to="/series">
                            <div className="card2">
                                <span className="titlename">Series</span>
                            </div>
                        </Link>
                        <span>Popular Series</span>
                                                
                    </div>
                
                    <div className="contentcard1">
                        <Link to="/movies">
                            <div className="card2">
                                <span className="titlename">Movies</span>
                            </div>
                        </Link>
                        <span>Popular Movies</span>
                    </div>
                    </>
                } 
                </div>
            </div>
        )
}

export default content;