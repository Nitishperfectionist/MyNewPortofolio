import React from "react";
import {
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Card2({ url, title, des, gitlink, depllink }) {
  return (
    <Card maxW="sm" bg="gray.800" borderRadius="lg">
      <CardBody>
        <Image
          src={url}
          alt="Project preview"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading m="auto" color="white" size="md">{title}</Heading>
          <Text textAlign="center" color="gray.400">React || Axios || Json-Server</Text>
          <Text textAlign="center" color="gray.300">
            {des}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup w="100%" display="flex" justifyContent="center" spacing="2">
          <a href={gitlink} target="_blank" rel="noopener noreferrer" aria-label="GitHub link">
            <svg
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              height="20px"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path style={{ color: "white" }} d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href={depllink} target="_blank" rel="noopener noreferrer" aria-label="Deployment link">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="3"
              viewBox="0 0 24 24"
              height="20px"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path style={{ color: "white" }} d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
            </svg>
          </a>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
