import {
  Box,
  Grid,
  GridItem,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail, AiOutlineInstagram, AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import profilelogo from '../image/profilelogo.svg';
import '../image/footer.css';

export default function Contact() {
  return (
    <>
      <div id="contact">
        <Box
          w="100%"
          mt={20}
          mb={12}
          display="flex"
          justifyContent="center"
          id="about1"
        >
          <Text
            id="forline"
            letterSpacing={-2}
            bgGradient="linear(to-l, #2A5470,#4C4177)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="900"
          >
            Contact Me
          </Text>
        </Box>
        <HStack
          data-aos="fade-up"
          data-aos-duration="900"
          textColor="#838383"
          textAlign="center"
          spacing={55}
          id='contact-item'
          justifyContent="center"
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <GrLinkedinOption size={50} color="white" opacity="0.8" />
            <Text className="title" fontWeight="bold">LinkedIn</Text>
            <Text className="para">Connect with me through LinkedIn</Text>
            <a
              style={{ color: "#9f9fff" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/nitish-kumar-118041219/"
            >
              Nitish Kumar
            </a>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <BiPhoneCall size={50} color="white" opacity="0.8" />
            <Text className="title" fontWeight="bold">Phone</Text>
            <Text className="para">Connect with me through my Number</Text>
            <Text style={{ color: "#9f9fff", cursor: "text" }}>8757261065</Text>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <AiOutlineMail size={50} color="white" opacity="0.8" />
            <Text className="title" fontWeight="bold">Email</Text>
            <Text className="para">Connect with me through my Email</Text>
            <Text style={{ color: "#9f9fff", cursor: "text" }}>
              nitishkumar2809@gmail.com
            </Text>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <FiGithub size={50} color="white" opacity="0.8" />
            <Text className="title" fontWeight="bold">GitHub</Text>
            <Text className="para">Connect with me through GitHub</Text>
            <a
              style={{ color: "#9f9fff" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Nitishperfectionist"
            >
              Nitish Kumar
            </a>
          </Box>
        </HStack>
        <Box w="75vw" id="form-input-box" mt={70}>
          <Grid gap={5} id='form-inputs' templateColumns="repeat(2, 1fr)">
            <GridItem>
              <Box id="left">
                <Stack spacing={5}>
                  <Input spellCheck="false" color='white' placeholder="Name" />
                  <Input spellCheck="false" color='white' placeholder="Email" />
                  <Input spellCheck="false" color='white' placeholder="Subject" />
                </Stack>
              </Box>
            </GridItem>
            <GridItem>
              <Box id="right" h="auto">
                <Textarea spellCheck="false" color='white' placeholder="Message" h="21vh"/>
              </Box>
            </GridItem>
          </Grid>
        </Box>
        <Box display="flex" justifyContent="center" w="75vw" mt={5}>
          <a href="#" id="resume-btn">Submit</a>
        </Box>
      </div>

      <Box id="footer" display="flex" alignItems="center" h="20vh" bgColor="rgb(19 20 25)">
        <a id="fontlogo" href="#">C</a>
        <Box bgColor="rgb(19 20 25)" id="footer-social" display="flex" justifyContent="space-around" w="7%">
          <a href="https://github.com/Nitishperfectionist" target="_blank" rel="noopener noreferrer">
            <AiOutlineInstagram color="white" size={30} opacity={0.6} />
          </a>
          <a href="https://www.linkedin.com/in/nitish-kumar-118041219/" target="_blank" rel="noopener noreferrer">
            <AiOutlineLinkedin color="white" size={30} opacity={0.6}/>
          </a>
        </Box>
        <Box width="22%" color="white" id="footer-para-box" ml="46.5vw" bg="rgb(19 20 25)">
          <Text bg="rgb(19 20 25)" textAlign='right' id="footer-para">Thank you for visiting!</Text>
        </Box>
      </Box>
    </>
  );
}
