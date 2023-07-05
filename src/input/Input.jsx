import React, { useState } from 'react'
import './Input.css'
import Cards from '../Cards/Cards';

const Input = () => {

    const RegistrationForm = () => {
        const [students, setStudents] = useState([]);

        const [formData, setFormData] = useState({
            name: '',
            email: '',
            website: ''
            // gender: '',
            // skills: ''
        });

        const handleChange = (event) => {
            const { name, value } = event.target;
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value
            }));
        };

        const handleSubmit = (event) => {
            event.preventDefault();
            const newStudent = {...formData };
            setStudents((prevStudents) => [...prevStudents, newStudent]);
            setFormData({
                name: '',
                email: '',
                website: ''
                // gender: '',
                // skills: ''
            });
        };

        // const [name, setName] = useState([]);

        // const [email, setEmail] = useState([]);

        // const [website, setWebsite] = useState([]);

        // const [gender, setGender] = useState([]);

        // const [skills, setSkills] = useState([]);

        // const handleName = (e) => {
        //     setName(prev => [...prev, e.target.value])
        // }

        // const handleEmail = () => {
        //     setEmail(prev => [...prev, e.target.value])
        // }

        // const handleWebsite = () => {
        //     setWebsite(prev => [...prev, e.target.value])
        // }

        // const handleGender = () => {
        //     setGender(prev => [...prev, e.target.value])
    }

    return (

        <div className='input'>
            <form>
                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                        Name
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="inputPassword3"
                            placeholder="Name"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                        Email
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="email"
                            className="form-control"
                            id="inputEmail3"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                        />
                    </div>

                </div>
                <div className="form-group row">
                    <label htmlFor="inputText3" className="col-sm-2 col-form-label">
                        Website
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="inputText3"
                            placeholder="Website Link"
                            name="website"
                            onChange={handleChange}
                        />
                    </div>

                </div>
                <fieldset className="form-group">
                    <div className="row">
                        <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gridRadios"
                                    id="gridRadios1"
                                    defaultValue="option1"
                                    defaultChecked=""
                                />
                                <label className="form-check-label" htmlFor="gridRadios1">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gridRadios"
                                    id="gridRadios2"
                                    defaultValue="option2"
                                />
                                <label className="form-check-label" htmlFor="gridRadios2">
                                    Female
                                </label>
                            </div>
                            <div className="form-check disabled">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gridRadios"
                                    id="gridRadios3"
                                    defaultValue="option3"
                                    disabled=""
                                />
                                <label className="form-check-label" htmlFor="gridRadios3">
                                    Other
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div className="form-group row">
                    <div className="col-sm-2">Skills</div>
                    <div className="col-sm-10 checks">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                HTML
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                CSS
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                JS
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                            Enroll
                        </button>
                    </div>
                </div>
            </form>


            {/* <div className="display">
                {
                    students.map((student) => {
                        <Cards />
                    })
                }
            </div> */}
        </div>
    )
}

export default Input
