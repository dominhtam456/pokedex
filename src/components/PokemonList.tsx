import React, { Component, CSSProperties } from "react";
import Pokemon from './Pokemon';
import  { connect } from 'react-redux';
import { getPokemonRequest } from "../actions/Pokemon";
import { bindActionCreators, Dispatch } from "redux";

class PokemonList extends Component<LinkDispatchProps> {
    componentDidMount(){
        this.props.showPokemonList();
    }
    render() {
        return (

            
            <div>
                <h1 className="pokedex">Pokedex</h1>
                <ul className="list-unstyled pokemon-list mt-5">
                    <Pokemon />
                </ul>
            </div>
        )
    }
}

interface LinkDispatchProps {
    showPokemonList: () => void
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        showPokemonList: bindActionCreators(getPokemonRequest, dispatch)
    }
}
export default connect(null,mapDispatchToProps)(PokemonList);