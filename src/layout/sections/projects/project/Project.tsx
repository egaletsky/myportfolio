import { styled } from 'styled-components'

type ProjectPropsType = {
  src: string
  text: string
  title: string
}

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <Image src={props.src} />
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
    </StyledProject>
  )
}

const StyledProject = styled.div`
  border-radius: 20px;
  background: #fff;
  box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.2);
  width: 375px;
  height: 570px;
  flex-shrink: 0;
`
const Title = styled.h4`
  color: #000;
  text-align: center;
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 92.857% */
`
const Text = styled.p`
  color: #666;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 26px; /* 144.444% */
`
const Image = styled.img`
  border-radius: 20px 20px 0px 0px;
  width: 100%;
  height: 250px;
  object-fit: cover;
`
