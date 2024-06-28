import React, { useEffect, useRef } from "react";
import resume from '../image/Nitish-Kumar-Resume.pdf';
import { Box, Card, Heading, Text, Button } from "@chakra-ui/react";
import '../image/Home.css';
import img2 from '../image/manpic.svg';
import Typed from "typed.js";
import { todrive } from "./todrive";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web Designing', 'Web Development', 'Full Stack Development'],
      typeSpeed: 50,
      backDelay: 500,
      loop: true,
      backSpeed: 25
    });
    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <section id="home">
      <Card
        h="75vh"
        display="flex"
        flexDir="row"
        justifyContent="space-between"
        bgColor="black"
        id="home-mid"
      >
        <Box w="50%" h="60vh" id="home-1" padding="35px 0px 0px 45px">
          <Box id="top-name-box">
            <Heading className="top-name-text" color="#a4c5c6" as="h4" fontSize='17px'>
              Hey, I'm Nitish Kumar! 👋
            </Heading>
          </Box>
          <Box id="buildhead-box">
            <Heading letterSpacing="-2px" margin="2.5rem 0px" id="buildhead" color="white" as="h1">
              I am into <br /> <span id="changable" ref={el}></span>
            </Heading>
          </Box>
          <Box>
            <Text letterSpacing="-0.5px" w="80%" id="home-para" fontSize='lg'>
              Remember, every ‘mistake’ your customer makes, it’s not because they’re stupid. It’s because your website sucks.
            </Text>
          </Box>
          <Box id="resume-btn-box" onClick={todrive} p="50px 0px 0px 0px">
            <a href={resume} download="Nitish-Kumar-Resume" target="_blank" id="resume-btn">Resume</a>
          </Box>
        </Box>
        <Box data-aos="zoom-in-left" id="imgbox" w="45%" h="60vh">
          <img id="manpic" src={img2} alt="Profile" />
        </Box>
      </Card>
    </section>
  );
}
