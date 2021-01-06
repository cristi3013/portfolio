import styled from 'styled-components/macro';

export const InfoContainer = styled.div`
  background: #fff;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
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
    height: 800px;
  }
  @media screen and (max-width: 480px) {
    height: 900px;
    margin-top: 50px;
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
    height: 1300px;
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
`;

export const Column2 = styled.div`
  margin-bottom: 50px;
  margin-left: 40px;
  height: auto;
  padding: 0 15px;
  grid-area: col2;
  @media screen and (max-width: 768px) {
    margin-left: -100px;
    margin-top: -700px;
    transform: scale(0.65);
  }
  @media screen and (max-width: 480px) {
    margin-left: -130px;
    margin-top: -450px;
    transform: scale(0.58);
  }
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    transform: scale(0.52);
  }
`;
export const TextWrapper = styled.div`
  max-width: 650px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const Title = styled.h1`
  margin-top: -50px;
  font-size: 48px;
  margin-bottom: 150px;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '010606')};
  .styled {
    color: #6db454;
  }
  @media screen and (max-width: 768px) {
    margin-top: -100px;
  }
`;

export const Subtitle = styled.h1`
  font-size: 48px;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '010606')};
  .styled {
    color: #6db454;
  }
  @media screen and (max-width: 768px) {
    margin-top: -100px;
  }
`;

export const Paragraph = styled.h3`
  max-width: 350px;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const ProgressWrapper = styled.div`
  @media screen and (max-width: 768px) {
  }
`;

export const CvBtnWrapper = styled.button`
  margin-left: 10px;
  align-items: center;
  border: none;
  outline: none;
  transform: scale(1.1);
  background-color: transparent;
`;
