import React from "react";
import Filme from "./Filme";
import {movieList} from '../data/movies'

class Catalogo extends React.Component {
  render() {
    const {filter} = this.props;

    const showMovies = movieList
      .filter(({movieName})=> movieName.toLowerCase().includes(filter))
      .map((filme)=> <Filme key={filme.movieName} list={filme} />)

    return(
      <>
        {showMovies}
      </>
    );
  }
}

export default Catalogo;