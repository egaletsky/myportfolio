import { FlexWrapper } from '@/components/FlexWrapper.tsx'
import { Icon } from '@/components/icon/Icon.tsx'
import { Logo } from '@/components/logo/Logo.tsx'
import { styled } from 'styled-components'

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper align={'center'} justify={'space-between'}>
        <Logo />
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon iconId={'linkedinIcon'} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon iconId={'twitterIcon'} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon iconId={'githubIcon'} />
            </SocialLink>
          </SocialItem>
        </SocialList>
      </FlexWrapper>
      <FlexWrapper align={'center'} justify={'space-between'}>
        <Copyright>Designed and built by Pavan MG with Love & Coffee</Copyright>
      </FlexWrapper>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: #abe1d8;
  min-height: 20vh;
`

const SocialList = styled.ul`
  display: flex;
`

const SocialItem = styled.li``

const SocialLink = styled.a``

const Copyright = styled.span`
  margin: 0 auto;
`
