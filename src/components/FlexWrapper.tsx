import { styled } from 'styled-components'

type FlexWrapperPropsType = {
  align?: string
  direction?: string
  gap?: string
  justify?: string
  wrap?: string
}
export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  gap: ${props => props.gap || '20px'};
`
