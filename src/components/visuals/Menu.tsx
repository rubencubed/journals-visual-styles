import blackShield from '/logos/university.shield.rgb.black.svg?url'
import whiteShield from '/logos/university.shield.rgb.white.svg?url'
import pressLogo from '/logos/JHU-Logo-Padding-50.svg?url'

import Search from './Search'

const layeredMenuItems = [
  { main: 'About Us', sub: ['Our Organization', 'Our History'] },
  { main: 'Resources', sub: ['Research Support', 'Conferences', 'Shop'] },
  { main: 'News', sub: ['Archived Stories', 'Newsletter', 'RSS Feed'] },
]

const Menu = ({
  menuFormat,
  useDarkTheme,
}: {
  menuFormat: string
  useDarkTheme: boolean
}) => {
  if (menuFormat == 'Slim') {
    return (
      <nav className='menu slim'>
        <ul className='main-menu'>
          <a className='home-logo' href='/'>
            <img
              height={40}
              width={40}
              src={useDarkTheme ? whiteShield : blackShield}
              alt='Go to front page'
            />
            <div>Hopkins Studies</div>
          </a>
          <li>
            <div>
              About Us
              <span className='menu-arrow' />
            </div>
            <ul className='sub-main-menu'>
              <li>
                <a href='#'>
                  <span className='link-text'>Our Organization</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <span className='link-text'>Our History</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div>
              Resources
              <span className='menu-arrow' />
            </div>
            <ul className='sub-main-menu'>
              <li>
                <a href='#'>
                  <span className='link-text'>Research Support</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <span className='link-text'>Conferences</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <span className='link-text'>Shop</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div>
              News
              <span className='menu-arrow' />
            </div>
            <ul className='sub-main-menu'>
              <li>
                <a href='#'>
                  <span className='link-text'>Archived Stories</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    )
  }

  if (menuFormat == 'Layered') {
    return (
      <nav className='menu layered'>
        <div className='headWrapper'>
          <a href='#'>
            <img src={pressLogo} height={100} alt='' />
          </a>
          <Search menuOption={menuFormat} />
        </div>
        <ul className='main-menu'>
          {layeredMenuItems.map((menuItem, index) => {
            return (
              <li key={index}>
                <button popoverTarget={`menuItem${index}`}>
                  {menuItem.main}
                  <span className='menu-arrow' />
                </button>
                <ul
                  className='sub-main-menu'
                  id={`menuItem${index}`}
                  popover='auto'
                >
                  {menuItem.sub.map((submenuItem, index) => {
                    return (
                      <li key={index}>
                        <a href='#'>
                          <span className='link-text'>{submenuItem}</span>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }

  if (menuFormat == 'Centered') {
    return (
      <nav className='menu centered'>
        <a href='#'>
          <img src={pressLogo} height={100} alt='' />
        </a>
        <ul className='main-menu'>
          <li>
            <a href='#'>
              <span className='link-text'>About Us</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span className='link-text'>Research</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span className='link-text'>Publications</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span className='link-text'>Conferences</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span className='link-text'>Resources</span>
            </a>
          </li>
        </ul>
      </nav>
    )
  }

  return <div>Not a valid menu option</div>
}

export default Menu
