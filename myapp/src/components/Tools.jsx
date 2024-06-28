import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import img10 from "../skill-img/7.png";
import img12 from "../skill-img/9.png";
import img9 from "../skill-img/6.png";
import vs from "../skill-img/vscode.png"
import boot from "../skill-img/Vite-logo.jpg"

export const Tools = () => {
  return (
    <Box mt={90} id="skills-tools">
     <Text
          id="forline"
            letterSpacing={-2}
            bgGradient="linear(to-l, #2A5470,#4C4177)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="900"
            textAlign={"center"}
          > 
            Tools
          </Text>
    <Box
    color={"white"}
    textAlign={"Center"}
    data-aos="fade-up"
    data-aos-duration="500"
    data-aos-offset="100"
    h="20vh"
    w="90%"
    m="auto"
    mt="5vh"
    id="skill-logo"
    display="flex"
    justifyContent="space-around"
    alignItems="center"
  >
   
     <div  className="logo-item">
        <Image className="logoimg" src={img10} />
        <span className="logo-name">Git</span>
      </div>

      <div className="logo-item">
        <Image className="logoimg" src={img12} />
        <span className="logo-name">GitHub</span>
      </div>
      <div className="logo-item">
        <Image className="logoimg" src={img9} />
        <span className="logo-name">Chakra UI</span>
      </div>
      <div className="logo-item">
        <Image w={99} className="logoimg" src={vs} />
        <span className="logo-name">VS Code</span>
      </div>
      <div className="logo-item">
        <Image w={99}  borderRadius={5} className="logoimg" src={boot} />
        <span className="logo-name">Vite</span>
      </div>
  </Box>
    </Box>
   
  )
}