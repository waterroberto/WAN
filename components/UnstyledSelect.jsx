import { Option, Popper, Select } from '@mui/base';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';
import { styled } from '@mui/system';
import * as React from 'react';

const Button = React.forwardRef(function Button(props, ref) {
  const { ownerState, ...other } = props;
  return (
    <button
      type='button'
      {...other}
      ref={ref}
      style={{
        marginBottom: '1rem',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#ccc',
        maxWidth: '512px',
      }}
    >
      <span>{other.children}</span>
      <UnfoldMoreRoundedIcon />
    </button>
  );
});

const StyledButton = styled(Button, { shouldForwardProp: () => true })(
  ({ theme }) => `
  font-family: Public sans;
  font-size: 0.8rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 290px;
  padding: 1rem;
  border-radius: 10px;
  text-align: left;
  line-height: 1.5;
  background: #1b1b1b;
  border: 1px solid #222;
  color: #fff
  position: relative;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: #1b1b1b;
    border-color: #222;
  }
  `
);

const StyledListbox = styled('ul')(
  ({ theme }) => `
  font-family: Public Sans;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 290px;
  border-radius: 10px;
  // overflow: auto;
  outline: 0px;
  background: #1b1b1b;
  border: 1px solid #222;
  color: #ccc;
  `
);

export const StyledOption = styled(Option)(
  ({ theme }) => `
  list-style: none;
  padding: 12px;
  border-radius: 8px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }
  `
);

const StyledPopper = styled(Popper)`
  z-index: 1;
`;

export const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const slots = {
    root: StyledButton,
    listbox: StyledListbox,
    popper: StyledPopper,
    ...props.slots,
  };

  return (
    <>
      <Select {...props} ref={ref} slots={slots} mb={2} />
    </>
  );
});
