import React from 'react'
import Image2 from '../assets/Images/image2.jpg';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <div className="container-fluid project_bg g-0 " style={{ height: '100vh', alignItems: 'center' }}  >

                <div className="row p-3 g-0 ">
                    {/* <div className="col-lg-16"> */}
                    {/* </div> */}
                    <h1 className='text-center text-primary mt-5 title_heading'>ABOUT ME</h1>
                </div>

                <div className="row  justify-content-center mt-5 mt-4 g-0 ">
                    <div className="col-lg-5 col-md-6 col-sm-12 py-2">
                        <div className="card p-3 home_card ">
                            <h1 className='text-justify about_description '>Personal Information</h1>
                            <ul className='mb-3 about_para '>
                                <li className=''>Name  :  Poonam Rana</li>
                                <li className=''>Phone  : 7500997416     </li>
                                <li className=''>Email : poonam@gmail.com      </li>
                                <li className=''>Nationality : Indian       </li>
                                <li className=''>Graduation : Bachelor of Engineering       </li>
                                <li className=''>Language : English, Hindi, Chhattisgarhi, Marathi     </li>
                                <li className=''>Address : Uttarakhand     </li>
                            </ul>

                            <div className="mb-2 mt-4">
                                <div className="row g-0">
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <button type='submit' className='btn btn-outline-primary  button_navigate ' > DOWNLOAD CV  <span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-down-circle-fill ms-2" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                                        </svg> </span>
                                        </button>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <Link to={'/projects'}>
                                            <button type='submit' className='btn btn-outline-primary ms-4 button_navigate  ' > VIEW PROJECTS
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-right-square-fill ms-2 " viewBox="0 0 16 16">
                                                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4z" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-5   ">
                        <div className=" mt-3">
                            <img className='text-center about_image ' src={Image2} alt='image' />
                        </div>
                    </div>


                </div>

            </div>

            <section className='project_bg '>
                <span className=''>
                    <hr className='divider_rule ' />
                </span>
                <div className="row px-5  justify-content-center g-0 ">
                    <h2 className='text-center text-primary py-3 mb-5 title_heading '>MY SKILLS</h2>
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <p>HTML/CSS</p>
                        <div className="progress mb-4" style={{ width: "500px" }} role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar progress_bar" style={{ width: "90%" }} >90%</div>
                        </div>

                        <p>JAVASCRIPT</p>
                        <div className="progress mb-4" style={{ width: "500px" }} role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar progress_bar" style={{ width: "80%" }} >80%</div>
                        </div>

                        <p>REACT</p>
                        <div className="progress mb-4" style={{ width: "500px" }} role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar progress_bar" style={{ width: "75%" }} >75%</div>
                        </div>

                        <p>NODEJS</p>
                        <div className="progress mb-4" style={{ width: "500px" }} role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar progress_bar" style={{ width: "60%" }} >60%</div>
                        </div>

                    </div>

                    <div className="col-lg-5 col-md-12 col-sm-12 ">

                        <p>COMMUNICATION</p>
                        <div className="progress  mb-4" style={{ width: "500px" }} role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar progress_bar" style={{ width: "85%" }} >85%</div>
                        </div>
                        <p>TEAM WORK</p>
                        <div className="progress  mb-4" style={{ width: "500px" }} role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar progress_bar" style={{ width: "80%" }} >80%</div>
                        </div>
                        <p>PROBLEM SOLVING</p>
                        <div className="progress  mb-4" style={{ width: "500px" }} role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar progress_bar" style={{ width: "75%" }} >75%</div>
                        </div>
                        <p>CREATIVITY</p>
                        <div className="progress  mb-4" style={{ width: "500px" }} role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar progress_bar" style={{ width: "85%" }} >85%</div>
                        </div>

                    </div>

                </div>

                <span className='px-5 '>
                    <hr className='divider_rule ' />
                </span>

                {/* Tools & Technology */}
                <div className="row justify-content-center mb-4 g-0">
                    <div className="col-lg-10 col-md-6 col-sm-12 text-center">
                        <h1 className='title_heading text-primary mb-4'>TOOLS & TECHNOLOGIES</h1>
                        <div className="row py-4">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="card text_bg text-center tools_card p-2">
                                    <img className='mt-2' src='https://icon.icepanel.io/Technology/svg/HTML5.svg' height={50} />
                                    <p className='mt-2 text-white'>HTML5</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="card text_bg text-center tools_card  p-2">
                                    <img className='mt-2' src='https://icon.icepanel.io/Technology/svg/CSS3.svg' height={50} />
                                    <p className='mt-2 text-white'>CSS3</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="card text_bg text-center tools_card p-2">
                                    <img className='mt-2' src='https://icon.icepanel.io/Technology/svg/JavaScript.svg' height={50} />
                                    <p className='mt-2 text-white'>JAVASCRIPT</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="card text_bg text-center tools_card p-2">
                                    <img className='mt-2' src='https://icon.icepanel.io/Technology/svg/Bootstrap.svg' height={50} />
                                    <p className='mt-2 text-white'>BOOTSTRAP</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                                <div className="card text_bg text-center tools_card p-2">
                                    <img className='mt-2' src='https://icon.icepanel.io/Technology/svg/React.svg' height={50} />
                                    <p className='mt-2 text-white'>REACT</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                                <div className="card text_bg text-center tools_card p-2">
                                    <img className='mt-2' src='https://icon.icepanel.io/Technology/svg/Node.js.svg' height={50} />
                                    <p className='mt-2 text-white'>NODEJS</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                                <div className="card text_bg text-center tools_card p-2">
                                    <img className='mt-2' src='https://icon.icepanel.io/Technology/svg/MongoDB.svg' height={50} />
                                    <p className='mt-2 text-white'>MONGODB</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6  mt-4">
                                <div className="card text_bg text-center tools_card p-2">
                                    <img className='mt-2' src='https://icon.icepanel.io/Technology/svg/Visual-Studio-Code-%28VS-Code%29.svg' height={50} />
                                    <p className='mt-2 text-white'>VS CODE</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default About