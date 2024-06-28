import React from "react";
import img4 from "../skill-img/1.png";
import img5 from "../skill-img/2.png";
import img6 from "../skill-img/3.png";
import img7 from "../skill-img/4.png";
import img8 from "../skill-img/5.png";
import img13 from "../skill-img/10.png";
import img14 from "../skill-img/11.png";
import img15 from "../skill-img/12.webp";
import { Box, Image, Text } from "@chakra-ui/react";
import '../image/Home.css'; // Ensure the CSS file is imported

export default function Skills() {
  return (
    <div id="skills">
      <Box w="100%" display="flex" justifyContent="center" id="about1">
        <Text
          id="forline"
          letterSpacing={-2}
          bgGradient="linear(to-l, #2A5470,#4C4177)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="900"
        >
          Skills
        </Text>
      </Box>
      
      <Box
        color={"white"}
        textAlign={"Center"}
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-offset="100"
        w="90%"
        m="auto"
        mt="5vh"
        id="skill-logo"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
      >
        <div className="logo-item">
          <Image className="logoimg" src={img4} />
          <span className="logo-name">HTML</span>
        </div>
        <div className="logo-item">
          <Image className="logoimg" src={img5} />
          <span className="logo-name">CSS</span>
        </div>
        <div className="logo-item">
          <Image className="logoimg" src={img6} />
          <span className="logo-name">JavaScript</span>
        </div>
        <div className="logo-item">
          <Image className="logoimg" src={img7} />
          <span className="logo-name">React</span>
        </div>
        <div className="logo-item">
          <Image className="logoimg" src={img8} />
          <span className="logo-name">Redux</span>
        </div>
        <div className="logo-item">
          <Image className="logoimg" src={img13} />
          <span className="logo-name">Java</span>
        </div>
        <div className="logo-item">
          <Image className="logoimg" src={img14} />
          <span className="logo-name">MongoDB</span>
        </div>
        <div className="logo-item">
          <Image className="logoimg" src={img15} />
          <span className="logo-name">NodeJs</span>
        </div>
      </Box>
    </div>
  );
}
