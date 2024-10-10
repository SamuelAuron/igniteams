import { BackIcon, Container, Logo, BackButton } from './styles'


import logoImg from '@assets/logo.png'

type Props = {
  showBackButton?: boolean;
}
export function Header({ showBackButton=false}: Props) {
  
    return (
      <Container>
        {showBackButton &&
        <BackButton>
          <BackIcon size={24} color="#FFFFFF" />
        </BackButton>}
        <Logo source={logoImg}/>
      </Container>
    )
  
}
