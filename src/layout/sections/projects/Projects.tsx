import imgProject_1 from '@/assets/img/project_1.png'
import imgProject_2 from '@/assets/img/project_2.png'
import imgProject_3 from '@/assets/img/project_3.png'
import imgProject_4 from '@/assets/img/project_4.png'
import imgProject_5 from '@/assets/img/project_5.png'
import imgProject_6 from '@/assets/img/project_6.png'
import { FlexWrapper } from '@/components/FlexWrapper'
import { SectionSubTitle, SectionTitle } from '@/components/SectionTexts'
import { Project } from '@/layout/sections/projects/project/Project'
import { styled } from 'styled-components'

export const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle>Projects</SectionTitle>
      <SectionSubTitle>Things I’ve built so far</SectionSubTitle>
      <FlexWrapper wrap={'wrap'}>
        <Project
          src={imgProject_1}
          text={
            'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
          }
          title={'Project Tile goes here'}
        />
        <Project
          src={imgProject_2}
          text={
            'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
          }
          title={'Project Tile goes here'}
        />
        <Project
          src={imgProject_3}
          text={
            'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
          }
          title={'Project Tile goes here'}
        />
        <Project
          src={imgProject_4}
          text={
            'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
          }
          title={'Project Tile goes here'}
        />
        <Project
          src={imgProject_5}
          text={
            'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
          }
          title={'Project Tile goes here'}
        />
        <Project
          src={imgProject_6}
          text={
            'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
          }
          title={'Project Tile goes here'}
        />
      </FlexWrapper>
    </StyledProjects>
  )
}

const StyledProjects = styled.div`
  background-color: #e7c3f5;
`
