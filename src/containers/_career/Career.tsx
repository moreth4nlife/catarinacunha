import React from 'react';
import './_career.css';

interface Experience {
  company: string;
  period: string;
  position: string[];
}

interface Education {
  university: string,
  period: string;
  course: string;
}

const experience: Experience[] = [
  {
    company: "Cantinho do Tareco",
    period: "2014 - 2021",
    position: ["Volunteer"]
  },
  {
    company: "PLM",
    period: "2017 - 2020",
    position: ["Apple sales consultant"]
  },
  {
    company: "IdeiasXL",
    period: "2018",
    position: ["Graphic design trainee"],
  },
]

const education: Education[] = [
  {
    university: "Escola Superior das Artes e Design",
    period: "2018 - 2021",
    course: "Masters Degree in Communication Design",
  },
  {
    university: "Faculdade de Engenharia da Universidade do Porto",
    period: "2018",
    course: "Intensive Digital Marketing Course",
  },
  {
    university: "Universidade da Maia",
    period: "2015 - 2018",
    course: "Bachelor Degree in Communication Sciences — Marketing & Advertising",
  },
  {
    university: "Escola de Moda do Porto",
    period: "2012 - 2013",
    course: "Technical-professional course in Fashion Production & Coordination",
  },
]

const Career = () => {

  return (
    <>

      <section className='career-wrapper' id="career">

        <div className='section-title'>
          <h2>My Career</h2>
        </div>

        <div className='career--block left'>
          <h3>Experience</h3>

          <div className='experience--block'>
            {experience.map((exp, i) => {
              return (
                <div key={i}>
                  <h4>{exp.company} /
                    <span style={{ fontWeight: "normal" }}> {exp.period}</span>
                  </h4>
                  {exp.position.map((pos, i) => <p key={i}>{pos}</p>)}
                </div>
              )
            })}
          </div>
        </div>

        <div className='career--block right'>
          <h3>
            Education
          </h3>

          <div className='education--block'>
            {education.map((edu, i) => {
              return (
                <div key={i}>
                  <h4>{edu.university} /
                    <span style={{ fontWeight: "normal" }}> {edu.period}</span>
                  </h4>
                  <p>{edu.course}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>

  )
}

export default Career;