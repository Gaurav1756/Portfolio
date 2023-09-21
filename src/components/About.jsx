import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        {/* <p className="text-xl mt-20">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
          deserunt illum mollitia officiis qui exercitationem perferendis neque
          quasi a recusandae necessitatibus tempora iusto! Blanditiis error
          iste, totam fugiat recusandae rerum laborum perferendis molestiae
          aperiam asperiores nemo. Magni dolor maxime debitis vitae, eaque hic
          ab mollitia voluptatibus, a nostrum eveniet laborum!
        </p>

        <br /> */}

        <p className="text-xl">
        Hello, my name is Gaurav Kumar Senger, and I'm excited to be here to discuss my qualifications as a Full Stack Web developer. I have a strong foundation in web development, with extensive knowledge in HTML, CSS, and JavaScript, which I've used to create interactive and responsive user interfaces. 

I'm also proficient in modern front-end frameworks like React.js, enabling me to build dynamic and efficient web applications. On the back-end, I have experience with Node.js, which allows me to develop robust server-side solutions and APIs.

In addition to my web development skills, I have a background in C++ and MySQL. This combination of languages and databases has allowed me to work on diverse projects, from web applications to software development.Currently I am working on my skills in PHP.

I'm passionate about crafting elegant and user-focused web experiences while ensuring efficient server-side functionality. I believe that a holistic understanding of both front-end and back-end technologies is crucial for delivering high-quality web solutions.

I'm looking forward to discussing how my skills and experience can contribute to your team's success.
        </p>
      </div>
    </div>
  );
};

export default About;
