import React from 'react'
import { createProvider } from 'funcup'
import { Provider } from 'rebass'
import NavBar from './NavBar'
import Header from './Header'
import About from './About'
import Demo from './Demo'
import Props from './Props'
import Configuration from './Configuration'
import ComponentNav from './ComponentNav'
import ExampleList from './ExampleList'
import Footer from './Footer'

const App = props => (
  <Provider>
    <NavBar />
    <Header />
    <About />
    <Demo />
    <Props />
    <Configuration />
    <ComponentNav />
    <ExampleList />
    <Footer />
  </Provider>
)

const state = {
  xray: false
}

export default createProvider(state)(App)
