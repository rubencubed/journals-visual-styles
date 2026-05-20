import blackShield from '../../../public/logos/university.shield.rgb.black.svg'
import whiteShield from '../../../public/logos/university.shield.rgb.white.svg'

const Menu = ({
  menuOption,
  useDarkTheme,
}: {
  menuOption: string
  useDarkTheme: boolean
}) => {
  if (menuOption == 'Slim') {
    return (
      <nav className='menu slim'>
        <a className='home-logo' href='/'>
          <img
            height={40}
            width={40}
            src={useDarkTheme ? whiteShield : blackShield}
            alt='Go to front page'
          />
          Hopkins Studies
        </a>
        <ul className='main-menu'>
          <li>
            <div>About Us</div>
            <ul className='sub-main-menu'>
              <li>
                <a href='/'>Our Organization</a>
              </li>
              <li>
                <a href='/'>Our History</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    )
  }

  if (menuOption == 'Layered') {
    return (
      <nav className='menu layered'>
        <ul></ul>
      </nav>
    )
  }

  if (menuOption == 'Centered') {
    return (
      <nav className='menu centered'>
        <ul></ul>
      </nav>
    )
  }

  return <div>Not a valid menu option</div>
}

export default Menu
