import { Logo } from '@/components/logo/Logo'
import { Menu } from '@/components/menu/Menu'
import styled from 'styled-components'

export const Header = () => {
  return (
    <div>
      <StyledHeader>
        <Logo />
        <Menu />
      </StyledHeader>
    </div>
  )
}

const StyledHeader = styled.header`
  background-color: aqua;
  display: flex;
  justify-content: space-between;
`
