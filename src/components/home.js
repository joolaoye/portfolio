import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Home = () => {
  useEffect(() => {
    const scrollRevealOption = {
      distance: '50px',
      origin: 'bottom',
      duration: 1000,
    };

    // About container
    ScrollReveal().reveal('.about-container h2', {
      ...scrollRevealOption,
    });

    ScrollReveal().reveal('.about-container .about-content', {
      ...scrollRevealOption,
      delay: 500,
    });

    // Contributions container
    ScrollReveal().reveal('.contributions-container h2', {
      ...scrollRevealOption,
    });

    ScrollReveal().reveal('.contributions-container .contributions-content', {
      ...scrollRevealOption,
      delay: 500,
    });

    // Project container
    ScrollReveal().reveal('.project-container h2', {
      ...scrollRevealOption,
    });

    ScrollReveal().reveal('.card', {
      ...scrollRevealOption,
      interval: 500,
    });

    const maxCardHeight = Math.max(
      ...Array.from(document.querySelectorAll('.card')).map(
        (card) => card.offsetHeight
      )
    );

    document.querySelectorAll('.card').forEach((card) => {
      card.style.height = `${maxCardHeight}px`;
    });
  }, []); 

  return (
    <main>
      <div class="about-container" id="about">
            <div>
                <h2>Joshua Olaoye</h2>
            </div>
            <p class="about-content">
                I'm a second-year student studying Computer Science and Cybersecurity at St. Cloud State University.
            </p>
            <p class="about-content">
                Right now, I'm getting into making cool stuff for phones! Specifically, I'm learning how to create apps for Android using a language called Kotlin.
            </p>
            <p class="about-content">
                When I'm not immersed in code, you'll find me crushing it at the gym - not just as a fitness enthusiast but also as part of the team, where I both work and work out.
            </p>
        </div>

        <div class="contributions-container" id="contributions">
            <div>
                <h2>contributions</h2>
            </div>

            <p class="notes">
                Explore projects to which I've contributed, involving collaborative group work.
            </p>

            <div class="contributions-content">
                <div class="project-info">
                    <h4>St. Cloud State University Hackathon Fall 2023</h4>
                    <p class="date">Participant, November 2023</p>
                </div>
                <p class="description">
                Participated in a 48-hour hackathon focused on improving the student experience at St. Cloud State University. Our team developed a course scheduling assistant to optimize General Liberal Education choices, integrating a sophisticated web scraping tool and a tailored algorithm with custom formulas and data parsing logic. 
                This enabled us to efficiently obtain and optimize course schedules, providing students with personalized reports for future semester planning. 
                Addressing a common challenge for SCSU students, our project aimed to simplify the selection of financially sensible and appealing General Liberal Education courses by offering guidance on professors and educational benefits, bringing clarity and value to the course selection process.
                </p>
                <ul class="project-list">
                    <li> Designed and implemented a data processing module bridging the web scraper for data retrieval and the front end for visualization </li>
                    <li> Designed a Python algorithm using regular expressions to process Degree Audit and Transcript text files, transforming raw data into a structured Python Dictionary for easy analysis </li>
                    <li> Designed an algorithm to rank courses for each Goal Area, presenting the information in a JSON format through FAST API for seamless front-end visualization </li>
                </ul>
                <p class="description">
                    My efforts contributed to the project's success and earning the team the Judges Choice award at the Hackathon.
                </p>
            </div>

            <div class="contributions-content">
                <div class="project-info">
                    <h4>Avatar</h4>
                    <p class="date">Open Source Contributor, September 2023 — November 2023</p>
                </div>
                <p class="description">
                    The Avatar project, led by Dr. Calvacanti at St. Cloud State University, leverages Machine Learning for real-time remote drone piloting through brainwave readings. This open-source initiative involves the development of a brain-computer interface. 
                    Explore the project on <a href="https://github.com/3C-SCSU/Avatar">GitHub</a>
                </p>
                <ul class="project-list">
                    <li> Designed and seamlessly integrated a Python-based signaling system into the project's codebase,  employing multithreading for enhanced efficiency </li>
                    <li> Contributed to the project's GitHub repository by performing comprehensive code reviews for pull requests, ensuring code quality and adherence to best practices </li>
                </ul>
                <p class="description">
                    My contributions to the project prevented the automatic landing of the BCI-controlled drone and ensured the integration of clean and high-quality code into the project's codebase.
                </p>
            </div>

            <div class="contributions-content">
                <div class="project-info">
                    <h4>A Better Way to Preserve Endangered Indigenous Languages</h4>
                    <p class="date">Open Source Contributor, March 2023 — November 2023</p>
                </div>
                <p class="description">
                    Professors Ettien Koffi and Mark Petzold from St. Cloud State University are actively employing machine learning technologies to safeguard endangered indigenous languages. Their focus is on developing a Text-to-Speech synthesis tool aimed at revitalizing Betine, an endangered language spoken in Côte d'Ivoire, West Africa.
                    For a deeper insight into their groundbreaking work, you can watch their TEDx talk <a href="https://youtu.be/mYswjYqqaMo?si=1R2OFtVVrDRAIy8D">here</a>.
                </p>
                <ul class="project-list">
                    <li> Designed and implemented a cohesive Python system to capture user audio, identify speech segments through a silence-based algorithm, and extract mel-frequency cepstral coefficients for enabling in-depth audio analysis </li>
                </ul>
                <p class="description">
                    My contribution facilitated the workflow by providing essential data for those involved in developing the Natural Language Processing (NLP) model.
                </p>
            </div>

        </div>
            
            
        <div class="project-container" id="projects">

            <h2>projects</h2>

            <p class="notes">
                This section features some of my selected personal projects.
            </p>

            <div class="project-content">

                <div class="card">
                    <h3> Language Trivia </h3>
                    <p> 
                        An Android trivia game focused on language learning, offering users a choice between French, German, and Spanish. This project provides an entertaining and educational experience through timed quizzes, engaging users in an intellectually stimulating journey to expand their language proficiency.
                    </p>
                    <p> 
                        <span class="tools">Kotlin</span> 
                        <span class="tools">XML</span> 
                        <span class="tools">Android Studio</span>
                    </p>
                    <div class="contact-socials">
                        <a href="https://github.com/joolaoye/LanguageTrivia"><i class="ri-github-fill"></i></a>
                    </div>
                </div>

                <div class="card">
                    <h3> PyChess </h3>
                    <p> 
                        A Python-based chess game developed using the Pygame library. 
                        The game provides essential chess functionalities, including checks, pawn promotion, en passant capture, and castling. 
                        It provides an immersive experience with chess.com-inspired sound effects and an enhanced graphical user interface featuring board highlighting, elevating gameplay and user experience.
                    </p>
                    <p> 
                        <span class="tools">Python</span> 
                        <span class="tools">Pygame</span> 
                    </p>
                    <div class="contact-socials">
                        <a href="https://github.com/joolaoye/PyCHESS"><i class="ri-github-fill"></i></a>
                    </div>
                </div>

                <div class="card">
                    <h3> Breakout Clone </h3>
                    <p> 
                        A Python-based Breakout Clone developed using the Pygame library, the project aims to recreate the retro Breakout game, offering players an immersive and nostalgic gaming experience.
                    </p>
                    <p> 
                        <span class="tools">Python</span> 
                        <span class="tools">Pygame</span> 
                    </p>
                    <div class="contact-socials">
                        <a href="https://github.com/joolaoye/Breakout_Clone"><i class="ri-github-fill"></i></a>
                    </div>
                </div>

                <div class="card">
                    <h3> PyCalculator </h3>
                    <p> 
                        A GUI calculator developed in Python using the tkinter library, inspired by the features of the Casio fx-991ES Plus model. 
                        The calculator's graphical user interface is designed to mirror the Casio model, providing users with an interface that is both familiar and intuitive.  
                        Advanced mathematical functions, including trigonometry, and logarithms, are incorporated into the calculator 
                    </p>
                    <p> 
                        <span class="tools">Python</span> 
                        <span class="tools">Tkinter</span> 
                    </p>
                    <div class="contact-socials">
                        <a href="https://github.com/joolaoye/PyCalculator"><i class="ri-github-fill"></i></a>
                    </div>
                </div>
            </div>

        </div>

        <div class="contact-container"  id="contact">
            <div class="contact-socials">
                <a href="mailto:joshuaolaoye46@gmail.com"><i class="ri-mail-line"></i></a>
                <a href="https://www.linkedin.com/in/joolaoye"><i class="ri-linkedin-fill"></i></a>
                <a href="https://github.com/joolaoye"><i class="ri-github-fill"></i></a>
            </div>
        </div>

    </main>
  );
};

export default Home;
