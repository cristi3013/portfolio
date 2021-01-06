import React from 'react';
import emailjs from 'emailjs-com';
import {
  InfoContainer,
  InfoWrapper,
  Title,
  InfoRow,
  Column1,
  Column2,
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
import social1 from '../../images/linkedInBlack.svg';
import social2 from '../../images/githubBlack.svg';
import social3 from '../../images/instagramBlack.svg';

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmail',
        'default_template',
        e.target,
        'user_2XcLlrUNUkAq9DocuNwVE'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }
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
                <form onSubmit={sendEmail}>
                  <input
                    type='text'
                    className='nameInput'
                    placeholder='Name'
                    name='name'
                  />

                  <input
                    type='email'
                    className='emailInput'
                    placeholder='Email Address'
                    name='email'
                  />

                  <input
                    type='text'
                    className='subjectInput'
                    placeholder='Subject'
                    name='subject'
                  />

                  <textarea
                    className='messageInput'
                    id=''
                    cols='30'
                    rows='8'
                    placeholder='Your message'
                    name='message'
                  ></textarea>
                  <div className='btnWrapper'>
                    <input
                      type='submit'
                      className='button'
                      value='Send Message'
                    ></input>
                  </div>
                </form>
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
