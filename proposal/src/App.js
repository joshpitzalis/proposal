import React, { Component } from 'react'

import Header from './components/Header'
import TextBlock from './components/TextBlock'
import FullWidthImage from './components/FullWidthImage'
import Image from './components/Image'
import Title from './components/Title'
import Signature from './components/Signature'
import BulletPoints from './components/BulletPoints'

import data from './data.js'
import option1 from './images/option1.png'
import option2 from './images/option2.png'
import palette1 from './images/palette1.png'
import palette2 from './images/palette2.png'

class App extends Component {
  render() {
    return (
      <main>
        <Header
          backgroundURL={data.header.backgroundURL}
          date={data.header.date}
          type={data.header.type}
          client={data.header.client}
          heading={data.header.heading}
        />
        <TextBlock
          p1={data.text.p1}
          p2={data.text.p2}
          p3={data.text.p3}
          p4={data.text.p4}
          p5={data.text.p5}
        />
        <BulletPoints list={data.list.l1} />
        <Title title="Design Option 1" />
        <TextBlock p1={data.text.p7} />
        <Image source={option1} alt="option1" />
        <TextBlock p1={data.text.p8} />
        <FullWidthImage source={palette1} alt="option1" />
        <Title title="Option 2" />
        <TextBlock p1={data.text.p9} />
        <FullWidthImage source={option2} alt="option2" />
        <TextBlock p1={data.text.p10} />
        <FullWidthImage source={palette2} alt="option1" />
        <Title title="Timeline & Cost" />
        <TextBlock p1={data.text.p11} />
        <Title title="Next Steps" />
        <TextBlock p1={data.text.p12} p2={data.text.p13} />
        <Signature
          author={data.header.author}
          designation={data.header.designation}
          contact={data.header.contact}
        />
      </main>
    )
  }
}

export default App
