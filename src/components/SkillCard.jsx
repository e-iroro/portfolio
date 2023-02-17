function SkillCard(props) {
  return (
    <div className=" mt-12 mb-16 hover:cursor-pointer hover:scale-110 transition duration-300 ease-in-out  mx-auto md:mx-0">
      <img width={props.width} alt={props.alt} src={props.src} />
      <p className=" text-center font-open-sans text-xl mt-4 ">{props.name}</p>
    </div>
  );
}

export default SkillCard;
