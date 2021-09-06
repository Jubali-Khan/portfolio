import Image from 'next/image';
import React from 'react';
import { Container, Layout } from '../components';
import { StyledAbout } from '../components/styles/about.styles';

/**
 * About page `/about`
 */
const About = () => {
  return (
    <Layout
      pathname={"/about"}
      pageTitle="About"
      pageDescription="About page of Jubran Naser"
    >
      <StyledAbout>
        <Container width="narrow">
          <div className="postContent">
            <div className="avatarImage">
              <Image src="/images/avatar.jpg" width={200} height={200} alt="Victor Ofoegbu" />
            </div>
            <p>
              I'm{" "}
              <a
                href="https://twitter.com/JubranNaser"
                target="_blank"
                rel="noopenner noreferrer"
              >
                @Jubran
              </a>
              , a budding web developer interested in computers, the web and technology in general.
            </p>
            <p>
              When I'm not coding or learning to code, I'm usually watching movies, series or just reading whatever I find interesting.
            </p>

            <p>
              I'm currently learning JavaScript and if you'd like to follow my journey, you could follow me on {" "}
              <a
                href="https://twitter.com/JubranNaser"
                target="_blank"
                rel="noopenner noreferrer"
              >
                Twitter
              </a>{" "}
              and let's be friends 😊.
            </p>
          </div>
        </Container>
      </StyledAbout>
    </Layout>
  );
};

export default About;
