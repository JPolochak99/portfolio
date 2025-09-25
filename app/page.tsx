"use client";

// 1️ FontAwesome library setup must come first
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// 2️ React
import React, { useState, useEffect } from "react";

// 3️ CSS
import styles from "./page.module.css";

import 'aos/dist/aos.css';

// 4️ Other libraries
import AOS from 'aos';
import { faInstagram, faCss3Alt, faSquareLinkedin, faHtml5, faSquareJs, faPhp, faPython, faGithub, faLinux, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faFileLines, faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import { faFileExcel, faFilePowerpoint } from '@fortawesome/free-regular-svg-icons';

// 5️⃣ Components
import Lanyard from "../components/Lanyard";
import TextType from "../components/TextType";
import Carousel from "../components/carousel";
import ElectricBorder from '../components/ElectricBorder';
import DomeGallery from '../components/DomeGallery';

import Preloader from './preloader';


export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);



  useEffect(() => {
    
    AOS.init({
      offset: 120,
      duration: 400,
      easing: 'ease',
      once: false,
      mirror: false,
    });

    const handleLoad = () => AOS.refresh();
    window.addEventListener('load', handleLoad);
    return() => window.removeEventListener('load', handleLoad);
  }, []);

  if (loading) return <Preloader />;

  
  return (
    <div className={styles.page} id="home">
      <main className={styles.main}>
         {/* ------------------------------------------------------------ Nav Section ------------------------------------------------------------ */}
        <div className={styles.nav} data-aos="fade-right" data-aos-duration="1000">
          <div className={styles.logo}>
            <img src="/assets/JpLogo.png"></img>
          </div>
          <div className={styles.links}>
            <a href="#home" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="500">Home</a>
            <a href="#aboutMe" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="600">About Me</a>
            <a href="#skills" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="700">Skills</a>
            <a href="#projects" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="800">Projects</a>
          </div>
          <div className={styles.contact} data-aos="fade-right" data-aos-duration="1500" data-aos-delay="900">
            <button className={styles.contactMeButton} onClick={() =>setIsContactOpen(true)}>Contact Me</button>
          </div>
        </div>

        <div className={styles.landingArea}>
          <div className={styles.leftSection}>
           {/* ------------------------------------------------------------ Text Next to Center Circle Section ------------------------------------------------------------ */}
            <div className={styles.myText}>
              <div data-aos="fade-right" data-aos-duration="2000" data-aos-delay="1500">
                <div className={styles.greetingWrapper}>
                  <p><span className={styles.greeting}> Hello, my name is</span></p> <span className={styles.line}></span>
                </div>
                <div className={styles.personalInfo}>
                  <h1>Jonathan Polochak</h1>
                  <p>Majoring in <span className={styles.teal}>Information Technology</span></p>
                  <TextType 
                    text={["I'm a student at Coastal Carolina University", "I am in my junior year."]}
                    typingSpeed={75}
                    pauseDuration={2500}
                    showCursor={true}
                    cursorCharacter="|"
                  />
                </div>
                <div className={styles.careerLinks}>
                  <p>Career Links</p>
                  <div className={styles.icons}>
                    <a href="assets/Resume.pdf" target="_blank" rel="noopener noreferrer" title="Resume"><FontAwesomeIcon icon={faFileLines} /></a>
                    <a  href="https://www.linkedin.com/in/jonathan-polochak-a84a6b386/" title="Linked In"><FontAwesomeIcon icon={faSquareLinkedin} /></a>
                    <a  href="https://github.com/JPolochak99" title="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
                  </div>
                </div> 
              </div>
            </div>
          </div>


          {/* ------------------------------------------------------------ Center Circle & Picture Section ------------------------------------------------------------ */}  
        <div className={styles.middleSection} data-aos="zoom-in" data-aos-duration="2000"  data-aos-delay="1500">
        <div className={styles.mainPictureWrapper}>
          
          
          <img src="/assets/blackTieCircle2.png" alt="Me" />
        </div>
        
        </div>
        <div className={styles.rightSection} >
          
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </div>
        </div>
               
        

         {/* ------------------------------------------------------------ About Me Section ------------------------------------------------------------ */}
        <section id="aboutMe">
          <div className={styles.aboutMeContainer} >
            <div className={styles.aboutMeText} data-aos="fade-right"> 
              <h1>About Me</h1>
              <p>My name is Jonathan Polochak, I am studying computer science at Coastal Carolina University. My short term goal is to find a summer 2026 intership in the Computer Science field. My long term goal is to become a front end developer. I enjoy combining creativity with problem-solving, and front-end development allows me to bring ideas to life visually while also focusing on user experience. In my free time, I work on personal projects such as building responsive websites and designing digital graphics to sharpen my skills. I am excited to continue learning and building real-world projects that will prepare me for my future career.</p>
            </div>
            <div className={styles.aboutMePictureContainer}>
              <div className={styles.aboutMePicture}>
                <img src="../../assets/blueTie.png"></img>
                </div>
            </div>
          </div>



        </section>

         {/* ------------------------------------------------------------ Skill Section ------------------------------------------------------------ */}
        <div className={styles.skills} data-aos="fade-in" data-aos-duration="1000">

        <section  id="skills">
          <div className={styles.skillsTitle}>
            <p>Technical</p>
            
            <TextType 
              text={["Languages", "Softwares", "Frameworks"]}
              typingSpeed={75}
              pauseDuration={2500}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>  

          <div className={styles.skillGrid}>
            <div className={styles.gridElements}>
              <div className={styles.iconTextCombo}>
                <FontAwesomeIcon icon={faHtml5} className={styles.skillIcon} />
                <h2>HTML</h2>
              </div>
              <div className={styles.skillLevel}>
                <p>Advanced</p>
              </div>
            </div>

            <div className={styles.gridElements}>
              <div className={styles.iconTextCombo}>
                <FontAwesomeIcon icon={faCss3Alt} className={styles.skillIcon} />
                <h2>CSS</h2>
              </div>
              <div className={styles.skillLevel}>
                <p>Advanced</p>
              </div>
            </div>

            <div className={styles.gridElements}>
              <div className={styles.iconTextCombo}>
                <FontAwesomeIcon icon={faSquareJs} className={styles.skillIcon} />
                <h2>JavaScript</h2>
              </div>
              <div className={styles.skillLevel}>
                <p>Intermediate</p>
              </div>
            </div>

            <div className={styles.gridElements}>
              <div className={styles.iconTextCombo}>
                <FontAwesomeIcon icon={faPhp} className={styles.skillIcon} />
                <h2>PHP</h2>
              </div>
              <div className={styles.skillLevel}>
                <p>Intermediate</p>
              </div>
            </div>
            
            <div className={styles.gridElements}>
              <div className={styles.iconTextCombo}>
                <FontAwesomeIcon icon={faDatabase} className={styles.skillIcon}/>
                <h2>SQL</h2>
              </div>
              <div className={styles.skillLevel}>
                <p>Intermediate</p>
              </div>
            </div>

            <div className={styles.gridElements}>
              <div className={styles.iconTextCombo}>
                <FontAwesomeIcon icon={faPython} className={styles.skillIcon}/>
                <h2>Python</h2>
              </div>
              <div className={styles.skillLevel}>
                <p>Beginner</p>
              </div>
            </div>

            <div className={styles.gridElements}>
              <div className={styles.iconTextCombo}>
                <FontAwesomeIcon icon={faGithub} className={styles.skillIcon}/>
                <h2>GitHub</h2>
              </div>
              <div className={styles.skillLevel}>
                <p>Beginnger</p>
              </div>
            </div>

            <div className={styles.gridElements}>
                <div className={styles.iconTextCombo}>
                  <FontAwesomeIcon icon={faLinux} className={styles.skillIcon} />
                  <h2>Linux</h2>
                </div>
                <div className={styles.skillLevel}>
                  <p>Intermediate</p>
                </div>
            </div>

              <div className={styles.gridElements}>
                <div className={styles.iconTextCombo}>
                  <FontAwesomeIcon icon={faReact} className={styles.skillIcon} />
                  <h2>React</h2>
                </div>
                <div className={styles.skillLevel}>
                  <p>Intermediate</p>
                </div>
              </div>

              <div className={styles.gridElements}>
                <div className={styles.iconTextCombo}>
                  <FontAwesomeIcon icon={faFileExcel} className={styles.skillIcon}/>
                  <h2>Excel</h2>
                </div>
                <div className={styles.skillLevel}>
                  <p>Advanced</p>
                </div>
              </div>

              <div className={styles.gridElements}>
                <div className={styles.iconTextCombo}>
                  <FontAwesomeIcon icon={faFilePowerpoint} className={styles.skillIcon} />
                  <h2>Powerpoint</h2>
                </div>
                <div className={styles.skillLevel}>
                  <p>Advanced</p>
                </div>
              </div>

              <div className={styles.gridElements}>
                <div className={styles.iconTextCombo}>
                  <h2>Photoshop</h2>
                </div>
                <div className={styles.skillLevel}>
                  <p>Advanced</p>
                </div>
              </div>
          </div>
               
        
        </section>
    </div>
    

        {/* ------------------------------------------------------------ Project Section ------------------------------------------------------------ */}
        <section id="projects">
          <div className={styles.projectContainer}>
            <hr className={styles.projectHr}></hr>

            <div className={styles.projectTitle}>
              <h1>Projects</h1>
            </div>
          
            <div className={styles.cardContainer}>
              <div className={styles.projectCard}>
                  <h1>Box Battles</h1>

                  <Carousel
                    images={[
                      "/assets/boxBattleHome.png",
                      "/assets/boxBattleDashboard.png",
                      "/assets/boxBattleCreateGame.png"
                    ]}
                  />
                  
                    <div className={styles.about}>

                      <div className={styles.aboutTitle}>
                        <h2>About</h2>
                      </div>

                      <p>Box Battles is a full-stack web application that allows users to create and participate in Super Bowl styled games for both the NFL and NBA. The platform features a real-time game management system, including dynamic team selection, automated score tracking, and live box score updates via the SportsData.io API for NFL games. Users can join or create a game, receive notifications via SMS integration and in-app notifications, and interact with a clean and responsive UI.</p>

                    </div>

                    <div className={styles.used}>
                      <h2>Skills Used</h2>
                      <ul>
                        <li>HTML & CSS</li>
                        <li>PHP</li>
                        <li>JavaScript</li>
                        <li>API Intergration</li>
                        <li>Authentication & Sessions</li>
                        <li>Database Design</li>
                        <li>SQL</li>
                      </ul>
                    </div>

              </div>

              <div className={styles.projectCard}>
                  <h1>Graphics</h1>
                    <div className={styles.hobbiePicDome}>
                      <div style={{ width: '100%', height: '100%' }}>
                        <DomeGallery />
                      </div>
                    </div>
              </div>

              <div className={styles.projectCard}>
                  <h3>Box Battles</h3>

                  <Carousel
                    images={[
                      "/assets/boxBattleHome.png",
                      "/assets/boxBattleDashboard.png",
                      "/assets/boxBattleCreateGame.png"
                    ]}
                  />
              </div>

            </div>
          </div>
        </section>

        


      <hr className={styles.projectHr}></hr>
      


      <footer className={styles.footer} >
        <div className={styles.footerContainer} data-aos="fade-down">
                  <div className={styles.footerImgContainer}>
                    <img src="assets/JpLogo.png"></img>
                  </div>

                  <div className={styles.footerPageLinks}>
                      <a href="#home">Home</a>
                      <a href="#aboutMe">About Me</a>
                      <a href="#skills">Skills</a>
                      <a href="#projects">Projects</a>
                  </div>

                  <div className={styles.footerSocials}>
                  <a href="https://www.instagram.com/jonathanpolochak/"><FontAwesomeIcon icon={faInstagram} /></a>
                  <a  href="https://www.linkedin.com/in/jonathan-polochak-a84a6b386/"><FontAwesomeIcon icon={faSquareLinkedin} /></a>
                  <a  href="https://github.com/JPolochak99"><FontAwesomeIcon icon={faGithub} /></a>
                  </div>

                  <div className={styles.footerResume}>
                    
                    <p><a href="assets/Resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a> | <a href="assets/Resume.pdf" download="Jonathan_Polochak_Resume.pdf">Download Resume</a></p>
                  </div>

                  <div className={styles.location}>
                    
                    <p>Long Island NY | Conway South Carolina</p>
                  </div>

                  <div className={styles.copyRight}>
                    <hr className={styles.copyRightHr}></hr>
                    <p> Copyright &copy; | Jonathan Polochak | 2025</p>
                  </div>
            </div>     
      </footer>
                  


        {isContactOpen && (
          
          <div
            className={styles.contactModalOverlay}
            onClick={(e) => {
              if (e.target === e.currentTarget){
                setIsContactOpen(false);
              }
            }}
             
          >
            <ElectricBorder
          color="#7df9ff"
          speed={1}
          chaos={0.5}
          thickness={5}
          style={{ borderRadius: 16 }}
        >
            <div
              className={styles.contactModalBox}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeModalBtn} onClick={() => setIsContactOpen(false)}><FontAwesomeIcon icon={faCircleXmark} /></button>
              <h2>Contact Me</h2>
              <form 
                onSubmit={async (e) => {
                  e.preventDefault();

                  const form = e.currentTarget;
                  const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                  const message = (form.elements.namedItem("message") as HTMLInputElement).value;
                
                  try{
                    const res = await fetch("/api/send-email", {
                      method: "POST",
                      headers: { "Content-Type": "application/json"},
                      body: JSON.stringify({name, email, message}),
                    });

                    const data = await res.json();
                    if (data.success) {
                      alert("message sent");
                      form.reset();
                      setIsContactOpen(false);
                    } else {
                      alert("failed to send message");
                    }
                  } catch (err){
                    console.log(err);
                    alert("error sending message");
                  }
                }
                  
                }
                  >

                

                <div className={styles.inputGroup}>
                  <input type="text" placeholder="" name="name"></input>
                  <label>Your Name</label>
                </div>
                
                <div className={styles.inputGroup}>
                  <input type="email" placeholder="" name="email"></input>
                  <label>Your Email</label>
                </div>
                
                <div className={styles.inputGroup}>
                  <textarea id="message" placeholder="" rows={5} name="message"></textarea>
                  <label className={styles.messageLabel}>Your Message</label>
                </div>
                
                <div className={styles.submitBtnContainer}>
                  <button className={styles.submitBtn} type="submit">Send Message</button>
                </div>
              </form>
              
            </div>
            </ElectricBorder>
          </div>
          


        )}
      </main>
    </div>
    
  );
}