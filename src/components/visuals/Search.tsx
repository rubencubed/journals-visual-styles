import type { MenuOption } from '../../utils/types'

const Search = ({ menuOption }: { menuOption: MenuOption }) => {
  if (menuOption == 'Slim' || menuOption == 'Layered') {
    return (
      <>
        <button
          // @ts-expect-error HTML command/commandfor are valid but not in React TS types yet
          command='show-modal'
          commandfor='search-form'
          className='search'
        ></button>
        <dialog closedby='any' id='search-form' className='search-form'>
          <form action='' method='dialog'>
            <input type='text' />
            <input type='submit' value='Search' />
          </form>
        </dialog>
      </>
    )
  }
  return <div></div>
}

export default Search
