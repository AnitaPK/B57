import Button from "./components/Button"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
        {/* <Navbar></Navbar>
        <Header />
      <div>Main content</div>
      <Footer /> */}

<Button eventName="Click Me" event="click me event" />
<Button eventName="Register" event="Register event"/>
<Button eventName="Login" event="Login event" />
<Button eventName="Read More" event="Read event" />
<Button eventName="View More" event="View event" />
<Button eventName="Add To Cart" event="Add To Cart event" />



      </>
  )
}

export default App
