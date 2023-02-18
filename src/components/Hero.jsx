const bag2 =
  "https://res.cloudinary.com/eiroro/image/upload/v1675638675/MY%20PORTFOLIO/Waihou1_sepc8f.svg";
function Hero() {
  return (
    <section
      className="   bg-cover bg-no-repeat bg-blend-darken h-[700px] md:h-[600px] "
      style={{ backgroundImage: `url(${bag2})` }}
    >
      <div className=" md:mx-24 md:w-2/3 text-navy-blue absolute md:top-52  mx-3 top-44">
        <h1 className=" text-3xl font-light ">Hello, my name is</h1>
        <p className=" text-6xl font-semibold my-3 ">Eruoghene Iroro, </p>
        <p className=" text-4xl my-3 "> A Frontend Developer</p>
        <p className=" text-xl ">
          Skilled in constructing efficient web applications and creating
          user-friendly digital products with accessibility and sustainability
          in mind.
        </p>
        <div className=" w-fit my-6 flex justify-between pb-12">
          <a
            className=" mr-6 bg-pink  text-white p-3 h-fit rounded-lg hover:scale-105 transition duration-300 ease-in-out"
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1ihgNi0YiimD5I-UX05R2qSc8Ek2gBbUO/view?usp=sharing"
          >
            View my Resume
          </a>
          <a
            className=" mr-6 border-pink border-2  rounded-lg h-fit p-3  text-pink hover:scale-105 
       
        bg-transparent transition duration-300 ease-in-out"
            target="_blank"
            rel="noreferrer"
            href="mailto:iroroeru@gmail.com"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
export default Hero;
