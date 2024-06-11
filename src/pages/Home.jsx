import './home.css';
import astronaut from './../assets/png/image-from-rawpixel-id-12158813-png.webp';
import statue from './../assets/png/alex-shuper-zoiROwz_2IU-unsplash.webp';
import twisted_shape from './../assets/png/twisted_shape.png';
import hologram_hand from './../assets/png/simon-lee-ynmPY1MLwMs-unsplash-removebg-preview.webp'
import polished_obj from './../assets/png/rohit-choudhari-S6KP_UX2O9s-unsplash-removebg-preview.webp' 

function Home () {

  function scrollToSkills() {
    const windowHeight = window.innerHeight;
    window.scrollBy(0, ((windowHeight) + windowHeight * 0.1 - window.scrollY) );   // 0.1 = 10vh margin of the container
  }

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
        <div className="hero-arrow" onClick={scrollToSkills}>
          <p className="arrow-text">My skills</p>
          <svg width="16px" height="16px" viewBox="0 -4.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Dribbble-Light-preview" transform="translate(-220.000000, -6684.000000)" fill="#ffffff">
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
          <img src={twisted_shape} alt="a twisted shape" className="skill-pic" id="twisted"/>
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
                <li>JWT</li>
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
              <li>HTML - CSS</li>
              <li></li>
              <li>JavaScript</li>
              <li>React.js</li>
            </ul>
          </div>
        </div>
        <div id="skill-design" className="skill-wrapper right">
          <img src={polished_obj} alt="Two smooth polished shapes in front of each other" className="skill-pic" id="polished_obj"/>
          <div className="skill-context right">
            <div className="skill-title">Design</div>
            <ul className="skill-text">
              <li>Web & Mobile UI</li>
              <li>Figma</li>
              <li>InVision</li>
              <li>Photoshop</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="about-me-wrapper">
          <h2>About Me</h2>
          <div className="about-me-text">
            I'm a young developer with a Bachelor's Degree of Computer Engineering.<br/>
            I consider myself more as a Back-end Developer than a Fullstack.<br/>
            Humanity, honesty, justice, and privacy are the most important things I value.<br/>
            OH, and as a matter of fact, I prefer Tab over Spaces...<br/>
          </div>
      </section>
      <section class="about-me-wrapper contact">
          <h2>Let's <span>Contact</span></h2>
          <div className="social-media-wrapper">
            <a target="_blank"href="https://github.com/moeini-dev">
              <div className="social-app 1">
                <svg width="50px" height="50px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" stroke="#000000">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                  <g id="SVGRepo_iconCarrier"> <title>github [#ffffff]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g class="fill-preview" transform="translate(-140.000000, -7559.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#ffffff]"> </path> </g> </g> </g> </g>
                </svg>
                <div className="app-name">Github</div>
              </div>
            </a>
            <a target="_blank"href="https://www.linkedin.com/in/ali-moeini-a819632b0">
              <div className="social-app 2" >
              <svg xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" viewBox="0 0 24 24"><path class="stroke-preview" stroke="#ffffff" stroke-width="1" fill="none" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                <div className="app-name">linkedin</div>
              </div>
            </a>
            <a target="_blank"href="https://www.instagram.com/unrealworld_official/">
            <div className="social-app 3">
              <svg class="fill-preview" width="50px" height="50px" viewBox="0 0 24 24" fill="none" stroke="#16213E" stroke-width="0.9" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier"/>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <path class="fill-preview" fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#ffffff"/> <path class="fill-preview" d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#ffffff"/> <path class="fill-preview" fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#ffffff"/> </g>
              </svg>
              <div className="app-name">Instagram</div>
            </div>
            </a>
            <a target="_blank"href="https://t.me/ali_m_pro">
              <div className="social-app 4" id="telegram">
                <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="1"/>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1"/>
                  <g id="SVGRepo_iconCarrier"> <path class="stroke-preview" fill-rule="evenodd" clip-rule="evenodd" d="M21.997 12C21.997 17.5228 17.5198 22 11.997 22C6.47415 22 1.99699 17.5228 1.99699 12C1.99699 6.47715 6.47415 2 11.997 2C17.5198 2 21.997 6.47715 21.997 12ZM12.3553 9.38244C11.3827 9.787 9.43876 10.6243 6.52356 11.8944C6.05018 12.0827 5.8022 12.2669 5.77962 12.4469C5.74147 12.7513 6.12258 12.8711 6.64155 13.0343C6.71214 13.0565 6.78528 13.0795 6.86026 13.1038C7.37085 13.2698 8.05767 13.464 8.41472 13.4717C8.7386 13.4787 9.10009 13.3452 9.49918 13.0711C12.2229 11.2325 13.629 10.3032 13.7172 10.2831C13.7795 10.269 13.8658 10.2512 13.9243 10.3032C13.9828 10.3552 13.977 10.4536 13.9708 10.48C13.9331 10.641 12.4371 12.0318 11.6629 12.7515C11.4216 12.9759 11.2504 13.135 11.2154 13.1714C11.137 13.2528 11.0571 13.3298 10.9803 13.4038C10.506 13.8611 10.1502 14.204 11 14.764C11.4083 15.0331 11.7351 15.2556 12.0611 15.4776C12.4171 15.7201 12.7722 15.9619 13.2317 16.2631C13.3487 16.3398 13.4605 16.4195 13.5694 16.4971C13.9837 16.7925 14.3559 17.0579 14.8158 17.0155C15.083 16.991 15.359 16.7397 15.4992 15.9903C15.8305 14.2193 16.4817 10.382 16.6322 8.80081C16.6454 8.66228 16.6288 8.48498 16.6154 8.40715C16.6021 8.32932 16.5743 8.21842 16.4731 8.13633C16.3533 8.03911 16.1683 8.01861 16.0856 8.02C15.7095 8.0267 15.1324 8.22735 12.3553 9.38244Z" stroke="#ffffff" stroke-width="1" stroke-linejoin="round"/> </g>
                </svg>
                <div className="app-name">Telegram</div>
              </div>
            </a>
          </div>
      </section>
      <section class="about-me-wrapper email ">
          <h2>Email</h2>
          <div className="about-me-text" id="email">moeini.dev@gmail.com</div>
      </section>
      
		</>
  );
}

export default Home;
