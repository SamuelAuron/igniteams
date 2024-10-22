import { useNavigation } from '@react-navigation/native';

import { BackIcon, Container, Logo, BackButton } from './styles'


import logoImg from '@assets/logo.png'

type Props = {
  showBackButton?: boolean;
}
export function Header({ showBackButton=false}: Props) {
  const navigation = useNavigation();

  function handleGoback(){
    navigation.navigate('groups')
  }
  
    return (
      <Container>
        {showBackButton &&
        <BackButton onPress={handleGoback}>
          <BackIcon size={24} color="#FFFFFF" />
        </BackButton>}
        <Logo source={logoImg}/>
      </Container>
    )
  
}
