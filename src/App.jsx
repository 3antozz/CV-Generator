import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Picture from "./components/Picture";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Forms from "./components/Forms";

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

  function educationButton () {
    setEducationOpen(!educationOpen);
  }

  function educationHandler (event, elementId, obj) {
    event.preventDefault();
    setEducation(education.map((item) => item.id === elementId ? {...item, ...obj} : item))
  }

  function workButton () {
    setWorkOpen(!workOpen);
  }

  function workHandler (event, elementId, obj) {
    event.preventDefault();
    setWork(work.map((item) => item.id === elementId ? {...item, ...obj} : item))
  }

  function contactHandler (event, obj) {
    event.preventDefault();
    setContact({...contact, ...obj});
  }


  function aboutHandler (event, obj) {
    event.preventDefault();
    setAbout({...about, ...obj});
  }
  return (
    <div className="container">
      <Forms aboutValues={about} aboutChange={aboutHandler} contactValues={contact} contactChange={contactHandler} educationValues={education} educationOpen={educationOpen} setEducation={educationButton} educationChange={educationHandler} workValues={work} workOpen={workOpen} setWork={workButton} workChange={workHandler} />
      <div className="resume">
        <div className="left">
          <Picture />
          <Contact values={contact} />
          <Skills />
          <Languages />
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
