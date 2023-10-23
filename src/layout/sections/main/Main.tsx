import photo from '@/assets/img/photo.png'
import { FlexWrapper } from '@/components/FlexWrapper'
import { styled } from 'styled-components'

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={'center'} justify={'space-around'}>
        <div>
          <HelloTitle>Hi 👋, My name is Egor Galetsky I build things for web</HelloTitle>
          <MainTitle>A web developer</MainTitle>
        </div>
        <Photo />
      </FlexWrapper>
    </StyledMain>
  )
}

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #daf8c1;
`

const HelloTitle = styled.h2``

const MainTitle = styled.h1``

const Photo = styled.img.attrs(() => ({
  alt: 'photo',
  src: photo,
}))`
  width: 350px;
`
