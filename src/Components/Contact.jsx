import React, { useState } from 'react'

const Contact = () => {

    const initialState = {
        userName: '',
        email: '',
        subject: '',
        message: ''
    };
    const initialErr = {
        userNameErr: '',
        emailErr: '',
        subjectErr: '',
        messageErr: ''
    };

    const [formErr, setFormErr] = useState({});
    const [formValue, setFormValue] = useState(initialState);
    // const [successMsg, setSuccessMsg] = useState('');
    console.log(formValue);

    const handleFormChange = (e) => {
        console.log(e);
        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        });

        // removes Err Message display while typying
        setFormErr({
            ...formErr,
            [name]: ''
        });

    }

    const validate = () => {
        let errors = {};

        if (formValue.userName === "") {
            errors.userNameErr = "Enter User Name!";
        }
        else if (!/^[A-Za-z]{3,}$/.test(formValue.userName)) {
            errors.userNameErr = "User Name contain only letters and at least 3 characters! ";
        }

        if (formValue.email === "") {
            errors.emailErr = "Email is required before submit!";
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formValue.email)) {
            errors.emailErr = 'Enter a valid email!';
        }

        if (formValue.subject === "") {
            errors.subjectErr = "Enter subject!";
        }
        if (formValue.message === "") {
            errors.messageErr = "Enter Your Your Message!";
        }

        setFormErr(errors);
        return Object.keys(errors).length === 0;

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            alert('Message Sent Succfully.');
            setFormValue(initialState);
            setFormErr({});
        }
    }


    return (
        <>
            <div className="container p-4 project_bg " style={{ height: '100vh', alignItems: 'center' }} >
                <div className="row justify-content-center  ">
                    <div className="col-lg-6 mb-4 py-4">
                        <h1 className='text-center text-primary title_heading '>CONTACT US </h1>
                    </div>
                </div>
                <div className="row justify-content-center py-4">

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="card p-3 home_card ">
                                        <h3 className='mb-3 about_description '>DON'T BE SHY!</h3>
                                        <p className='text-justify '>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or  opportunities to be a part of your visions.</p>

                                        <div className="row mt-3">
                                            <div className="col-lg-1 col-md-1 col-sm-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-envelope-open-fill" viewBox="0 0 16 16">
                                                    <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765zM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516M0 13.373l5.693-3.163L0 6.873z" />
                                                </svg>
                                            </div>
                                            <div className="col-lg-9 col-md-9 col-sm-9">
                                                <span className='ms-4'> Mail Me</span>
                                                <p className='ms-4  about_description '>pooonam@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-lg-1 col-md-1 col-sm-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                                </svg>
                                            </div>
                                            <div className="col-lg-9 col-md-9 col-sm-9">
                                                <span className='ms-4'> Call Me</span>
                                                <p className='ms-4 about_description '>9876543210</p>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-5 col-md-6 col-sm-12  px-5">

                        <div className="card p-3 contact_box ">
                            <form autoComplete='off' action='' onSubmit={handleSubmit}>
                                <div className='mb-3'>
                                    <div className="row">

                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <label className='form-label about_description'>Name</label>
                                            <input className='form-control  text_bg ' onChange={handleFormChange} name='userName' value={formValue.userName}  placeholder='Your Name' />
                                            {
                                                formErr.userNameErr &&
                                                <span className='text-danger'>{formErr.userNameErr}</span>
                                            }
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <label className='form-label about_description'>Email</label>
                                            <input className='form-control  text_bg ' onChange={handleFormChange} name="email" value={formValue.email} placeholder='Your Email' />
                                            {
                                                formErr.emailErr &&
                                                <span className='text-danger'>{formErr.emailErr}</span>
                                            }
                                        </div>
                                    </div>

                                </div>

                                <div className="mb-3">
                                    <label className='form-label about_description'>Subject</label>
                                    <textarea className='form-control  text_bg ' onChange={handleFormChange} name='subject' value={formValue.subject} rows={1} placeholder='Your Subject' />
                                    {
                                        formErr.subjectErr &&
                                        <span className='text-danger'>{formErr.subjectErr}</span>
                                    }
                                </div>
                                <div className="mb-3">
                                    <label className='form-label about_description'>Your Message</label>
                                    <textarea className='form-control  text_bg ' onChange={handleFormChange} name='message' value={formValue.message} rows={4} placeholder='Ask Anything' />
                                    {
                                        formErr.messageErr &&
                                        <span className='text-danger'>{formErr.messageErr}</span>
                                    }
                                </div>
                                <div className="mb-2">
                                    <button type='submit' className="btn btn-outline-warning  tools_card w-100 mt-1 text_bg btn_custom about_description  ">SEND MESSAGE</button >
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Contact