import React from "react";

class Filme extends React.Component {
  render() {

    const { movieName, releaseYear, image } = this.props.list

    return (
      <div className="box">
        <div className="box_img">
          <img src={image} alt={movieName} />
        </div>
        <div className="box_text">
          <p>{movieName}</p>
          <p> - {releaseYear} -</p>
        </div>
      </div>
    );
  }
}

export default Filme;