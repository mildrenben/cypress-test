import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <header>Company name123</header>
      <main
        style={{
          background: 'grey',
          maxWidth: '200px',
          margin: '50px auto',
        }}
      >
        <Switch>
          <Route exact path="/">
            home page1
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
          </Route>
          <Route path="/about">About us</Route>
          <Route path="/dashboard">Dashboard</Route>
        </Switch>
      </main>
      <footer>
        Nam malesuada molestie dui sagittis porta. Pellentesque eleifend, odio
        sit amet consectetur dictum, sem mauris pellentesque purus, a hendrerit
        ipsum nunc ut justo. Suspendisse id sapien condimentum, rhoncus urna eu,
        varius justo. Aenean porttitor convallis nisi, a sagittis nibh. Maecenas
        vel nulla eu dolor varius facilisis id id elit. Aenean pulvinar blandit
        orci, eget laoreet magna ornare porttitor. Aenean pellentesque vulputate
        magna. Integer mattis, lacus eget porttitor dapibus, elit purus
        facilisis arcu, sit amet ultricies nisi massa ut ex. Vestibulum accumsan
        diam eget augue bibendum vulputate. Nulla et faucibus ex, luctus
        pharetra magna. Fusce vel iaculis nisl. Cras sed mattis orci, id
        eleifend ligula. Sed imperdiet sapien vitae varius euismod. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos.
      </footer>
    </Router>
  )
}

export default App
