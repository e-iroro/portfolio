import SkillCard from "./SkillCard";
import skills from "../skills";

function createSkillCard(skill) {
  return (
    <SkillCard
      key={skill.id}
      width={skill.width}
      alt={skill.alt}
      src={skill.src}
      name={skill.name}
    />
  );
}

function Skills() {
  return (
    <section>
      <h2 className=" font-ZCOOL-XiaoWei text-6xl text-center">Skills</h2>
      <div className="flex md:flex-wrap md:flex-row flex-col space-y-20 md:space-y-12 justify-between">
        {skills.map(createSkillCard)}
      </div>
    </section>
  );
}

export default Skills;
