import StyledHeader from "./styles/Header.styled"

function  Header ({children}: {children: string}) {
  return (
    <StyledHeader>{children}</StyledHeader>
  )
}

export default Header