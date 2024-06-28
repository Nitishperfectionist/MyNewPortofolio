import React from "react";
import "../image/about.css";
import { Box, Image, Text } from "@chakra-ui/react";
import img3 from "../image/profile.png";
import resume from '../image/Nitish-Kumar-Resume.pdf';
import { Link } from "react-scroll";
import { todrive } from "./todrive";

export default function About() {
  return (
    <>
      <div id="about">
        <Box w="100%" display="flex" justifyContent="center" id="about1">
          <Text
            id="forline"
            letterSpacing={-2}
            bgGradient="linear(to-l, #2A5470,#4C4177)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="900"
          >
            About
          </Text>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          mt="60px"
          id="about2"
        >
          <Box w="45vw" id="about-img">
            <Image
              w="30vw"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="800"
              id="profile"
              src={img3}
              alt="Profile Image"
            />
          </Box>
          <Box
            w="55vw"
            ml="45px"
            pt="45px"
            color="white"
            id="about-body"
          >
            <Text as="h4" fontSize="30px">Nitish Kumar</Text>
            <Text as="h5" mt="15px" mb="35px" color="#c6baba">
              Full Stack Web Developer
            </Text>
            <Text
              color="rgb(136, 135, 135);"
              letterSpacing="-0.5px"
              w="70%"
              id="about-para"
              fontSize="lg"
            >
              Full Stack Web Developer with a passion for transforming ideas into reality through code.
              I believe in continuous learning and growth, always seeking new challenges and opportunities to expand my skill set...
            </Text>
            <Box
              id='resume-about-box'
              onClick={todrive}
              pt="90px"
            >
              <a
                href={resume}
                download="Nitish-Kumar-Resume"
                target="_blank"
                rel="noopener noreferrer"
                id="resume-btn"
              >
                Resume
              </a>
            </Box>
          </Box>
        </Box>
      </div>
      <Link
        to="home"
        spy={true}
        id='click-above'
        smooth={true}
        offset={-150}
        duration={500}
      >
        &lt;
      </Link>
    </>
  );
}
