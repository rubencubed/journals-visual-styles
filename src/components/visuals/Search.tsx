import type { MenuOption } from '../../utils/types'
import searchIcon from '../../../public/Search_Icon.svg'

const Search = ({
  menuOption,
  setShowPopup,
}: {
  menuOption: MenuOption
  setShowPopup?: () => void
}) => {
  if (menuOption == 'Slim' || menuOption == 'Layered') {
    return (
      <div onClick={setShowPopup} className='search-icon'>
        <img
          src={searchIcon}
          alt='Open Search Menu (Popup)'
          height={25}
          width={25}
        />
      </div>
    )
  }
  return <div></div>
}

export default Search
