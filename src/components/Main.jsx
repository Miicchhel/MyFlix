import React from "react";
import Catalogo from './Catalogo'

class Main extends React.Component {
  state = {
    movieFilter:'',
  }
  
  findMovie = (event) => {
    const busca = event.target.value
    this.setState(() => (
      {movieFilter: busca}
    ));
  }
  render() {
    return (
      <main>
        <section className="main_input">
          <input type="text" placeholder="Pesquisar Filme" id="pesquisa" onChange={this.findMovie}/>
        </section>
        <section className="container">
          <Catalogo filter={this.state.movieFilter}/>
        </section>
      </main>
    );
  }
}

export default Main;