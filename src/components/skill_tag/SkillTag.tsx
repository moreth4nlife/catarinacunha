import React from 'react'
import './_skillTag.css';


interface SkillTagProps {
  label: string;
}

const SkillTag = (props: SkillTagProps) => {
  const { label } = props;

  return (
    <div className="skill--tag">
      {label}
    </div>
  )
}

export default SkillTag