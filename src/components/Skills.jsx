import SkillCard from "./SkillCard";
import { skills } from "../data";

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
    <section className=" bg-white py-6" id="skills">
      <div className=" w-5/6 mx-auto ">
        <h2 className=" font-ZCOOL-XiaoWei text-6xl text-center">Skills</h2>
        <div className="flex flex-wrap space-y-12 justify-between">
          {skills.map(createSkillCard)}
        </div>
      </div>
    </section>
  );
}

export default Skills;
