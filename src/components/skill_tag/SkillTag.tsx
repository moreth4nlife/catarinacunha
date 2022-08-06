import React from 'react'

interface SkillTagProps {
  label: string;
}

const SkillTag = (props: SkillTagProps) => {
  const { label } = props;

  return (
    <div style={{
      margin: "0 14px 0 14px",
      border: "1px solid var(--grey)",
      borderRadius: "10px",
      padding: "12px 30px",
      fontSize: "20px"
    }}>
      {label}
    </div>
  )
}

export default SkillTag