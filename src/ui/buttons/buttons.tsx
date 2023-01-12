import classNames from "classnames"
import Image from "next/image"
import { primaryButton, primaryIconButton } from "./model/buttonModel"

export const PrimaryButton = (props: primaryButton) => {
  return (
    <button
      onClick={props.onClick}
      className={classNames(props.className)}
      disabled={props.disabled}
    > {props.value || ''}</button >
  )
}

export const PrimaryIconButton = (props: primaryIconButton) => {
  return (
    <button
      onClick={props.onClick}
      className={classNames(props.className)}
    >
      {props.value || ''}
      <Image src={props?.image || "/images/generic/right-arrow.svg"} alt={props.alt || ''} layout='fixed' width={props?.imageDim?.width || '18px'} height={props?.imageDim?.height || '8px'} />
    </button >
  )
}