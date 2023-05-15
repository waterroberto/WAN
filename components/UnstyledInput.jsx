import * as React from "react";
import { useInput } from "@mui/base";
import { styled } from "@mui/system";
import { unstable_useForkRef as useForkRef } from "@mui/utils";

const StyledInputElement = styled("input")(
  ({ theme }) => `
  width: 100%;
  font-family: 'Public sans;
  font-size: 17px !important;
  font-weight: 300;
  padding: 1.25rem 1rem;
  border-radius: 8px;
  color: #eee;
  background: #1b1b1b;
  border: none;
  outline: none;
  border: 1px solid #333;
  max-width: 512px;
  display: block;
  margin: auto;
`
);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  const { getRootProps, getInputProps } = useInput(props);

  const inputProps = getInputProps();

  // Make sure that both the forwarded ref and the ref returned from the getInputProps are applied on the input element
  inputProps.ref = useForkRef(inputProps.ref, ref);

  return (
    <div {...getRootProps()} style={{ width: "100%" }}>
      <StyledInputElement
        {...props}
        {...inputProps}
        required
        sx={{ mb: 2, ...props.sx }}
      />
    </div>
  );
});

export default CustomInput;
