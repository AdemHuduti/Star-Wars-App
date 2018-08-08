import React, { Component } from 'react'
import data from '../data/data';
import { Link } from 'react-router-dom';

export default class ShowMovie extends Component {
  state = {
    myMovie: data.movies
  }

  render() {
    const { myMovie } = this.state;
    const myData = myMovie.map((item, index) => {
      return (
        <div key={index} className="poster ">
          

            <Link to={{
              pathname: `/SingleEpisode/${item.episode_number}`,
              state: {
                item: item.title,
                desc: item.description,
                imgs: item.hero_image,
                main_char: item.main_characters
              }
            }}>
              <img src={item.poster} alt={item.title} className="img-responsive mb-3"/>
            </Link>

          <div className="poster-overlay">
            <h5> {item.title} </h5>

            <Link to={{
              pathname: `/SingleEpisode/${item.episode_number}`,
              state: {
                item: item.title,
                desc: item.description,
                imgs: item.hero_image,
                main_char: item.main_characters
              }
            }}>
              <button className="btn btn-outline-light">
                Read more 
                <i className="fa fa-arrow-right ml-2"></i>
              </button>
            </Link>
          </div>
        </div>
      )
    });
  
    return (
      <div>
        <h1 className="display-4 text-center mb-4">Episodes</h1>
          <div id="posters-wrapper" className="container">
            {myData}
          </div>
      </div>
    )
  }
}
