import React from 'react'

const Projects = () => {
  return (
    <>

      <div className="container-fluid bg-warnig project_bg " style={{ height: '100vh', alignItems: 'center' }}  >
        <div className="row px-5 py-4">
          <h1 className=' text-center text-primary mt-5 mb-3 title_heading '>MY PROJECTS</h1>
        </div>
        <div className="row px-5 py-3  mt-2 justify-content-center">

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card contact_box project_box "  >
              <img src="https://tunis-wordpress-dark.ibthemespro.com/wp-content/uploads/2023/09/project-1.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Portfolio</h5>
                <p className="card-text">A collection of my work focused on clean design and user-friendly web experiences.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card contact_box project_box "  >
              <img src="https://tunis-wordpress-dark.ibthemespro.com/wp-content/uploads/2023/09/project-5.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Contact List Manager</h5>
                <p className="card-text">A Contact List Manager is a web app to add, update, and delete contacts easily. It is built using HTML, CSS, JavaScript, Bootstrap, ReactJS, Node.js, and MongoDB.</p>
                <a href="https://contact-listmanager.netlify.app/" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card contact_box project_box "  >
              <img src="https://tunis-wordpress-dark.ibthemespro.com/wp-content/uploads/2023/09/project-3.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Amazon</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" className="btn btn-primary  ">Go somewhere</a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Projects