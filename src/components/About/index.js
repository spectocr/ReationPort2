import React from 'react';

function About() {
    return(
    <section className="title">
      <h1 className="name">about: Cris Spector</h1>
      <hr></hr>
      
      <div className="row justify-content-center">
        <div className="col-10" id="about-section">
            <img className="mb-5" src="https://avatars.githubusercontent.com/u/81635351?s=400&u=5452e8ffb333ac1cf18b740e74ddfb85903423b1&v=4" alt="Cris."/>
        <p>
            Have no fear this is here.
        </p>
        
      <p>
            View full <a href="#/resume" className="link">resume</a>
    </p>
      </div>  
      </div>
    </section> 
)}
  
export default About;