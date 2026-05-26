import { useMemo, useState, useLayoutEffect } from 'react'

import RadioPicker from './components/selectors/RadioPicker'
import ColorPicker from './components/selectors/ColorPicker'
import SwitchHolder from './components/selectors/SwitchHolder'

import Button from './components/visuals/Button'
import Link from './components/visuals/Link'
import Paragraph from './components/visuals/Paragraph'
import Menu from './components/visuals/Menu'

import calculateContrast from './utils/contrast'
import { convertHexColorToDecimalTuple, decimalToHex } from './utils/conversion'

const borderRadiusOptions = [
  { value: '0', label: 'Sharp' },
  { value: '.25rem', label: 'Slight' },
  { value: '.75rem', label: 'Medium' },
  { value: '100rem', label: 'Rounded' },
]

const paddingOptions = [
  { value: '0', label: 'Trimmed' },
  { value: 'revert', label: 'Standard' },
  { value: '.5rem 1rem', label: 'More' },
  { value: '1rem 2rem', label: 'Much More' },
]

const menuFormats = [
  { value: 'Slim', label: 'Slim' },
  { value: 'Layered', label: 'Layered' },
  { value: 'Centered', label: 'Centered' },
]

function App() {
  const [mainColor, setMainColor] = useState<[number, number, number]>([
    0, 45, 114,
  ])
  const [borderRadius, setBorderRadius] = useState('auto')
  const [padding, setPadding] = useState('auto')
  const [menu, setMenu] = useState('Layered')

  useLayoutEffect(() => {
    document.documentElement.style.setProperty('--border-radius', borderRadius)
  }, [borderRadius])

  useLayoutEffect(() => {
    document.documentElement.style.setProperty('--padding', padding)
  }, [padding])

  const mainHex = useMemo(() => decimalToHex(mainColor), [mainColor])
  useLayoutEffect(() => {
    document.documentElement.style.setProperty('--main-color', mainHex)
  }, [mainHex])

  const backgroundColor = useMemo(() => {
    const decimalTuple = convertHexColorToDecimalTuple(mainHex)
    return calculateContrast(decimalTuple).color
  }, [mainHex])
  useLayoutEffect(() => {
    document.documentElement.style.setProperty(
      '--background-color',
      backgroundColor,
    )
  }, [backgroundColor])

  const textColor = useMemo(() => {
    return backgroundColor === '#ffffff' ? '#000000' : '#ffffff'
  }, [backgroundColor])
  useLayoutEffect(() => {
    document.documentElement.style.setProperty('--text-color', textColor)
  }, [textColor])

  return (
    <>
      <div id='control-panel'>
        <ColorPicker name='Main' color={mainColor} setColor={setMainColor} />

        <RadioPicker
          name='Corner Rounding'
          options={borderRadiusOptions}
          setSelectedOption={setBorderRadius}
        />

        <RadioPicker
          name='Padding'
          options={paddingOptions}
          setSelectedOption={setPadding}
        />
        <RadioPicker
          name='Menu Formats'
          options={menuFormats}
          setSelectedOption={setMenu}
        />
        <section>
          <h2>Highlight Options</h2>
          <SwitchHolder id='linkFill' label='Link Fill' />
          <SwitchHolder id='menuFooterContrast' label='Menu/Footer Contrast' />
          <SwitchHolder id='menuUnderline' label='Menu Underline Effect' />
          <SwitchHolder id='menuHover' label='Menu Hover Effect' />
        </section>
      </div>

      <div id='interface'>
        <Menu menuFormat={menu} useDarkTheme={backgroundColor === '#000000'} />
        <main>
          <h1 style={{ color: mainHex }}>This is a Heading 1</h1>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
            porttitor erat, sed sollicitudin tellus.{' '}
            <Link color={mainHex}>
              Fusce congue dui fringilla malesuada hendrerit
            </Link>
            . Nulla bibendum mauris in diam pharetra hendrerit. Aenean consequat
            maximus arcu ac molestie.
          </Paragraph>

          <Button
            backgroundColor={mainHex}
            color={backgroundColor}
            borderRadius={borderRadius}
            padding={padding}
            content='Join Now'
          />

          <Paragraph>
            Fusce id dapibus lorem. Sed ut sapien lectus. Sed vel sollicitudin
            lacus. Ut luctus lectus urna, molestie tempor elit suscipit id.
            Aenean nec diam rhoncus, lacinia mi a, bibendum turpis.
          </Paragraph>

          <h2 style={{ color: textColor }}>This is a Heading 2</h2>

          <Paragraph>
            Vivamus vel iaculis nisl.{' '}
            <Link color={mainHex}>Fusce tempor neque augue</Link>, a convallis
            nulla faucibus sit amet. Maecenas porttitor elementum ex vitae
            dapibus.
          </Paragraph>
          <h2 style={{ color: textColor }}>This is a Heading 2</h2>
          <h3 style={{ color: textColor }}>This is a Heading 3</h3>

          <Paragraph>
            <Link color={mainHex}>
              Nulla nulla sapien, blandit ac placerat et, facilisis a ante
            </Link>
            . Nunc auctor ligula non metus congue gravida non a ante. Nullam id
            aliquam mi.
          </Paragraph>

          <Paragraph>
            Vivamus auctor eu neque quis fringilla. Curabitur molestie orci
            nulla. In sed cursus nibh. Nulla sit amet ipsum condimentum, gravida
            neque vel, commodo mi.
          </Paragraph>
          <h3 style={{ color: textColor }}>
            <Link color={mainHex}>This is a Heading 3 and a Link</Link>
          </h3>

          <Paragraph>
            Donec nec velit vitae est sollicitudin pharetra. Vestibulum sit amet
            semper sem. Morbi id quam id nisl maximus lacinia.
          </Paragraph>

          <Paragraph>
            <Link color={mainHex}>Cras a aliquet odio</Link>. Maecenas elementum
            nibh eu ultrices efficitur. Morbi eget sem imperdiet, mattis orci
            ut, scelerisque ipsum.
          </Paragraph>

          <h4 style={{ color: textColor }}>This is a Heading 4</h4>

          <Paragraph>
            Proin tristique elit eu tortor tristique, quis consequat nibh
            mattis. Nullam a arcu non purus mollis accumsan.{' '}
            <Link color={mainHex}>
              Etiam elit leo, rutrum eget erat non, blandit luctus ante
            </Link>
            .
          </Paragraph>

          <h2 style={{ color: textColor }}>This is a Heading 2</h2>

          <Paragraph>
            Pellentesque eleifend pulvinar tempus. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
          </Paragraph>

          <Paragraph>
            Etiam dui mi, porttitor auctor tellus a, facilisis vehicula enim.
            Morbi tincidunt vitae urna in egestas. Integer mauris sapien,
            dapibus eget facilisis quis, posuere non ex.
          </Paragraph>
        </main>
        <footer>This is the footer content</footer>
      </div>
    </>
  )
}

export default App
