import * as React from 'react';
import SelectUnstyled, {
  selectUnstyledClasses,
  SelectUnstyledProps,
  SelectUnstyledRootSlotProps,
} from '@mui/base/SelectUnstyled';
import OptionUnstyled, {
  optionUnstyledClasses,
} from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';
import { FormControlUnstyled } from '@mui/base';

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

  &.${selectUnstyledClasses.focusVisible} {
    border-color: #222;
    outline: 3px solid #ccc;
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

export const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 12px;
  border-radius: 8px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: #1b1b1b;
    color: #ccc;
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: #1b1b1b;
    color: #ccc;
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: #1b1b1b;
    color: #ccc;
  }

  &.${optionUnstyledClasses.disabled} {
    color: #bbb;
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: #222;
    color: #bbb};
  }
  `
);

const StyledPopper = styled(PopperUnstyled)`
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
      <SelectUnstyled {...props} ref={ref} slots={slots} mb={2} />
    </>
  );
});
