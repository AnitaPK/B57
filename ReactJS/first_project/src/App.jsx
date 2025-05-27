import { BrowserRouter, Routes,Route } from "react-router-dom"
import Button from "./components/Button"
import Counter from "./components/Counter"
import Footer from "./components/Footer"
import Header from "./components/Header"
import LoginForm from "./components/LoginForm"
import Navbar from "./components/Navbar"
import ToDoList from "./components/ToDoList"
import ToDoListParams from "./components/ToDoListParams"
import FetchFruit from "./components/FetchFruit"

function App() {

  return (
<BrowserRouter>
<Navbar></Navbar>
<Routes>
    <Route path="/" element={<LoginForm />}></Route>
    <Route path="/counter" element={<Counter />}></Route>
    <Route path="/todo/*" element={<ToDoList />}></Route>
    <Route path={`/todo/:ID`} element={<ToDoListParams />}></Route>
    <Route path='/fruits' element={<FetchFruit />}></Route>
</Routes>
  
</BrowserRouter>


//     <>

//         <Navbar></Navbar>
//         <Header />
//       <div>Main content</div>
//       <Footer />
// <hr></hr>
// <Button eventName="Click Me" event="click me event" />
// <Button eventName="Register" event="Register event"/>
// <Button eventName="Login" event="Login event" />
// <Button eventName="Read More" event="Read event" />
// <Button eventName="View More" event="View event" />
// <Button eventName="Add To Cart" event="Add To Cart event" />
// <br></br>
// <hr></hr>

// <Counter />
// <br></br><hr></hr>

// <LoginForm />
// <br></br>
// <hr></hr>
// <ToDoList />
//     </>
  )
}

export default App
