import React, { Component } from 'react';
// import data from '../data/data.json';
import { Link } from 'react-router-dom';

export default class SingleEpisode extends Component {  

  render() {
    // console.log(this.props.location.state.item)
    const title = this.props.location.state.item;
    const desc = this.props.location.state.desc;
    const imgs = this.props.location.state.imgs;
    const main_char = this.props.location.state.main_char;

    const main_char_actors = main_char.map((item, index) => {
      return (
        <div key={index}>
          <button className="btn btn-dark mt-4 text-warning myBtn">{item}</button>
        </div>
      )
    })

    console.log(this.props)

    return (
      <div>
        <section className="welcome-single-episode">
          <img src={imgs} alt={title} />
          <h1 className="welcome__title-single-episode">{title}</h1>
        </section>

        <div id="posters-wrapper" className="container">
          <div className="row">
            
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-header text-center"><h4>About the episode</h4></div>
                <div className="card-body">
                  {desc}
                  <div><Link to="/" className="btn btn-dark btn-block mt-4 text-warning myBtn">Back</Link></div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <h4 className="text-center">Main Characters</h4>
              {main_char_actors}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
