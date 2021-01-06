import styled from 'styled-components/macro';

export const InfoContainer = styled.div`
  z-index: 1;
  height: 860px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0e0e0e;
  @media screen and (max-width: 768px) {
    height: 1800px;
  }

  @media screen and (max-width: 480px) {
    height: 1800px;
  }
`;
export const Title = styled.h1`
  font-size: 48px;
  text-align: center;
  margin-bottom: 150px;
  color: #fff;
  .styled {
    color: #6db454;
  }
  @media screen and (max-width: 768px) {
    margin-top: 70px;
    margin-bottom: 50px;
    margin-left: 0;
  }
`;
export const ProjectWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
export const ProjectCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 360px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: black;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const ProjectIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
  transform: scale(1.1);
`;
export const ProjectTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;
export const ProjectDescription = styled.p`
  font-size: 18px;
  text-align: center;
  line-height: 18px;
  @media screen and (max-width: 768px) {
    line-height: 25px;
  }
`;
