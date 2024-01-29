import iconSprite from '@/assets/icons-sprite.svg'

type IconPropsType = {
  iconId: string
  size?: string
}

export const Icon = (props: IconPropsType) => {
  return (
    <svg
      fill={'none'}
      height={props.size || '50'}
      viewBox={`0 0 ${props.size} ${props.size}` || '0 0 50 50'}
      width={props.size || '50'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <use xlinkHref={`${iconSprite}#${props.iconId}`} />
    </svg>
  )
}
