import React from 'react';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  Title,
  Paragraph1,
  Paragraph2,
  Paragraph3,
  ImgWrap,
  Img,
  SocialMediaWrapper,
  SocialImg,
  BarColumn1,
  BarColumn2,
  BarColumnWrapper,
  EducationWrapper,
  EducationTitle,
  EducationColumn1,
  EducationColumn2,
  Year1,
  Year2,
  EducationParagraph1,
  EducationParagraph2,
  Certification,
  CertificationTitle,
  WorkTitle,
  WorkWrapper,
  WorkColumn1,
  Company,
  Period,
  WorkColumn2,
  WorkParagraph1,
  WorkParagraph2,
  ProjectDescription,
  Role,
} from './InfoElements';

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  lightText,
  paragraph1,
  paragraph2,
  paragraph3,
  avatar,
  alt1,
  linkedIn,
  alt2,
  gitHub,
  alt3,
  instagram,
  alt4,
  educationParagraph1,
  bar1Img,
  alt5,
  certification1,
  certificationTitle1,
  educationParagraph2,
  bar2Img,
  alt6,
  certification2,
  certificationTitle2,
  educationParagraph3,
  bar3Img,
  alt7,
  certification3,
  certificationTitle3,
  educationParagraph4,
  bar4Img,
  alt8,
  certification4,
  certificationTitle4,
  educationParagraph5,
  bar5Img,
  alt9,
  certification5,
  certificationTitle5,
  company1,
  period1,
  role1,
  workParagraph1a,
  workParagraph1b,
  projectDescription1,
  bar6Img,
  company2,
  period2,
  role2,
  workParagraph2a,
  workParagraph2b,
  workParagraph2c,
  projectDescription2,
  bar7Img,
  company3,
  period3,
  role3,
  workParagraph3a,
  workParagraph3b,
  projectDescription3,
  bar8Img,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Title>
                  More <span className='styled'>about</span> me
                </Title>
                <Paragraph1 lightText={lightText}>{paragraph1}</Paragraph1>
                <Paragraph2 lightText={lightText}>{paragraph2}</Paragraph2>
                <Paragraph3 lightText={lightText}>{paragraph3}</Paragraph3>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={avatar} alt={alt1} />
                <SocialMediaWrapper>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.linkedin.com/in/cristian-vasile-09350a17a/'
                  >
                    <SocialImg src={linkedIn} alt={alt2} />
                  </a>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://github.com/cristi3013'
                  >
                    <SocialImg src={gitHub} alt={alt3} />
                  </a>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.instagram.com/cristi3013/'
                  >
                    <SocialImg src={instagram} alt={alt4} />
                  </a>
                </SocialMediaWrapper>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
        <EducationTitle>
          My <span className='styled'>education</span>
        </EducationTitle>
        <EducationWrapper>
          <InfoRow>
            <EducationColumn1>
              <Year1>
                2017<span className='styled'>-</span>2020
              </Year1>
              <EducationParagraph1 lightText={lightText}>
                {educationParagraph1}
              </EducationParagraph1>
            </EducationColumn1>
            <BarColumnWrapper>
              <BarColumn1 src={bar1Img} alt={alt5}></BarColumn1>
            </BarColumnWrapper>
            <EducationColumn2>
              <Certification>{certification1}</Certification>
              <CertificationTitle>{certificationTitle1}</CertificationTitle>
            </EducationColumn2>
          </InfoRow>

          <InfoRow>
            <EducationColumn1>
              <Year2>
                2017<span className='styled'>-</span>2018
              </Year2>
              <EducationParagraph2>{educationParagraph2}</EducationParagraph2>
            </EducationColumn1>
            <BarColumnWrapper>
              <BarColumn2 src={bar2Img} alt={alt6}></BarColumn2>
            </BarColumnWrapper>
            <EducationColumn2>
              <Certification>{certification2}</Certification>
              <CertificationTitle>{certificationTitle2}</CertificationTitle>
            </EducationColumn2>
          </InfoRow>
          <InfoRow>
            <EducationColumn1>
              <Year2>
                2018<span className='styled'>-</span>2019
              </Year2>
              <EducationParagraph2>{educationParagraph3}</EducationParagraph2>
            </EducationColumn1>
            <BarColumnWrapper>
              <BarColumn2 src={bar3Img} alt={alt7}></BarColumn2>
            </BarColumnWrapper>
            <EducationColumn2>
              <Certification>{certification3}</Certification>
              <CertificationTitle>{certificationTitle3}</CertificationTitle>
            </EducationColumn2>
          </InfoRow>
          <InfoRow>
            <EducationColumn1>
              <Year2>
                2019<span className='styled'>-</span>2020
              </Year2>
              <EducationParagraph2>{educationParagraph4}</EducationParagraph2>
            </EducationColumn1>
            <BarColumnWrapper>
              <BarColumn2 src={bar4Img} alt={alt8}></BarColumn2>
            </BarColumnWrapper>
            <EducationColumn2>
              <Certification>{certification4}</Certification>
              <CertificationTitle>{certificationTitle4}</CertificationTitle>
            </EducationColumn2>
          </InfoRow>
          <InfoRow>
            <EducationColumn1>
              <Year2>
                2019<span className='styled'>-</span>2020
              </Year2>
              <EducationParagraph2>{educationParagraph5}</EducationParagraph2>
            </EducationColumn1>
            <BarColumnWrapper>
              <BarColumn2 src={bar5Img} alt={alt9}></BarColumn2>
            </BarColumnWrapper>
            <EducationColumn2>
              <Certification>{certification5}</Certification>
              <CertificationTitle>{certificationTitle5}</CertificationTitle>
            </EducationColumn2>
          </InfoRow>
        </EducationWrapper>
        <WorkTitle>
          Work <span className='styled'>experience</span>
        </WorkTitle>
        <WorkWrapper>
          <InfoRow>
            <WorkColumn1>
              <Company>{company1}</Company>
              <Period>{period1}</Period>
            </WorkColumn1>
            <BarColumnWrapper>
              <BarColumn2 src={bar6Img} alt={alt9}></BarColumn2>
            </BarColumnWrapper>
            <WorkColumn2>
              <Role>{role1}</Role>
              <WorkParagraph1>{workParagraph1a}</WorkParagraph1>
              <WorkParagraph2>{workParagraph1b}</WorkParagraph2>
              <ProjectDescription>{projectDescription1}</ProjectDescription>
            </WorkColumn2>
          </InfoRow>
          <InfoRow>
            <WorkColumn1>
              <Company>{company2}</Company>
              <Period>{period2}</Period>
            </WorkColumn1>
            <BarColumnWrapper>
              <BarColumn2 src={bar7Img} alt={alt9}></BarColumn2>
            </BarColumnWrapper>
            <WorkColumn2>
              <Role>{role2}</Role>
              <WorkParagraph1>{workParagraph2a}</WorkParagraph1>
              <WorkParagraph2>{workParagraph2b}</WorkParagraph2>
              <WorkParagraph2>{workParagraph2c}</WorkParagraph2>
              <ProjectDescription>{projectDescription2}</ProjectDescription>
            </WorkColumn2>
          </InfoRow>
          <InfoRow>
            <WorkColumn1>
              <Company>{company3}</Company>
              <Period>{period3}</Period>
            </WorkColumn1>
            <BarColumnWrapper>
              <BarColumn2 src={bar8Img} alt={alt9}></BarColumn2>
            </BarColumnWrapper>
            <WorkColumn2>
              <Role>{role3}</Role>
              <WorkParagraph1>{workParagraph3a}</WorkParagraph1>
              <WorkParagraph2>{workParagraph3b}</WorkParagraph2>
              <ProjectDescription>{projectDescription3}</ProjectDescription>
            </WorkColumn2>
          </InfoRow>
        </WorkWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
