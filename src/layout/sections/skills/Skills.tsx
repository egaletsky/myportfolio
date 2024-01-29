import { FlexWrapper } from '@/components/FlexWrapper'
import { SectionSubTitle, SectionTitle } from '@/components/SectionTexts'
import { Icon } from '@/components/icon/Icon'
import { styled } from 'styled-components'

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>My Tech Stack</SectionTitle>
      <SectionSubTitle>My Tech Stack</SectionSubTitle>
      <FlexWrapper align={'center'}>
        <Icon iconId={'html5Icon'} size={'120'} />
        <Icon iconId={'css3Icon'} size={'120'} />
        <Icon iconId={'jsIcon'} size={'120'} />
        <Icon iconId={'reactIcon'} size={'110'} />
        <Icon iconId={'reduxIcon'} size={'110'} />
        <Icon iconId={'bootstrapIcon'} size={'105'} />
      </FlexWrapper>

      <FlexWrapper>
        <Icon iconId={'tailwindIcon'} size={'130'} />
        <Icon iconId={'sassIcon'} size={'105'} />
        <Icon iconId={'gitIcon'} size={'108'} />
        <Icon iconId={'hzIcon'} size={'120'} />
        <Icon iconId={'vscodeIcon'} size={'112'} />
        <Icon iconId={'githIcon'} size={'100'} />
      </FlexWrapper>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`
  background-color: #abe1d8;
`
