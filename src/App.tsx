import './style.css'
import testImage from './test.png'
import testSvgImage from './test-checkmark.svg'

import Counter from './Counter'

export const App = () => {
    return <>
    <h1>React TypeScript - Mode: {process.env.NODE_ENV} {process.env.name}</h1>
    <img src={testImage} alt="Test Image" width="250" />
    <img src={testSvgImage} alt="Test Checkmark SVG" width="250" />
    <Counter />
    </>
}