export const UserSuccessMessage = (props) => {

  return (
    <label
      className="success_msg"
    >
      {props.msg || "Successfull."}
    </label>
  )
}

export const UserErrorMessage = (props) => {

  return (
    <label
      className="error_msg"
    >
      {props.msg || "Successfull."}
    </label>
  )
}