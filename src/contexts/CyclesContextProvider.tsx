import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { Cycle, cyclesReducer } from '../reducers/cycles/reducer'
import {
  addNewCycleAction,
  finishCurrentCycleAction,
  interruptCycleAction,
} from '../reducers/cycles/actions'
import { differenceInSeconds } from 'date-fns'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CyclesContentData {
  cycles: Cycle[]
  activeCycleId: string | null
  amountOfSecondsPassed: number
  activeCycle: Cycle | undefined
  interruptCurrentCycle: () => void
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
}

export const CyclesContext = createContext({} as CyclesContentData)

interface CycleContextProviderProps {
  children: ReactNode
}

export function CyclesContextProvider({ children }: CycleContextProviderProps) {
  const [cyclesState, dispach] = useReducer(
    cyclesReducer,
    // Array de inicialização ↓↓
    {
      cycles: [],
      activeCycleId: null,
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignitimer:cycles-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return {
        cycles: [],
        activeCycleId: null,
      }
    },
  )

  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find((cycle: Cycle) => cycle.id === activeCycleId)

  const [amountOfSecondsPassed, setAmountOFSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }

    return 0
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)

    localStorage.setItem('@ignitimer:cycles-state-1.0.0', stateJSON)
  }, [cyclesState])

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    // Quando a mudança de estado depender do estado anterior, é bom usarmos a arrow function
    // setCycles((state) => [...state, newCycle])

    dispach(addNewCycleAction(newCycle))
    setAmountOFSecondsPassed(0)
  }

  function interruptCurrentCycle() {
    dispach(interruptCycleAction(activeCycleId))
  }

  function setSecondsPassed(seconds: number) {
    setAmountOFSecondsPassed(seconds)
  }

  function markCurrentCycleAsFinished() {
    dispach(finishCurrentCycleAction())

    // Versão antiga utilizando useState
    // setCycles((state) =>
    //   state.map((cycle) => {
    //     if (cycle.id === activeCycleId) {
    //       setCountdownFinished(true)
    //       setActiveCycleId(null)
    //       return { ...cycle, finisheddDate: new Date() }
    //     } else {
    //       return cycle
    //     }
    //   }),
    // )
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        createNewCycle,
        setSecondsPassed,
        interruptCurrentCycle,
        amountOfSecondsPassed,
        markCurrentCycleAsFinished,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
