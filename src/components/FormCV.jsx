import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormCV = () => {
    const styles = {
        formContainer: {
            maxWidth: '600px',
            margin: 'auto',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '10px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        },
        header: {
            textAlign: 'center',
            marginBottom: '20px',
        },
        inputGroup: {
            marginBottom: '15px',
            marginRight: '15px'
        },
        label: {
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'bold',
        },
        input: {
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
        },
        button: {
            marginTop: '10px',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#007BFF',
            color: '#fff',
            cursor: 'pointer',
        },
        buttonAdd: {
            backgroundColor: '#28a745',
        },
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [linkedin, setLink] = useState('');
    const [jobtitle, setJob] = useState('');
    const [company, setComper] = useState('');
    const [responsibilities, setRespo] = useState('');
    const [degree, setDegree] = useState('');
    const [institution, setInsti] = useState('');
    const [years, setYears] = useState('');
    const [skills, setSkills] = useState('');
    const [skillsList, setSkillsList] = useState([]);
    const [responsibilitiesList, setRespoList] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/CVhome', {
            state: {
                name,
                email,
                phone,
                linkedin,
                jobtitle,
                company,
                degree,
                institution,
                years,
                skillsList,
                responsibilitiesList
            }
        });
    };

    const skillclick = () => {
        if (skills.trim() !== '') { 
            setSkillsList([...skillsList, skills]); 
            setSkills(''); 
        }
    };

    const respoclick = () => {
        if (responsibilities.trim() !== '') { 
            setRespoList([...responsibilitiesList, responsibilities]); 
            setRespo(''); 
        }
    };

    return (
        <form style={styles.formContainer} onSubmit={handleSubmit}>
            <h2 style={styles.header}>CV Input Form</h2>

            <div style={styles.inputGroup}>
                <label style={styles.label} htmlFor="name">Name:</label>
                <input style={styles.input} type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div style={styles.inputGroup}>
                <label style={styles.label} htmlFor="email">Email:</label>
                <input style={styles.input} type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div style={styles.inputGroup}>
                <label style={styles.label} htmlFor="phone">Phone:</label>
                <input style={styles.input} type="text" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>

            <div style={styles.inputGroup}>
                <label style={styles.label} htmlFor="linkedin">LinkedIn:</label>
                <input style={styles.input} type="text" id="linkedin" name="linkedin" value={linkedin} onChange={(e) => setLink(e.target.value)} />
            </div>

            <h3>Experience</h3>
            <div id="experience">
                <div className="experience-item" style={styles.inputGroup}>
                    <label style={styles.label} htmlFor="jobTitle">Job Title:</label>
                    <input style={styles.input} type="text" id="jobTitle" name="jobTitle" value={jobtitle} onChange={(e) => setJob(e.target.value)} />
                    
                    <label style={styles.label} htmlFor="company">Company:</label>
                    <input style={styles.input} type="text" id="company" name="company" value={company} onChange={(e) => setComper(e.target.value)} />
                    
                    <label style={styles.label} htmlFor="responsibilities">Responsibilities:</label>
                    <input style={styles.input} type="text" id="responsibilities" name="responsibilities" value={responsibilities} onChange={(e) => setRespo(e.target.value)} />
                    
                    <ul id='ul'>
                        {responsibilitiesList.map((responsibility, index) => (
                            <li key={index}>{responsibility}</li> 
                        ))}
                    </ul>
                </div>
            </div>
            <button type="button" style={{ ...styles.button, ...styles.buttonAdd }} onClick={respoclick}>Add Responsibility</button>

            <h3>Education</h3>
            <div id="education">
                <div className="education-item" style={styles.inputGroup}>
                    <label style={styles.label} htmlFor="degree">Degree:</label>
                    <input style={styles.input} type="text" id="degree" name="degree" value={degree} onChange={(e) => setDegree(e.target.value)} />
                    
                    <label style={styles.label} htmlFor="institution">Institution:</label>
                    <input style={styles.input} type="text" id="institution" name="institution" value={institution} onChange={(e) => setInsti(e.target.value)} />
                    
                    <label style={styles.label} htmlFor="years">Years:</label>
                    <input style={styles.input} type="text" id="years" name="years" value={years} onChange={(e) => setYears(e.target.value)} />
                </div>
            </div>

            <h3>Skills</h3>
            <div id="skills">
                <div className="skill-item" style={styles.inputGroup}>
                    <label style={styles.label} htmlFor="skill">Skill:</label>
                    <input style={styles.input} type="text" id="skill" name="skill" value={skills} onChange={(e) => setSkills(e.target.value)} />
                    
                    <ul id='ul'>
                        {skillsList.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <button type="button" style={{ ...styles.button, ...styles.buttonAdd }} onClick={skillclick}>Add Skill</button>
        
            <button type="submit" style={styles.button}>Submit</button>
        </form>
    );
};

export default FormCV;