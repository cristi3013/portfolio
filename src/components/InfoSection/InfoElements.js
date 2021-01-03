import styled from 'styled-components/macro';

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 950px;
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

export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;

  grid-template-areas: 'col1 bar col2';

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1 col1' 'col2 col2';
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 50px;
  margin-left: 40px;
  padding: 0 15px;
  grid-area: col2;
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

export const TextWrapper = styled.div`
  max-width: 650px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 16px;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '010606')};
  .styled {
    color: #6db454;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Paragraph1 = styled.p`
  font-size: 18px;
  line-height: 31px;
  font-weight: 600;
  margin-top: 100px;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '010606')};
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Paragraph2 = styled.p`
  font-size: 18px;
  line-height: 31px;
  font-weight: 600;
  margin-top: 25px;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '010606')};
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Paragraph3 = styled.p`
  font-size: 18px;
  line-height: 31px;
  font-weight: 600;
  margin-top: 25px;

  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '010606')};
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const SocialImg = styled.img`
  a {
    width: 100%;
    margin-top: -20px;
    align-items: center;
    transform: scale(0.35);
    cursor: pointer;
  }
`;

export const BarColumn = styled.div`
  grid-area: bar;
  text-align: center;
`;
