import React from 'react'
import {
  Link
} from 'react-router-dom'


const AboutCard = () => {
  return (
<div className="card m-3"Name>
  <h2 className="card-title">Portfolio</h2>
  <hr />
  <div className="row single-post mt-5 no-gutters">
    <div className="card-body">
      <div className="row">
        <div className="col-md-6">
          <a href="https://carlnaza.github.io/parseSuperchargers/">
                <img src="./images/BudgetTesla.png" alt="budget tesla"/>
            <div className="img-overlay">
              <h5 className="bottom-text">Budget Tesla</h5>
            </div>
          </a>
        </div>
        <div className="col-md-6">
          <a href="https://limitless-reef-57804.herokuapp.com/">
            <img src="./images/logo_mrb.png" alt="my recipe box"/>
            <div className="img-overlay">
              <h5 className="bottom-text">My Recipe Box</h5>
            </div>
          </a>
        </div>
        <div className="col-md-6">
          <img src="./images/head_shot.jpg" alt="rubber duck"/>
            <div className="img-overlay">
              <h5 className="bottom-text">Independent Projects</h5>
            </div>
           </div>
          <div className="col-md-6">
              <img src="./images/balloon.jpg" alt="rubber duck"/>
              <div className="img-overlay">
                <h5 className="bottom-text">Balloon Collaboration</h5>
              </div>
           </div>
            <div className="col-md-6">
              <img src="./images/octocat.jpg" alt="rubber duck"/>
                <div class="img-overlay">
                  <h5 class="bottom-text">Octocat Collaboration</h5>
                </div>
            </div>
            </div>
            <div class="col-md-6"></div>
          </div>
        </div>
      </div>
  )
}

export default AboutCard