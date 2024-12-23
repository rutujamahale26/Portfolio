import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <div id="project" className="project container">
      <div className="project-title">
        <h1>My Projects</h1>
        <p>Here are my projects with live links & source code</p>
      </div>
      <div className="row" id="ads">
        <div className="col-md-4">
          <div className="card  rounded">
            <div className="card-image">
              <span className="cards-notify-badge">Full stack</span>
               <img src="assets/Projects/note-app.png" alt="good notes app" />
            </div>
            <div className="card-image-overlay m-auto">
              <span className="card-detail-badge">Node</span>
              <span className="card-detail-badge">Express</span>
              <span className="card-detail-badge">React</span>
              <span className="card-detail-badge">MongoDB</span>
            </div>
            <div className="card-body text-center">
              <div className="ad-title m-auto">
                <h5 className="text-uppercase">
                   Notes App
                </h5>
              </div>
              <a href="#" className="ad-btn">View</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card  rounded">
            <div className="card-image">
              <span className="cards-notify-badge">React App</span>
               <img src="assets/Projects/restaurant.jpg" alt="restaurant app" />
            </div>
            <div className="card-image-overlay m-auto">
              <span className="card-detail-badge">HTML</span>
              <span className="card-detail-badge">Bootstrap</span>
              <span className="card-detail-badge">JavaScript</span>
              <span className="card-detail-badge">React</span>
            </div>
            <div className="card-body text-center">
              <div className="ad-title m-auto">
                <h5 className="text-uppercase">
                   Reastaurant App
                </h5>
              </div>
              <a href="https://restaurant-app-eight-alpha.vercel.app/" target="blank" className="ad-btn">View</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card  rounded">
            <div className="card-image">
              <span className="cards-notify-badge">Mobile App</span>
               <img src="assets/Projects/dental_doc.jpg" alt="good notes app" />
            </div>
            <div className="card-image-overlay m-auto">
              <span className="card-detail-badge">HTML</span>
              <span className="card-detail-badge">Bootstrap</span>
              <span className="card-detail-badge">JavaScript</span>
              <span className="card-detail-badge">React</span>
            </div>
            <div className="card-body text-center">
              <div className="ad-title m-auto">
                <h5 className="text-uppercase">
                   Deantal Doctor 
                </h5>
              </div>
              <a href="https://dental-docter.vercel.app/" target="blank" className="ad-btn">View</a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Project;
