import classNames from "classnames"

export const Label = (
  {
    value,
    className,
    htmlFor,
  }
    :
    {
      value: string,
      className?: string,
      htmlFor?: string
    }
) => {
  return (
    <label
      className={classNames(className)}
      htmlFor={htmlFor || ''}
    >
      {value}
    </label >
  )
}