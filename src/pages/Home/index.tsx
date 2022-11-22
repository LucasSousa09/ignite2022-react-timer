import { Play } from 'phosphor-react'

import {
  HomeContainer,
  InputContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
  TimerContainer,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form>
        <InputContainer>
          <label htmlFor="task">Vou trabalhar em </label>
          <TaskInput
            id="task"
            type="text"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1"></option>
            <option value="Tarefa 02"></option>
            <option value="Padrão 3"></option>
            <option value="Multidão 04"></option>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            id="minutesAmount"
            type="number"
            placeholder="00"
            step={5}
            min={5}
            max={5}
          />

          <span>minutos.</span>
        </InputContainer>

        <TimerContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </TimerContainer>

        <StartCountdownButton disabled type="submit">
          <Play size={24} /> Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
