import { useState } from "react";
import "./Resume.css";
import './styles/Forms.css'
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
    fullName: 'Yacine Belahadji',
    profession: 'King',
    description: 'elkoko del koko del momo del popo'
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
      id: crypto.randomUUID(),
      major: 'architecture',
      institution: 'epau',
      startDate: '2001-05',
      endDate: '1999-12'
    },
    {
      isOpen: false,
      id: crypto.randomUUID(),
      major: 'architecture',
      institution: 'epau',
      startDate: '2001-05',
      endDate: '1999-12'
    },
    {
      isOpen: false,
      id: crypto.randomUUID(),
      major: 'web dev',
      institution: 'epau',
      startDate: '2001-05',
      endDate: '1999-12'
    }
  ])

  const [workOpen, setWorkOpen] = useState(false)
  const [work, setWork] = useState([
    {
      isOpen: false,
      id: crypto.randomUUID(),
      company: 'google',
      job: 'pdg',
      startDate: '2001-05',
      endDate: '1999-12'
    },
    {
      isOpen: false,
      id: crypto.randomUUID(),
      company: 'google',
      job: 'pdg',
      startDate: '2001-05',
      endDate: '1999-12'
    },
    {
      isOpen: false,
      id: crypto.randomUUID(),
      company: 'google',
      job: 'pdg',
      startDate: '2001-05',
      endDate: '1999-12'
    }
  ])

  const [skillsOpen, setSkillsOpen] = useState(false)
  const [skills, setSkills] = useState([
    {
      id: crypto.randomUUID(),
      name: 'Skill'
    },
    {
      id: crypto.randomUUID(),
      name: 'Skill'
    },
    {
      id: crypto.randomUUID(),
      name: 'Skill'
    }
  ])

  const [languagesOpen, setLanguagesOpen] = useState(false)
  const [languages, setLanguages] = useState([
    {
      id: crypto.randomUUID(),
      name: 'French',
      level: 'Good'
    },
    {
      id: crypto.randomUUID(),
      name: 'French',
      level: 'Good'
    },
    {
      id: crypto.randomUUID(),
      name: 'French',
      level: 'Good'
    }
  ])

  function languagesHandler (event, elementId, obj) {
    event.preventDefault();
    setLanguages((prev) => prev.map((item) => item.id === elementId ? {...item, ...obj} : item))
  }

  function languagesButton () {
    setLanguagesOpen(!skillsOpen);
  }

  function addLanguagesObj(event) {
    event.preventDefault();
    const obj = {
      isOpen: false,
      id: crypto.randomUUID(),
      name: 'Language'
    }
    setLanguages((prev) => [...prev, obj])
  }

  function deleteLanguagesObj(event, elementId) {
    event.preventDefault();
    setLanguages((prev) => prev.filter((element) => element.id !== elementId))
  }

  function skillsHandler (event, elementId, obj) {
    event.preventDefault();
    setSkills((prev) => prev.map((item) => item.id === elementId ? {...item, ...obj} : item))
  }

  function skillsButton () {
    setSkillsOpen(!skillsOpen);
  }

  function addSkillsObj(event) {
    event.preventDefault();
    const obj = {
      isOpen: false,
      id: crypto.randomUUID(),
      name: 'Skill'
    }
    setSkills((prev) => [...prev, obj])
  }

  function deleteSkillsObj(event, elementId) {
    event.preventDefault();
    setSkills((prev) => prev.filter((element) => element.id !== elementId))
  }



  function educationButton () {
    setEducationOpen(!educationOpen);
  }

  function educationHandler (event, elementId, obj) {
    event.preventDefault();
    setEducation((prev) => prev.map((item) => item.id === elementId ? {...item, ...obj} : item))
  }

  function addEducationObj(event) {
    event.preventDefault();
    const obj = {
      isOpen: false,
      id: crypto.randomUUID(),
      major: 'Major',
      institution: '',
      startDate: '2000',
      endDate: '2001'
    }
    setEducation((prev) => [...prev, obj])
  }

  function deleteEducationObj(event, elementId) {
    event.preventDefault();
    setEducation((prev) => prev.filter((element) => element.id !== elementId))
  }

  function addWorkObj(event) {
    event.preventDefault();
    const obj = {
      isOpen: false,
      id: crypto.randomUUID(),
      company: '',
      job: 'Masterbaiter',
      startDate: '2000',
      endDate: '2001'
    }
    setWork((prev) => [...prev, obj])
  }

  function deleteWorkObj(event, elementId) {
    event.preventDefault();
    setWork((prev) => prev.filter((element) => element.id !== elementId))
  }

  function workButton () {
    setWorkOpen(!workOpen);
  }

  function workHandler (event, elementId, obj) {
    event.preventDefault();
    setWork((prev) => prev.map((item) => item.id === elementId ? {...item, ...obj} : item))
  }

  function contactHandler (event, obj) {
    event.preventDefault();
    setContact((prev) => ({...prev, ...obj}));
  }


  function aboutHandler (event, obj) {
    event.preventDefault();
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
          <About values={about}/>
          <Education values={education}/>
          <Work values={work} />
        </div>
      </div>
    </div>
  );
}

export default App;
