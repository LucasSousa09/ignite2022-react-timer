import { createContext, ReactNode, useState } from 'react'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesContentData {
  cycles: Cycle[]
  countdownFinished: boolean
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
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [countdownFinished, setCountdownFinished] = useState(false)
  const [amountOfSecondsPassed, setAmountOFSecondsPassed] = useState(0)
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const activeCycle = cycles.find((cycle: Cycle) => cycle.id === activeCycleId)

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    // Quando a mudança de estado depender do estado anterior, é bom usarmos a arrow function
    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setAmountOFSecondsPassed(0)
  }

  function interruptCurrentCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
    setActiveCycleId(null)
  }

  function setSecondsPassed(seconds: number) {
    setAmountOFSecondsPassed(seconds)
  }

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          setCountdownFinished(true)
          setActiveCycleId(null)
          return { ...cycle, finisheddDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        createNewCycle,
        setSecondsPassed,
        countdownFinished,
        interruptCurrentCycle,
        amountOfSecondsPassed,
        markCurrentCycleAsFinished,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
