import './style.css'
import testImage from './test.png'
import testSvgImage from './test-checkmark.svg'

export const App = () => {
    return <>
    <h1>React TypeScript</h1>
    <img src={testImage} alt="Test Image" width="250" />
    <img src={testSvgImage} alt="Test Checkmark SVG" width="250" />
    </>
}