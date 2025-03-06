import './App.css'
import Header from "./components/Header"
import UserList from "./components/UserList"


function App() {
 

  return (
    <>
    <Header/>

  <main className="main">
    {/* <!-- Section component  --> */}
    <UserList/>

    
     


    {/* <!-- Create/Edit Form component  --> */}
    


    {/* <!-- Delete user component  --> */}
    

  </main>
  {/* <!-- Footer component  --> */}
  <footer className="footer">
    <p>This site is designed to be used for training purposes at SoftUni.</p>
  </footer>
    </>
  )
}

export default App
