import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./Resume.css";
import './styles/Forms.css';
import './App.css';
import Header from "./components/Header/Header";
import About from "./components/About/About";
import AboutForm from "./components/About/About-Form";
import Picture from "./components/Picture";
import Contact from "./components/Contact/Contact";
import ContactForm from "./components/Contact/Contact-Form";
import Education from "./components/Education/Education";
import EducationForm from "./components/Education/Education-Form";
import Work from "./components/Work/Work";
import WorkForm from "./components/Work/Work-Form";
import Skills from "./components/Skills/Skills";
import SkillsForm from "./components/Skills/Skills-Form";
import Languages from "./components/Languages/Languages";
import LanguagesForm from "./components/Languages/Languages-Form";

function App() {
  const [about, setAbout] = useState({
    isOpen: false,
    fullName: 'Yacine Antuzaa',
    profession: 'Fullstack Web Developer',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet ullam incidunt corrupti perspiciatis, nesciunt quod corporis quisquam quia natus voluptas, eum delectus modi, consequatur suscipit impedit molestias earum recusandae eligendi.'
  })
  const [contact, setContact] = useState({
    isOpen: false,
    phone: '555-555-5555',
    email: 'koko@khra.dz',
    address: 'Khrayciya',
    linkedin: '@gordon'
  })

  const [educationOpen, setEducationOpen] = useState(false)

  const [education, setEducation] = useState([
    {
      isOpen: false,
      id: uuidv4(),
      major: 'Enter Your Major',
      institution: 'Name of Institution',
      startDate: '2001-05',
      endDate: '1999-12',
      isPresent: false
    },
    {
      isOpen: false,
      id: uuidv4(),
      major: 'Enter Your Major',
      institution: 'Name of Institution',
      startDate: '2001-05',
      endDate: '1999-12',
      isPresent: false
    }
  ])

  const [workOpen, setWorkOpen] = useState(false)
  const [work, setWork] = useState([
    {
      isOpen: false,
      id: uuidv4(),
      company: 'Company Name',
      job: 'Job Position',
      description: 'job position description',
      startDate: '2001-05',
      endDate: '1999-12',
      isPresent: false
    },
    {
      isOpen: false,
      id: uuidv4(),
      company: 'Company Name',
      job: 'Job Position',
      description: 'job position description',
      startDate: '2001-05',
      endDate: '1999-12',
      isPresent: false
    },
    {
      isOpen: false,
      id: uuidv4(),
      company: 'Company Name',
      job: 'Job Position',
      description: 'job position description',
      startDate: '2001-05',
      endDate: '1999-12',
      isPresent: false
    }
  ])

  const [skillsOpen, setSkillsOpen] = useState(false)
  const [skills, setSkills] = useState([
    {
      id: uuidv4(),
      name: 'Ketchup'
    },
    {
      id: uuidv4(),
      name: 'Desing'
    },
    {
      id: uuidv4(),
      name: 'Studio'
    },
    {
      id: uuidv4(),
      name: 'Skill'
    },
    {
      id: uuidv4(),
      name: 'Skill'
    },
  ])

  const [languagesOpen, setLanguagesOpen] = useState(false)
  const [languages, setLanguages] = useState([
    {
      id: uuidv4(),
      name: 'Amazigh',
      level: 'Terrible'
    },
    {
      id: uuidv4(),
      name: 'French',
      level: 'Good'
    },
    {
      id: uuidv4(),
      name: 'English',
      level: 'Native'
    }
  ])

  function languagesHandler (elementId, obj) {
    setLanguages((prev) => prev.map((item) => item.id === elementId ? {...item, ...obj} : item))
  }

  function languagesButton () {
    setLanguagesOpen(!languagesOpen);
  }

  function addLanguagesObj() {
    const obj = {
      isOpen: false,
      id: uuidv4(),
      name: 'Language',
      level: 'Native'
    }
    setLanguages((prev) => [...prev, obj])
  }

  function deleteLanguagesObj(elementId) {
    setLanguages((prev) => prev.filter((element) => element.id !== elementId))
  }

  function skillsHandler (elementId, obj) {
    setSkills((prev) => prev.map((item) => item.id === elementId ? {...item, ...obj} : item))
  }

  function skillsButton () {
    setSkillsOpen(!skillsOpen);
  }

  function addSkillsObj() {
    const obj = {
      isOpen: false,
      id: uuidv4(),
      name: 'Skill'
    }
    setSkills((prev) => [...prev, obj])
  }

  function deleteSkillsObj(elementId) {
    setSkills((prev) => prev.filter((element) => element.id !== elementId))
  }



  function educationButton () {
    setEducationOpen(!educationOpen);
  }

  function educationHandler (elementId, obj) {
    setEducation((prev) => prev.map((item) => item.id === elementId ? {...item, ...obj} : item))
  }

  function addEducationObj() {
    const obj = {
      isOpen: false,
      id: uuidv4(),
      major: 'Enter Your Major',
      institution: 'Name of Institution',
      startDate: '2001-05',
      endDate: '1999-12',
      isPresent: false
    }
    setEducation((prev) => [...prev, obj])
  }

  function deleteEducationObj(elementId) {
    setEducation((prev) => prev.filter((element) => element.id !== elementId))
  }

  function addWorkObj() {
    const obj = {
      isOpen: false,
      id: uuidv4(),
      company: 'Company Name',
      job: 'Job Position',
      description: 'job position description',
      startDate: '2001-05',
      endDate: '1999-12',
      isPresent: false
    }
    setWork((prev) => [...prev, obj])
  }

  function deleteWorkObj(elementId) {
    setWork((prev) => prev.filter((element) => element.id !== elementId))
  }

  function workButton () {
    setWorkOpen(!workOpen);
  }

  function workHandler (elementId, obj) {
    setWork((prev) => prev.map((item) => item.id === elementId ? {...item, ...obj} : item))
  }

  function contactHandler (obj) {
    setContact((prev) => ({...prev, ...obj}));
  }


  function aboutHandler (obj) {
    setAbout((prev) => ({...prev, ...obj}));
  }
  return (
    <div className="container">
      <div className="forms">
        <AboutForm aboutValues={about} aboutChange={aboutHandler} />
        <ContactForm contactValues={contact} contactChange={contactHandler} />
        <EducationForm educationValues={education} educationOpen={educationOpen} setEducation={educationButton} educationChange={educationHandler} addEducation={addEducationObj} removeEducation={deleteEducationObj}/>
        <WorkForm workValues={work} workOpen={workOpen} setWork={workButton} workChange={workHandler} addWork={addWorkObj} removeWork={deleteWorkObj} />
        <SkillsForm skillsValues={skills} skillsOpen={skillsOpen} setSkills={skillsButton} skillsChange={skillsHandler} addSkills={addSkillsObj} removeSkills={deleteSkillsObj} />
        <LanguagesForm languagesValues={languages} languagesOpen={languagesOpen} setLanguages={languagesButton} languagesChange={languagesHandler} addLanguages={addLanguagesObj} removeLanguages={deleteLanguagesObj}/>
      </div>
      <div className="resume">
        <div className="left">
          <Picture />
          <Contact values={contact} />
          <Skills values={skills} />
          <Languages values={languages} />
        </div>
        <div className="right">
          <Header values={about}/>
          <About values={about}/>
          <Education values={education}/>
          <Work values={work} />
        </div>
      </div>
    </div>
  );
}

export default App;
