import React, { Component } from 'react'

import Header from './components/Header'
import TextBlock from './components/TextBlock'
import FullWidthImage from './components/FullWidthImage'
import Image from './components/Image'
import Title from './components/Title'
import Signature from './components/Signature'
import Skirting from './components/Skirting'
import PricingTable from './components/PricingTable'

import flowchart from './images/FLOWCHART.png'
import data from './data.js'
import option1 from './images/option1.png'
import option2 from './images/option2.png'
import responsive from './images/responsive.png'
import colours from './images/colours.png'
import pricing from './images/pricing.png'

class App extends Component {
  render() {
    return (
      <div>
        <Header
          backgroundURL={data.backgroundURL}
          date={data.date}
          type={data.type}
          client={data.client}
        />
        <Title title="The repercussion of ugliness is endless" />
        <TextBlock />
        <FullWidthImage source={flowchart} alt="flowchart" />
        <Title title="Option 1" />
        <TextBlock />
        <Image source={option1} alt="option1" />
        <Title title="Option 2" />
        <TextBlock />
        <FullWidthImage source={option2} alt="option2" />
        <TextBlock />
        <FullWidthImage source={responsive} alt="responsive versions" />
        <FullWidthImage source={responsive} alt="responsive versions" />
        <TextBlock />
        <PricingTable />
        <Title title="Next Steps" />
        <TextBlock />
        <Signature
          author={data.author}
          designation={data.designation}
          contact={data.contact}
        />
        <Skirting />
      </div>
    )
  }
}

export default App
