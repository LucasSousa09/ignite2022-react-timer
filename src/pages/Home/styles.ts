import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    min-width: fit-content;
  }
`

export const InputContainer = styled.div`
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

export const TimerContainer = styled.div`
  display: flex;
  gap: 1rem;

  padding-top: 4rem;
  padding-bottom: 3.5rem;

  line-height: 8rem;

  span {
    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;

    color: ${(props) => props.theme['gray-100']};
    background-color: ${(props) => props.theme['gray-700']};

    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;

  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};

  width: 4rem;
  overflow: hidden;

  display: flex;
  justify-content: center;
`

export const StartCountdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 1.25rem 0;

  width: 100%;

  border: 0;
  border-radius: 8px;

  color: ${(props) => props.theme['gray-100']};
  background-color: ${(props) => props.theme['green-500']};

  font-weight: 700;

  cursor: pointer;

  &:hover:not(:disabled) {
    background: ${(props) => props.theme['green-700']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
