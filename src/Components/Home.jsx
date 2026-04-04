import React from 'react'
import Image from '../assets/Images/image1.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>

            <div className="container-fluid home_bg" style={{ height: '100vh', alignItems: 'center' }} >
                <div className="row justify-content-center mt-4">
                    <div className="col-lg-4 col-md-6 col-sm-12 justify-content-center mt-5 py-4 px-4" style={{ alignItems: 'center' }}>
                        <div className=" ">
                            <img className='text-center userImg ' src={Image} alt='image' />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 justify-content-center py-4 px-4 mt-5">
                        <div className="card home_card">
                            <h1 className='Main_heading  px-5'>- POONAM RANA
                                <br />
                            </h1>
                            <span className='sub_heading'> Web Developer </span>
                            <p className='px-5 py-3 text-justify ms-5 home_description '>
                                I’m a web developer focused on clean and modern design. <br />
                                I create user-friendly and responsive web experiences. <br />
                                Building solutions that make life simpler and better.
                            </p>

                            <div className="py-4 px-5">
                                <Link to={'/about'} ><button type='btn' className='btn btn-sm btn-outline-primary btn_custom button_navigate '>MORE ABOUT ME  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right ms-3 " viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>  </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section starts */}

            {/* <div className="section" >
                <div className="container-fluid" style={{ height: '100vh', alignItems: 'center' }} >
                    <div className="row">
                        <div className="col-lg-12 bg-primary">
                            <h1>hello</h1>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* About Section Ends */}

        </>
    )
}

export default Home