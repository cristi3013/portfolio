import React from 'react';
import {
  InfoContainer,
  InfoWrapper,
  Title,
  InfoRow,
  Column1,
  Column2,
  NameInput,
  EmailInput,
  SubjectInput,
  MessageInput,
  EmailBtnWrapper,
  InputWrapper,
  ContactInfoWrapper,
  Text1,
  PhoneNumber,
  Text2,
  PersonalEmail,
  Text3,
  SocialIconsWrapper,
  Social1,
  Social2,
  Social3,
} from './ContactElements';
import { Button } from '../ButtonElement';
import social1 from '../../images/linkedInBlack.svg';
import social2 from '../../images/githubBlack.svg';
import social3 from '../../images/instagramBlack.svg';

const Contact = () => {
  return (
    <>
      <InfoContainer id='contact'>
        <InfoWrapper>
          <Title>
            Get <span className='styled'>in</span> touch
          </Title>
          <InfoRow>
            <Column1>
              <InputWrapper>
                <NameInput placeholder='Name' type='text' name='user_name' />
                <EmailInput placeholder='Email' type='text' name='user_email' />
                <SubjectInput
                  placeholder='Subject'
                  type='text'
                  name='subject'
                />
                <MessageInput
                  placeholder='Message'
                  type='text'
                  name='message'
                />

                <EmailBtnWrapper>
                  <Button>Send Message</Button>
                </EmailBtnWrapper>
              </InputWrapper>
            </Column1>
            <Column2>
              <ContactInfoWrapper>
                <Text1>Call me</Text1>
                <PhoneNumber>+40725019908</PhoneNumber>
                <Text2>Email</Text2>
                <PersonalEmail>vslcristian3013@gmail.com</PersonalEmail>
                <Text3>Social</Text3>
                <SocialIconsWrapper>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.linkedin.com/in/cristian-vasile-09350a17a/'
                  >
                    <Social1 src={social1} alt='linkedin' />
                  </a>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://github.com/cristi3013'
                  >
                    <Social2 src={social2} alt='github' />
                  </a>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.instagram.com/cristi3013/'
                  >
                    <Social3 src={social3} alt='instagram' />
                  </a>
                </SocialIconsWrapper>
              </ContactInfoWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Contact;
