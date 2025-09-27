import React from "react";

import Home from "./Home";
import About from "./About";



const user = {
  name: 'Liza',
  city: 'New York',
  bio: 'I made this!',
  color: 'firebrick',
  links: {
    github: 'https://github.com/liza',
    linkedin: 'https://www.linkedin.com/in/liza/'
  
  }
}
function App() {
  console.log(user); // totally fine for debugging

  return (
    <div>
      <nav>
        <h1>My Portofolio</h1>
        </nav>
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
    

</div>
  );
}

export default App;
