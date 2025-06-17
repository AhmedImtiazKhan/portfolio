import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './certifications.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Certifications',
    description: 'View my professional certifications and achievements',
  });
};

export const Certifications = () => {
  const initDelay = tokens.base.durationS;

  return (
    <Section className={styles.certifications} style={{ display: 'flex', flexWrap: 'wrap' }}>

      <Transition unmount in timeout={1600}>
        {({ status, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h1"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
              <DecoderText text="My Certifications" start={status !== 'exited'} delay={300} />
            </Heading>
            <Divider
              className={styles.divider}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
            />
            
            <div className={styles.certificationGrid} style={{ display: 'flex', flexWrap: 'wrap' }}>
              {/* Cloud Certifications */}
              <div className={styles.certificationCard} data-status={status}>
                <div className={styles.logoContainer}>
                  <img 
                    src="/static/certification-logos/google-cloud.svg" 
                    alt="Google Cloud Logo" 
                    className={styles.logo}
                  />
                </div>
                <Heading level={4}>Google Cloud</Heading>
                <Text>Associate Cloud Engineer Certification</Text>
                <Text className={styles.date}>Issued: August 2024 · Expires August 2027</Text>
                <Text className={styles.credential}>Credential ID: eca89ed12a0c489c8ac1e4a6b3fd53da</Text>
                <Text className={styles.skills}>Skills: Cloud Infrastructure, GCP services, Deployment</Text>
                <Button
                  className={styles.button}
                  data-status={status}
                  icon="arrow-right"
                  href="https://www.credly.com/badges/b46c2690-9b8c-47e6-82dd-b438e540729e/linked_in_profile"
                >
                  View Certificate
                </Button>
              </div>

              <div className={styles.certificationCard} data-status={status}>
                <div className={styles.logoContainer}>
                  <img 
                    src="/static/certification-logos/microsoft-azure.svg" 
                    alt="Microsoft Azure Logo" 
                    className={styles.logo}
                  />
                </div>
                <Heading level={4}>Microsoft Azure</Heading>
                <Text>Microsoft Certified: Azure Fundamentals</Text>
                <Text className={styles.date}>Issued: November 2023</Text>
                <Text className={styles.credential}>Credential ID: FF8FD22D5975AC41</Text>
                <Text className={styles.skills}>Skills: Cloud Computing, Azure Basics</Text>
                <Button
                  className={styles.button}
                  data-status={status}
                  icon="arrow-right"
                  href="https://learn.microsoft.com/en-us/users/KhanAhmed-9075/credentials/FF8FD22D5975AC41?ref=https%3a%2f%2fwww.linkedin.com%2f"
                >
                  View Certificate
                </Button>
              </div>

              {/* Web Development Certifications */}
              <div className={styles.certificationCard} data-status={status}>
                <div className={styles.logoContainer}>
                  <img 
                    src="/static/certification-logos/udemy.svg" 
                    alt="Udemy Logo" 
                    className={styles.logo}
                  />
                </div>
                <Heading level={4}>Udemy</Heading>
                <Text>React - The Complete Guide</Text>
                <Text className={styles.date}>Issued: August 2022</Text>
                <Text className={styles.credential}>Credential ID: UC-65405eae-811a-4ece-ae33-07a8edce5c77</Text>
                <Text className={styles.skills}>Skills: React, Frontend Development, State Management</Text>
                <Button
                  className={styles.button}
                  data-status={status}
                  icon="arrow-right"
                  href="https://www.udemy.com/certificate/UC-65405eae-811a-4ece-ae33-07a8edce5c77/"
                >
                  View Certificate
                </Button>
              </div>

              <div className={styles.certificationCard} data-status={status}>
                <div className={styles.logoContainer}>
                  <img 
                    src="/static/certification-logos/udemy.svg" 
                    alt="Udemy Logo" 
                    className={styles.logo}
                  />
                </div>
                <Heading level={4}>Udemy</Heading>
                <Text>The Complete Web Developer in 2022: Zero to Mastery</Text>
                <Text className={styles.date}>Issued: August 2022</Text>
                <Text className={styles.credential}>Credential ID: UC-3a6d1703-9691-4a34-8aed-658df6a9f793</Text>
                <Text className={styles.skills}>Skills: Full-stack Web Development, JavaScript, Backend & Frontend</Text>
                <Button
                  className={styles.button}
                  data-status={status}
                  icon="arrow-right"
                  href="https://www.udemy.com/certificate/UC-3a6d1703-9691-4a34-8aed-658df6a9f793/"
                >
                  View Certificate
                </Button>
              </div>

              {/* Data Engineering Certifications */}
              <div className={styles.certificationCard} data-status={status}>
                <div className={styles.logoContainer}>
                  <img 
                    src="/static/certification-logos/teradata.svg" 
                    alt="Teradata Logo" 
                    className={styles.logo}
                  />
                </div>
                <Heading level={4}>Teradata</Heading>
                <Text>Vantage Data Engineering</Text>
                <Text className={styles.date}>Issued: August 2024</Text>
                <Text className={styles.credential}>Credential ID: 014d5fd25cee41f08eb367376614d711</Text>
                <Text className={styles.skills}>Skills: Data Engineering, Data Processing</Text>
                <Button
                  className={styles.button}
                  data-status={status}
                  icon="arrow-right"
                  href="https://www.credly.com/earner/earned/badge/4b283b83-5d7b-4598-8689-f6f8fa248324"
                >
                  View Certificate
                </Button>
              </div>

              <div className={styles.certificationCard} data-status={status}>
                <div className={styles.logoContainer}>
                  <img 
                    src="/static/certification-logos/teradata.svg" 
                    alt="Teradata Logo" 
                    className={styles.logo}
                  />
                </div>
                <Heading level={4}>Teradata</Heading>
                <Text>Vantage Associate 2.3 Certification</Text>
                <Text className={styles.date}>Issued: October 2023</Text>
                <Text className={styles.skills}>Skills: Data Warehouse Architecture, Data Distribution</Text>
                <Button
                  className={styles.button}
                  data-status={status}
                  icon="arrow-right"
                  href="https://www.credly.com/badges/3903e8c8-2476-4f95-8be1-82d6c5fa9795/linked_in_profile"
                >
                  View Certificate
                </Button>
              </div>

              {/* Additional Certifications */}
              <div className={styles.certificationCard} data-status={status}>
                <div className={styles.logoContainer}>
                  <img 
                    src="/static/certification-logos/hackerrank.svg" 
                    alt="HackerRank Logo" 
                    className={styles.logo}
                  />
                </div>
                <Heading level={4}>HackerRank</Heading>
                <Text>JavaScript Certification</Text>
                <Text className={styles.skills}>Skills: JavaScript proficiency, coding challenges</Text>
                <Button
                  className={styles.button}
                  data-status={status}
                  icon="arrow-right"
                  href="https://www.hackerrank.com/certificates/a8869a6af9c3"
                >
                  View Certificate
                </Button>
              </div>

              {/* LinkedIn Learning Certifications */}
              <div className={styles.certificationCard} data-status={status}>
                <div className={styles.logoContainer}>
                  <img 
                    src="/static/certification-logos/linkedin.svg" 
                    alt="LinkedIn Learning Logo" 
                    className={styles.logo}
                  />
                </div>
                <Heading level={4}>LinkedIn Learning</Heading>
                <Text>Professional Development Bundle</Text>
                <Text className={styles.date}>Issued: Oct-Nov 2023</Text>
                <Text className={styles.skills}>Skills: Presentation Skills, Business English, Cross-Cultural Communication, Client Relations, Consulting, Customer Service, Technical Presentations, Problem Solving, Time Management, Business Communications</Text>
                <Button
                  className={styles.button}
                  data-status={status}
                  icon="linkedin"
                  href="https://www.linkedin.com/in/ahmed-imtiaz-khan-205a65195"
                >
                  View Profile
                </Button>
              </div>

              <div className={styles.certificationCard} data-status={status}>
                <div className={styles.logoContainer}>
                  <img 
                    src="/static/certification-logos/linkedin.svg" 
                    alt="LinkedIn Learning Logo" 
                    className={styles.logo}
                  />
                </div>
                <Heading level={4}>LinkedIn Learning</Heading>
                <Text>Presentation Skills Bundle</Text>
                <Text className={styles.date}>Issued: November 2023</Text>
                <Text className={styles.skills}>Skills: Presentation Skills, Business English, Technical Presentations</Text>
                <Button
                  className={styles.button}
                  data-status={status}
                  icon="linkedin"
                  href="https://www.linkedin.com/in/ahmed-imtiaz-khan-205a65195"
                >
                  View Profile
                </Button>
              </div>

              <div className={styles.certificationCard} data-status={status}>
                <div className={styles.logoContainer}>
                  <img 
                    src="/static/certification-logos/linkedin.svg" 
                    alt="LinkedIn Learning Logo" 
                    className={styles.logo}
                  />
                </div>
                <Heading level={4}>LinkedIn Learning</Heading>
                <Text>Communication & Consulting Bundle</Text>
                <Text className={styles.date}>Issued: October 2023</Text>
                <Text className={styles.skills}>Skills: Cross-Cultural Communication, Client Relations, Consulting, Business Communications, Email Etiquette</Text>
                <Button
                  className={styles.button}
                  data-status={status}
                  icon="linkedin"
                  href="https://www.linkedin.com/in/ahmed-imtiaz-khan-205a65195"
                >
                  View Profile
                </Button>
              </div>

              <div className={styles.certificationCard} data-status={status}>
                <div className={styles.logoContainer}>
                  <img 
                    src="/static/certification-logos/linkedin.svg" 
                    alt="LinkedIn Learning Logo" 
                    className={styles.logo}
                  />
                </div>
                <Heading level={4}>LinkedIn Learning</Heading>
                <Text>Customer Service Excellence</Text>
                <Text className={styles.date}>Issued: October 2023</Text>
                <Text className={styles.skills}>Skills: Customer Service, Active Listening, Customer Communication</Text>
                <Button
                  className={styles.button}
                  data-status={status}
                  icon="linkedin"
                  href="https://www.linkedin.com/in/ahmed-imtiaz-khan-205a65195"
                >
                  View Profile
                </Button>
              </div>

              <div className={styles.certificationCard} data-status={status}>
                <div className={styles.logoContainer}>
                  <img 
                    src="/static/certification-logos/linkedin.svg" 
                    alt="LinkedIn Learning Logo" 
                    className={styles.logo}
                  />
                </div>
                <Heading level={4}>LinkedIn Learning</Heading>
                <Text>Professional Skills Bundle</Text>
                <Text className={styles.date}>Issued: October 2023</Text>
                <Text className={styles.skills}>Skills: Problem Solving, Time Management, Logical Reasoning</Text>
                <Button
                  className={styles.button}
                  data-status={status}
                  icon="linkedin"
                  href="https://www.linkedin.com/in/ahmed-imtiaz-khan-205a65195"
                >
                  View Profile
                </Button>
              </div>

              <div className={styles.certificationCard} data-status={status}>
                <div className={styles.logoContainer}>
                  <img 
                    src="/static/certification-logos/linkedin.svg" 
                    alt="LinkedIn Learning Logo" 
                    className={styles.logo}
                  />
                </div>
                <Heading level={4}>LinkedIn Learning</Heading>
                <Text>Programming Foundations: Data Structures</Text>
                <Text className={styles.date}>Issued: May 2021</Text>
                <Text className={styles.skills}>Skills: Data Structures</Text>
                <Button
                  className={styles.button}
                  data-status={status}
                  icon="linkedin"
                  href="https://www.linkedin.com/in/ahmed-imtiaz-khan-205a65195"
                >
                  View Profile
                </Button>
              </div>
            </div>
          </div>
        )}
      </Transition>
      <Footer className={styles.footer} />
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
} 