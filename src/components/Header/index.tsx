import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'

import { HeaderContainer, Image } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Image src={logoImg} alt="Dois triangulos verdes sobrepostos" />
      <nav>
        <NavLink to="/" title="Temporizador">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
