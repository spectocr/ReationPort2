import React from 'react'; 

function Resume() {

return(
<section className="mb-5">
    <h1 className="resume">resume: Cris</h1>
        <hr></hr>
        <div className="row justify-content-center" id="resume">
            <div className="mt-5 pl-5 pr-5">
                some guy who likes to code.
                <p>
                Download my full <a href="https://raw.githubusercontent.com/spectocr/ReationPort2/main/src/assets/BlankResume.jpeg" className="link">resume</a>
                <br></br>
                </p>
            </div>
        </div>

        <div className="justify-content-center mt-5">
            <div id="front-back">
                <h2>front end experience</h2>
                <p>HTML, CSS (Bootstrap, Foundation), JavaScript, jQuery, React.js, IndexedDB</p>
            </div>
    
            <div id="front-back" className="mt-5">
                <h2>back end experience</h2>
                <p>
                Node.js, Express.js, SQL (mySQL), Sequelize, NoSQL (MongoDB, Mongoose), Python, API's (third-party, RESTful, server-side), Templating (Handlebars)
                </p>
            </div>
        </div>
</section>
);
}

export default Resume;