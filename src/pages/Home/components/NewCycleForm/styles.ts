import styled from 'styled-components'

const BaseInput = styled.input`
  font-size: 1.125rem;
  font-weight: bold;

  height: 2.5rem;

  color: ${(props) => props.theme['gray-100']};
  background: transparent;

  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-400']};

  padding: 0 0.25rem;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.8rem;

  padding: 0 0.25rem;

  flex-wrap: wrap;

  label {
    color: ${(props) => props.theme['gray-100']};
  }
`
