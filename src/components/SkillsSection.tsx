import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTypescript,
} from "react-icons/si";

import StyledSkillsSection from "../styles/components/skills-section.style";

const SkillsSection = () => {
  return (
    <StyledSkillsSection>
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-container">
        <div className="skill-item">
          <div>
            <SiJavascript className="skill-icon" />
          </div>
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <div>
            <SiReact className="skill-icon" />
          </div>
          <p>React</p>
        </div>
        <div className="skill-item">
          <div>
            <SiNextdotjs className="skill-icon" />
          </div>
          <p>Next.js</p>
        </div>
        <div className="skill-item">
          <div>
            <SiRedux className="skill-icon" />
          </div>
          <p>Redux</p>
        </div>
        <div className="skill-item">
          <div>
            <SiTypescript className="skill-icon" />
          </div>
          <p>TypeScript</p>
        </div>
        {/* <div className="skill-item">
        <div>
          <SiHtml5 className="skill-icon" />
        </div>
        <p>HTML</p>
      </div>
      <div className="skill-item">
        <div>
          <SiCss3 className="skill-icon" />
        </div>
        <p>CSS</p>
      </div> */}
      </div>
    </StyledSkillsSection>
  );
};

export default SkillsSection;
