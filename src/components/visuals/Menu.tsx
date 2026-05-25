import blackShield from '../../../public/logos/university.shield.rgb.black.svg'
import whiteShield from '../../../public/logos/university.shield.rgb.white.svg'
import pressLogo from '../../../public/logos/JHU-Logo-Padding-50.svg'

import { useState } from 'react'

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
  const [openMenuItem, setOpenMenuItem] = useState<boolean[]>(
    new Array(layeredMenuItems.length).fill(false),
  )

  const toggleMenu = (index: number) => {
    //start with all menu items closed, since only one should be open at a given time
    const newOpenMenuItems = new Array(layeredMenuItems.length).fill(false)

    if (!openMenuItem[index]) {
      //open the currently selected item
      newOpenMenuItems[index] = true
    }

    setOpenMenuItem(newOpenMenuItems)
  }

  if (menuFormat == 'Slim') {
    return (
      <nav className='menu slim'>
        <a className='home-logo' href='/'>
          <img
            height={40}
            width={40}
            src={useDarkTheme ? whiteShield : blackShield}
            alt='Go to front page'
          />
          <div>Hopkins Studies</div>
        </a>
        <ul className='main-menu'>
          <li>
            <div>
              About Us
              <span className='menu-arrow' />
            </div>
            <ul className='sub-main-menu'>
              <li>
                <a href='#'>Our Organization</a>
              </li>
              <li>
                <a href='#'>Our History</a>
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
                <a href='#'>Research Support</a>
              </li>
              <li>
                <a href='#'>Conferences</a>
              </li>
              <li>
                <a href='#'>Shop</a>
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
                <a href='#'>Archived Stories</a>
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
        <ul>
          {layeredMenuItems.map((menuItem, index) => {
            return (
              <li key={index} onClick={() => toggleMenu(index)}>
                <div>
                  {menuItem.main}
                  <span className='menu-arrow' />
                  <ul className='sub-main-menu' hidden={!openMenuItem[index]}>
                    {menuItem.sub.map((submenuItem, index) => {
                      return <li key={index}>{submenuItem}</li>
                    })}
                  </ul>
                </div>
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
        <a href='/'>
          <img src={pressLogo} height={100} alt='' />
        </a>
        <ul className='main-menu'>
          <li>
            <a href='#'>About Us</a>
          </li>
          <li>
            <a href='#'>Research</a>
          </li>
          <li>
            <a href='#'>Publications</a>
          </li>
          <li>
            <a href='#'>Conferences</a>
          </li>
          <li>
            <a href='#'>Resources</a>
          </li>
        </ul>
      </nav>
    )
  }

  return <div>Not a valid menu option</div>
}

export default Menu
