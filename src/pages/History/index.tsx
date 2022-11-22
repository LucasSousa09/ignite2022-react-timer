import { HistoryContainer, TableContainer, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jogar Marvel Snap</td>
              <td>30 minutos</td>
              <td>Há 1 minuto</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
            <tr>
              <td>Terminar a aula</td>
              <td>30 minutos</td>
              <td>Há 1 minuto</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Realizar o commit da aula</td>
              <td>30 minutos</td>
              <td>Há 1 minuto</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </TableContainer>
    </HistoryContainer>
  )
}
