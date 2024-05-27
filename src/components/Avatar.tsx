import styles from "./Avatar.module.css"

interface IAvatarProps {
  hasBorder?: boolean,
  src: string,
  alt?: string
}

export function Avatar({ hasBorder = true, ...props }: IAvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  )
}