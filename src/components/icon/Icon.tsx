import iconSprite from '@/assets/icons-sprite.svg'

type IconPropsType = {
  height?: string
  iconId: string
  viewBox?: string
  width?: string
}

export const Icon = (props: IconPropsType) => {
  return (
    <svg
      fill={'none'}
      height={props.height || '50'}
      viewBox={props.viewBox || '0 0 50 50'}
      width={props.width || '50'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <use xlinkHref={`${iconSprite}#${props.iconId}`} />
    </svg>
  )
}
