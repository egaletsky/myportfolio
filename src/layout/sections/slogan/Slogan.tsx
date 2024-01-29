import { SectionTitle } from '@/components/SectionTexts.tsx'
import { styled } from 'styled-components'

export const Slogan = () => {
  return (
    <StyledSlogan>
      <SectionTitle>For any questions please mail me:</SectionTitle>
      <SectionTitle>egor@galetsky.ru</SectionTitle>
    </StyledSlogan>
  )
}

const StyledSlogan = styled.section`
  min-height: 30vh;
  padding: auto;
  background: var(--Gradient-Heading, linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  align-items: center;

  /* Heading / H2 Header */
  font-family: DM Sans;
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px; /* 120.69% */
  letter-spacing: -1px;
`
