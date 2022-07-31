import { LogoComponent } from './LogoComponent.js'
import { SearchBar } from './SearchBar.js'
import { DivContainer, DivGrid } from './styles.js'
export const Navbar = () => {
  return (
        <DivContainer>
          <DivGrid>
          <LogoComponent/>
          <SearchBar/>
          </DivGrid>
        </DivContainer>
  )
}
