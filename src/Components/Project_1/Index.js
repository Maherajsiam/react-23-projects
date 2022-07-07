import React, {useState} from 'react';
import data from './data';
import List from './List';
import './index.css';



function Index() {
  const [people, setPeople] = useState(data);
  return (
   <main>
     <section className="container">
     <h3>{people.length} Brithday Today</h3>
     
     <List people = {people}/>
     <button onClick={()=>setPeople([])}>All Clear</button>
     </section>
   </main>
  );
}

export default Index;