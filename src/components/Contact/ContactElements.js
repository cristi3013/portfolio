import styled from 'styled-components/macro';

export const InfoContainer = styled.div`
  background: #fff;

  @media screen and (max-width: 768px) {
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1350px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 1300px;
  }
`;
export const Title = styled.h1`
  margin-top: 120px;
  height: 80px;
  font-size: 48px;
  text-align: center;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '010606')};
  .styled {
    color: #6db454;
  }
  @media screen and (max-width: 768px) {
    /* margin-top: -100px; */
  }
`;

export const InfoRow = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  align-items: center;

  grid-template-areas: 'col1 col2';

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1 col1' 'col2 col2';
    margin-top: 0;
  }
`;
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: -180px;
  }
  @media screen and (max-width: 480px) {
    margin-left: 0;
    margin-left: -33px;
  }
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    transform: scale(0.9);
    margin-left: -50px;
  }
`;
export const Column2 = styled.div`
  margin-bottom: 50px;
  margin-left: 40px;
  height: auto;
  padding: 0 15px;
  grid-area: col2;
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    transform: scale(0.9);
    margin-left: -50px;
  }
`;

export const NameInput = styled.input`
  width: 400px;
  height: 65px;
  background: rgba(172, 175, 171, 0.29);
  border-radius: 13px;
  border: none;
  padding: 12px 20px;
  outline-width: 0;
`;
export const EmailInput = styled.input`
  margin-top: 30px;
  width: 793px;
  height: 65px;
  background: rgba(172, 175, 171, 0.29);
  border-radius: 13px;
  border: none;
  padding: 12px 20px;
  outline-width: 0;
  @media screen and (max-width: 768px) {
    width: 400px;
    height: 65px;
  }
`;
export const SubjectInput = styled.input`
  margin-top: 30px;
  width: 793px;
  height: 65px;
  background: rgba(172, 175, 171, 0.29);
  border-radius: 13px;
  border: none;
  padding: 12px 20px;
  outline-width: 0;
  @media screen and (max-width: 768px) {
    width: 400px;
    height: 65px;
  }
`;
export const MessageInput = styled.textarea`
  margin-top: 30px;
  width: 793px;
  height: 200px;
  background: rgba(172, 175, 171, 0.29);
  border-radius: 13px;
  border: none;
  padding: 12px 20px;
  outline-width: 0;
  resize: none;
  @media screen and (max-width: 768px) {
    width: 400px;
    height: 100px;
  }
`;
export const EmailBtnWrapper = styled.div`
  margin-top: 30px;

  margin-left: 10px;
  align-items: center;
  border: none;
  outline: none;
  transform: scale(1.1);
  background-color: transparent;
  max-width: 300px;
  @media screen and (max-width: 768px) {
    margin-left: 50px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .nameInput {
    width: 400px;
    height: 65px;
    background: rgba(172, 175, 171, 0.29);
    border-radius: 13px;
    border: none;
    padding: 12px 20px;
    outline-width: 0;
  }
  .emailInput {
    margin-top: 30px;
    width: 793px;
    height: 65px;
    background: rgba(172, 175, 171, 0.29);
    border-radius: 13px;
    border: none;
    padding: 12px 20px;
    outline-width: 0;
    @media screen and (max-width: 768px) {
      width: 400px;
      height: 65px;
    }
  }
  .subjectInput {
    margin-top: 30px;
    width: 793px;
    height: 65px;
    background: rgba(172, 175, 171, 0.29);
    border-radius: 13px;
    border: none;
    padding: 12px 20px;
    outline-width: 0;
    @media screen and (max-width: 768px) {
      width: 400px;
      height: 65px;
    }
  }
  .messageInput {
    margin-top: 30px;
    width: 793px;
    height: 200px;
    background: rgba(172, 175, 171, 0.29);
    border-radius: 13px;
    border: none;
    padding: 12px 20px;
    outline-width: 0;
    resize: none;
    @media screen and (max-width: 768px) {
      width: 400px;
      height: 100px;
    }
  }
  .btnWrapper {
    margin-top: 30px;

    margin-left: 10px;
    align-items: center;
    border: none;
    outline: none;
    transform: scale(1.1);
    background-color: transparent;
    max-width: 300px;
    @media screen and (max-width: 768px) {
      margin-left: 115px;
    }
  }
  .button {
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#6DB454' : '#010606')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline-style: none;
    border: none;

    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
      transition: all 0.2s ease-in-out;
      background: ${({ primary }) => (primary ? '#fff' : '#6DB454')};
    }
  }
`;

export const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Text1 = styled.h1``;
export const PhoneNumber = styled.h2`
  margin-top: 10px;
`;
export const Text2 = styled.h1`
  margin-top: 30px;
`;
export const PersonalEmail = styled.h2`
  margin-top: 10px;
`;
export const Text3 = styled.h1`
  margin-top: 30px;
`;
export const SocialIconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 150px;
  margin-top: 10px;
`;

export const Social1 = styled.img`
  cursor: pointer;
`;
export const Social2 = styled.img`
  cursor: pointer;
`;
export const Social3 = styled.img`
  cursor: pointer;
`;
