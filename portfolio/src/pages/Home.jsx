import './home.css';
import astronaut from './../assets/png/image-from-rawpixel-id-12158813-png.webp';
import statue from './../assets/png/alex-shuper-zoiROwz_2IU-unsplash.webp';
import twisted_shape from './../assets/png/twisted_shape.png';
import hologram_hand from './../assets/png/simon-lee-ynmPY1MLwMs-unsplash-removebg-preview.webp'
import polished_obj from './../assets/png/rohit-choudhari-S6KP_UX2O9s-unsplash-removebg-preview.webp' 

function Home () {
  return (
    <>
			<div className="hero-container">
        <div className="hero-background"></div>
        <div className="hero-context">
          <div className="hero-left">
            <h1 className="hero-title">Hello, I'm Ali Moeini</h1>
            <p className="hero-text">Software Engineer, Programmer, and Designer</p>
          </div>
          <div className="hero-right">
            <img src={astronaut} alt="a floating astronaut" />
          </div>
        </div>
        <div className="hero-arrow">
          <p className="arrow-text">My skills</p>
          <svg width="16px" height="16px" viewBox="0 -4.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Dribbble-Light-Preview" transform="translate(-220.000000, -6684.000000)" fill="#ffffff">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path d="M164.292308,6524.36583 L164.292308,6524.36583 C163.902564,6524.77071 163.902564,6525.42619 164.292308,6525.83004 L172.555873,6534.39267 C173.33636,6535.20244 174.602528,6535.20244 175.383014,6534.39267 L183.70754,6525.76791 C184.093286,6525.36716 184.098283,6524.71997 183.717533,6524.31405 C183.328789,6523.89985 182.68821,6523.89467 182.29347,6524.30266 L174.676479,6532.19636 C174.285736,6532.60124 173.653152,6532.60124 173.262409,6532.19636 L165.705379,6524.36583 C165.315635,6523.96094 164.683051,6523.96094 164.292308,6524.36583" id="arrow_down-[#338]"></path>
                    </g>
                </g>
          </svg>
        </div>
      </div>
      <section className="skills-container">
          <div id="skill-software" className="skill-wrapper">
            <img src={statue} alt="a silver-golden statue of Michelangelo " className="skill-pic" id="michel"/>
            <div className="skill-context">
              <div className="skill-title">Software<br/>Engineering</div>
              <ul className="skill-text">
                <li>Users & System Requirements Analysis</li>
                <li>Database Architecture Design</li>
                <li>Scrum</li>
              </ul>
            </div>
          </div>
          <div id="skill-backend" className="skill-wrapper right">
            <img src={twisted_shape} alt="a silver-golden statue of Michelangelo " className="skill-pic" id="twisted"/>
            <div className="skill-context right">
              <div className="skill-title">Back-End<br/>Development</div>
              <div className="skill-text two-columns">
                <ul className="skill-text-left">
                  <li>Python</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Sequelize ORM</li>
                  <li>MySQL</li>
                </ul>
                <ul className="skill-text-right">
                  <li>RESTful API</li>
                  <li>Postman</li>
                  <li>Docker</li>
                  <li>Git/GitHub</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="skill-frontend" className="skill-wrapper">
            <img src={hologram_hand} alt="a dripping holographic hand with a metal and color paint material" className="skill-pic" id="dripping-hand"/>
            <div className="skill-context">
              <div className="skill-title">Front-End<br/>Develpment</div>
              <ul className="skill-text">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>
          </div>
          <div id="skill-design" className="skill-wrapper right">
            <img src={polished_obj} alt="Two smooth polished shapes in front of each other" className="skill-pic" id="polished_obj"/>
            <div className="skill-context right">
              <div className="skill-title">Design</div>
              <ul className="skill-text">
                <li>Web And Mobile UI</li>
                <li>Figma</li>
                <li>InVision</li>
                <li>Photoshop</li>
              </ul>
            </div>
          </div>
      </section>
		</>
  );
}

export default Home;