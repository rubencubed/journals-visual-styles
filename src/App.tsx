import { useMemo, useState, useLayoutEffect } from 'react'

import RadioPicker from './components/selectors/RadioPicker'
import ColorPicker from './components/selectors/ColorPicker'
import SwitchHolder from './components/selectors/SwitchHolder'

import Menu from './components/visuals/Menu'
import Link from './components/visuals/Link'
import Paragraph from './components/visuals/Paragraph'
import Accordion from './components/visuals/Accordion'
import PeopleCard from './components/visuals/PeopleCard'

import calculateContrast from './utils/contrast'
import { convertHexColorToDecimalTuple, decimalToHex } from './utils/conversion'

const borderRadiusOptions = [
  { value: '0', label: 'Sharp' },
  { value: '.25rem', label: 'Slight' },
  { value: '.75rem', label: 'Medium' },
  { value: '100rem', label: 'Rounded' },
]

const paddingOptions = [
  { value: 'auto', label: 'Default' },
  { value: '0.25', label: 'A little' },
  { value: '0.75', label: 'More' },
  { value: '1', label: 'A lot' },
]

const transitionTimingOptions = [
  { value: '0ms', label: 'None' },
  { value: '250ms', label: '250ms' },
  { value: '500ms', label: '500ms' },
  { value: '750ms', label: '750ms' },
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
  const [secondaryColor, setSecondaryColor] = useState<
    [number, number, number]
  >([104, 172, 229])
  const [tertiaryColor, setTertiaryColor] = useState<[number, number, number]>([
    241, 196, 0,
  ])
  const [borderRadius, setBorderRadius] = useState('auto')
  const [padding, setPadding] = useState('auto')
  const [transitionTiming, setTransitionTiming] = useState('0')
  const [menu, setMenu] = useState('Slim')

  const mainHex = useMemo(() => decimalToHex(mainColor), [mainColor])
  const secondaryHex = useMemo(
    () => decimalToHex(secondaryColor),
    [secondaryColor],
  )
  const tertiaryHex = useMemo(
    () => decimalToHex(tertiaryColor),
    [tertiaryColor],
  )

  useLayoutEffect(() => {
    document.documentElement.style.setProperty('--main-color', mainHex)
  }, [mainHex])
  useLayoutEffect(() => {
    document.documentElement.style.setProperty(
      '--secondary-color',
      secondaryHex,
    )
  }, [secondaryHex])
  useLayoutEffect(() => {
    document.documentElement.style.setProperty('--tertiary-color', tertiaryHex)
  }, [tertiaryHex])

  useLayoutEffect(() => {
    document.documentElement.style.setProperty('--border-radius', borderRadius)
  }, [borderRadius])

  useLayoutEffect(() => {
    document.documentElement.style.setProperty(
      '--padding',
      padding.toString() + 'rem',
    )
  }, [padding])
  useLayoutEffect(() => {
    let containerPadding = 'auto'
    if (padding !== 'auto') {
      containerPadding = (parseFloat(padding) * 1.5).toString() + 'rem'
    }
    document.documentElement.style.setProperty(
      '--container-padding',
      containerPadding,
    )
  }, [padding])

  useLayoutEffect(() => {
    document.documentElement.style.setProperty(
      '--transition-timing',
      transitionTiming,
    )
  }, [transitionTiming])

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
        <ColorPicker
          name='Secondary'
          color={secondaryColor}
          setColor={setSecondaryColor}
        />
        <ColorPicker
          name='Tertiary'
          color={tertiaryColor}
          setColor={setTertiaryColor}
        />

        <RadioPicker
          name='Corner Rounding'
          options={borderRadiusOptions}
          setSelectedOption={setBorderRadius}
        />

        <RadioPicker
          name='Internal Spaci-ness'
          options={paddingOptions}
          setSelectedOption={setPadding}
        />

        <RadioPicker
          name='Animation Delay'
          options={transitionTimingOptions}
          setSelectedOption={setTransitionTiming}
        />

        <RadioPicker
          name='Menu Format'
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
          <h1>This is a Heading 1</h1>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
            porttitor erat, sed sollicitudin tellus.{' '}
            <Link>Fusce congue dui fringilla malesuada hendrerit</Link>. Nulla
            bibendum mauris in diam pharetra hendrerit. Aenean consequat maximus
            arcu ac molestie.
          </Paragraph>

          <a href='#' className='call-out primary small'>
            Join Now
          </a>
          <a href='#' className='call-out primary full'>
            Join Now
          </a>
          <a href='#' className='call-out secondary small'>
            Join Now
          </a>
          <a href='#' className='call-out secondary full'>
            Join Now
          </a>

          <Paragraph>
            Fusce id dapibus lorem. Sed ut sapien lectus. Sed vel sollicitudin
            lacus. Ut luctus lectus urna, molestie tempor elit suscipit id.
            Aenean nec diam rhoncus, lacinia mi a, bibendum turpis.
          </Paragraph>

          <h2>This is a Heading 2</h2>

          <Paragraph>
            Vivamus vel iaculis nisl. <Link>Fusce tempor neque augue</Link>, a
            convallis nulla faucibus sit amet. Maecenas porttitor elementum ex
            vitae dapibus.
          </Paragraph>

          <Accordion name='faqs' />

          <h2>This is a Heading 2</h2>
          <h3>This is a Heading 3</h3>

          <Paragraph>
            <Link>
              Nulla nulla sapien, blandit ac placerat et, facilisis a ante
            </Link>
            . Nunc auctor ligula non metus congue gravida non a ante. Nullam id
            aliquam mi.
          </Paragraph>

          <div className='people-card-holder'>
            <PeopleCard src='man1'>
              <h3>David Chen</h3>
              <p>
                David Chen brings extensive experience in applied research,
                program evaluation, and strategic planning. As an active
                contributor to the association's educational initiatives, he
                works to promote evidence-based practices and support the
                professional growth of members at every career stage.
              </p>
              <p>
                His commitment to interdisciplinary collaboration has helped
                build partnerships between academic institutions, industry
                leaders, and public-sector organizations, creating opportunities
                for innovation and impact.
              </p>
            </PeopleCard>
            <PeopleCard src='woman1'>
              <h3>Sarah Mitchell</h3>
              <p>
                Sarah Mitchell serves as a leading voice within the
                association's research and policy initiatives, contributing
                expertise in organizational development, governance, and
                professional standards. Her work helps strengthen the connection
                between academic scholarship and practical application across
                the field.
              </p>
            </PeopleCard>
            <PeopleCard src='man2'>
              <h3>James Walker</h3>
              <p>
                James Walker is a respected advocate for professional
                development and lifelong learning. His contributions to the
                association include leadership in curriculum advancement,
                workforce development initiatives, and efforts to strengthen
                connections across the academic community.
              </p>
            </PeopleCard>
            <PeopleCard src='woman2'>
              <h3>Maria Gonzalez</h3>
              <p>
                Maria Gonzalez focuses on advancing scholarly communication and
                member outreach. Her expertise in public engagement and
                knowledge dissemination supports the association's mission to
                make research more accessible, relevant, and impactful for both
                professional and public audiences.
              </p>
              <p>
                Maria regularly contributes to conference planning, publication
                development, and mentorship programs designed to cultivate the
                next generation of leaders within the discipline. Her program
                "Lead Next" was award the Gold Award from NISO.
              </p>
            </PeopleCard>
          </div>

          <Paragraph>
            Vivamus auctor eu neque quis fringilla. Curabitur molestie orci
            nulla. In sed cursus nibh. Nulla sit amet ipsum condimentum, gravida
            neque vel, commodo mi.
          </Paragraph>
          <h3>
            <Link>This is a Heading 3 and a Link</Link>
          </h3>

          <Paragraph>
            Donec nec velit vitae est sollicitudin pharetra. Vestibulum sit amet
            semper sem. Morbi id quam id nisl maximus lacinia.
          </Paragraph>

          <Paragraph>
            <Link>Cras a aliquet odio</Link>. Maecenas elementum nibh eu
            ultrices efficitur. Morbi eget sem imperdiet, mattis orci ut,
            scelerisque ipsum.
          </Paragraph>

          <h4>This is a Heading 4</h4>

          <Paragraph>
            Proin tristique elit eu tortor tristique, quis consequat nibh
            mattis. Nullam a arcu non purus mollis accumsan.{' '}
            <Link>
              Etiam elit leo, rutrum eget erat non, blandit luctus ante
            </Link>
            .
          </Paragraph>

          <h2>This is a Heading 2</h2>

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
