import React, { useEffect, useState } from 'react'
import Accordion from "react-fast-accordion";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import SkillTag from '../../components/skill_tag/SkillTag';
import './_skills.css';

const skills = [
  {
    title: "Soft skills",
    skills: [
      "Project mannagement",
      "Creative thinking",
      "Detail oriented",
      "Teamworker",
      "Leadership",
      "Autonomy",
      "Curiosity"
    ]
  },
  {
    title: "Marketing & Communication",
    skills: [
      "Technology proficiency",
      "Market analysis & research",
      "Visual marketing",
      "Storytelling",
      "Public speech",
      "Digital marketing",
      "Written & verbal communication"
    ]
  },
  {
    title: "Technical design skills",
    skills: [
      "Design as a problem solver",
      "Information architecture",
      "UX & UI Research",
      "User centered design",
      "Prototyping",
      "Wireframing",
      "Userflow"
    ]
  },
]

const Skills = () => {

  const [prev, setPrev] = useState<any>(skills[0].title);
  const [currentPage, setCurrentPage] = useState(skills[1]);
  const [next, setNext] = useState<any>(skills[2].title);

  function goToPrev() {
    const currIndex = skills.indexOf(currentPage);
    let prevPage;

    if (currIndex === 0) {
      prevPage = skills[skills.length - 1];
    } else {
      prevPage = skills[currIndex - 1];
    }

    setCurrentPage(prevPage);
  }

  function goToNext() {
    const currIndex = skills.indexOf(currentPage);
    let nextPage;
    if (currIndex === skills.length - 1) {
      nextPage = skills[0];
    } else {
      nextPage = skills[currIndex + 1];
    }
    setCurrentPage(nextPage);
  }

  function getPrevLabel() {
    const currentPageIndex = skills.indexOf(currentPage);

    if (currentPageIndex === 0) {
      setPrev(skills[skills.length - 1].title);
      return;
    };

    setPrev(skills[currentPageIndex - 1].title);
  }

  function getNextLabel() {
    const currentPageIndex = skills.indexOf(currentPage);

    if (currentPageIndex === skills.length - 1) {
      setNext(skills[0].title);
      return;
    }

    setNext(skills[currentPageIndex + 1].title);
  }

  useEffect(() => { getPrevLabel(); getNextLabel() }, [currentPage]);

  return (
    <>
      <div className="section-title" id="skills">
        <h2>My skills</h2>
      </div>

      <section className="skills--wrapper">

        <div className="skills--intro left">
          <h3>Just a brief introduction</h3>
          <p>I firmely believe that every single person brings something unique to the table. That being said, my idea is not to show you a generic list of skills.
            <br />
            These are my personal skills.
            <br /><br />
            As you have been learning throughout this page, my course as a professional has just the same amount as a designer as a communicator. </p>
        </div>

        <div className="skills--intro right" role={"img"} aria-label={"emoji_skills"} />
        <div className="skills--block">
          <div
            className="skills--navigation">
            {prev &&
              <div
                className="skills--navigation__button"
                onClick={goToPrev}><HiArrowSmLeft /> {prev}</div>
            }
            <h3>{currentPage.title}</h3>
            {next &&
              <div className="skills--navigation__button" onClick={goToNext}>{next} <HiArrowSmRight /></div>
            }
          </div>
          <div className="skills--list">
            {currentPage.skills.map((skill, index) => <SkillTag label={skill} key={index}></SkillTag>)}
          </div>
        </div>

      </section>
    </>
  )
}

export default Skills;