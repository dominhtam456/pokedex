import React, { Component } from "react";
import CSS from 'csstype';

class Pokemon extends Component{
    render(){
        const textStyle: CSS.Properties = {
            fontWeight: "bold"
        };
        return(
            <div>
                <li className="media imgpkm pb-3 pl-3">
                        <img className="mr-3 " src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="Generic placeholder image" />
                        <div className="media-body">
                            <h5 className="mt-3 mb-1">Ditto</h5>
                            <div className="row">
                                <div className="col mt-3"><span style={textStyle}> Type: </span>&nbsp;
                                <span className="badge badge-secondary">normal</span>
                                </div>
                            </div>
                            <div>
                            <span style={textStyle}>Description:</span> While it can transform into anything, each Ditto apparently has its own strengths and weaknesses when it comes to transformations.
                            </div>
                        </div>
                    </li>
            </div>
        )
    }
}

export default Pokemon;