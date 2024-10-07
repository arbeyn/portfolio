import React from 'react'
import { skillList } from './skillList'
import SkillCard from './SkillCard'

function Skills() {
  return (
    <div className="bg-bg-secondary py-8">
      <div className="mx-auto mt-10 w-[min(1000px,90%)]">
        <h2 className="text-center font-display text-5xl font-black text-white">
          My skills
        </h2>

        <ul className="my-8 flex flex-wrap justify-center gap-4">
          {skillList.map((item) => SkillCard(item))}
        </ul>
      </div>
    </div>
  )
}

export default Skills
