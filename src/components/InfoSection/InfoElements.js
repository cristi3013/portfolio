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
  height: auto;
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
  margin-top: 80px;
  display: grid;
  grid-template-columns: 2fr 1fr;

  align-items: center;

  grid-template-areas: 'col1 bar col2';

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1 col1' 'col2 col2';
    margin-top: 0;
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
  margin-top: 50px;
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

export const EducationWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: auto;
  width: 100%;
  max-width: 1350px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    margin-left: 0px;
  }
`;

export const EducationTitle = styled.h1`
  font-size: 48px;
  margin-top: 30px;
  /* margin-left: 115px; */
  text-align: center;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '010606')};
  .styled {
    color: #6db454;
  }
  @media screen and (max-width: 768px) {
    margin-top: 70px;
    margin-bottom: 50px;
    margin-left: 0;
  }
`;

export const EducationColumn1 = styled.div`
  grid-area: col1;
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const EducationColumn2 = styled.div`
  margin-left: 65px;
  grid-area: col2;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }
`;

export const BarColumnWrapper = styled.div`
  max-width: 555px;
  height: 100%;
  text-align: center;
  @media screen and (max-width: 768px) {
    visibility: hidden;
    height: 100px;
  }
`;
export const BarColumn1 = styled.img`
  grid-area: bar;
  @media screen and (max-width: 768px) {
    visibility: hidden;
  }
`;

export const Year1 = styled.h2`
  font-size: 32px;
  text-align: left;
  .styled {
    color: #6db454;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export const EducationParagraph1 = styled.h3`
  max-width: 350px;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const Certification = styled.h2`
  font-size: 32px;
  text-align: left;
  .styled {
    color: #6db454;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`;
export const CertificationTitle = styled.h3`
  max-width: 350px;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const Year2 = styled.h2`
  font-size: 32px;
  margin-top: -20px;
  text-align: left;
  .styled {
    color: #6db454;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`;
export const EducationParagraph2 = styled.h3`
  max-width: 500px;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;
export const BarColumn2 = styled.img`
  grid-area: bar;
  @media screen and (max-width: 768px) {
    visibility: hidden;
  }
`;

export const WorkTitle = styled.h1`
  font-size: 48px;
  margin-top: 90px;
  /* margin-left: 115px; */
  text-align: center;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '010606')};
  .styled {
    color: #6db454;
  }
  @media screen and (max-width: 768px) {
    margin-top: 30px;
    margin-bottom: 50px;
    margin-left: 0;
  }
`;

export const WorkWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: auto;
  width: 100%;
  max-width: 1350px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  /* justify-content: center; */

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

export const WorkColumn1 = styled.div`
  grid-area: col1;
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;
export const Company = styled.h2`
  font-size: 32px;
  text-align: left;
  /* margin-top: -155px; */
  margin-bottom: 50px;
  .styled {
    color: #6db454;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 0;
    margin-top: 0;
  }
`;
export const Period = styled.h3`
  max-width: 350px;
  margin-top: -20px;
  text-align: left;
  @media screen and (max-width: 768px) {
    margin-bottom: 0;
    margin-top: 0;
  }
`;
export const WorkColumn2 = styled.div`
  margin-left: 40px;
  grid-area: col2;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }
`;
export const WorkParagraph1 = styled.p`
  font-size: 18px;
  font-weight: bold;
  max-width: 500px;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;
export const WorkParagraph2 = styled.p`
  font-size: 18px;
  font-weight: bold;
  max-width: 500px;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;
export const ProjectDescription = styled.p`
  max-width: 500px;
  font-size: 14px;
  color: #9694a7;
  font-weight: bold;
  /* margin-left: 25px; */
  margin-bottom: 20px;
  margin-top: 15px;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const Role = styled.h2`
  font-size: 32px;
  text-align: left;
  .styled {
    color: #6db454;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`;
