import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Contact() {
  return (
    <section className=" bg-white p-10" id="contact">
      <div className=" bg-yellow p-4 w-fit mx-auto rounded">
        <h2 className=" text-6xl text-center my-4">Reach Out!</h2>
        <p className=" text-xl text-center w-3/4 mx-auto my-2">
          Are You Interested In A Web Developer That Loves Fun Builds And
          Projects? Hit Me Up. I'm Open To Freelance, Intern And Junior
          Developer Roles. 
        </p>
        <div className="  mx-auto w-fit flex flex-col md:flex-row">
          <a
            href="mailto:iroroeru@gmail.com"
            target="_blank"
            rel="noreferrer"
            className=" hover:text-pink text-xl mr-5 hover:cursor-pointer hover:scale-105 flex transition duration-300 ease-in-out"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className={
                "hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out my-auto mr-2"
              }
            />
            <p className=" my-auto">iroroeru@gmail.com</p>
          </a>
          <a
            href="https://github.com/e-iroro"
            target="_blank"
            rel="noreferrer"
            className=" hover:text-pink text-xl mr-5 hover:cursor-pointer hover:scale-105 flex transition duration-300 ease-in-out"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className={
                "hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out my-auto mr-2"
              }
            />
            <p className=" my-auto">e-iroro</p>
          </a>
          <a
            href="https://twitter.com/eru_js"
            target="_blank"
            rel="noreferrer"
            className=" hover:text-pink text-xl mr-5 hover:cursor-pointer hover:scale-105 flex transition duration-300 ease-in-out"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className={
                "hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out my-auto mr-2"
              }
            />
            <p className=" my-auto">eru_js</p>
          </a>
          <a
            href="https://www.linkedin.com/in/eruoghene-iroro/"
            target="_blank"
            rel="noreferrer"
            className=" hover:text-pink text-xl mr-5 hover:cursor-pointer hover:scale-105 flex transition duration-300 ease-in-out"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className={
                "hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out my-auto mr-2"
              }
            />
            <p className=" my-auto">Eruoghene Iroro</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
