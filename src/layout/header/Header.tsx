import { FlexWrapper } from '@/components/FlexWrapper.tsx'
import { Icon } from '@/components/icon/Icon.tsx'
import { Logo } from '@/components/logo/Logo'
import { Menu } from '@/components/menu/Menu'
import styled from 'styled-components'

const menuItems = ['Home', 'About', 'Tech Stack', 'Project', 'Contact']

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <FlexWrapper>
        <Menu menuItems={menuItems} />
        <Icon iconId={'linkedinIcon'} size={'30'} />
        <Icon iconId={'linkedinIcon'} size={'30'} />
        <Icon iconId={'linkedinIcon'} size={'30'} />
      </FlexWrapper>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: aqua;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
`
