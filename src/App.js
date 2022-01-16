import { useState, useEffect } from 'react'
import './app.css'
import Person0 from './Testimonial/person1.jpg'
import data from './data';
 
function App() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    if(index === data.length) {
      setIndex(0)
    }
    if(index < 0) {
      setIndex(data.length - 1)
    }
  }, [index])

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index+1)
    }, 3000)
    return () => clearInterval(slider)
  }, [index])

  return (
    <div className="App">

      <h1>Review</h1>
    
      <div className="container">
        {
          data.map((person, personIndex) => {
            const { id, name, img, job, desc } = person
            let position = 'next'

            if(personIndex === index) {
              position = 'active'
            }
            if(personIndex === index - 1 || (index === 0 && personIndex === data.length - 1)) {
              position = 'prev'
            }

            return (
              <article className={position} key={personIndex}> 
                <div className="img_container">  
                  <img src={Person0} alt={desc} />
                </div>
                <h3>{name}</h3>
                <h4>{job}</h4>
                <p>{desc}</p>
              </article>
            )
          })
        }

        <div className="btn_container">
          <button className="btn prevBtn" type='button' onClick={() => setIndex(index - 1)} >L</button>
          <button className="btn nextBtn" type='button' onClick={() => setIndex(index + 1)}>R</button>
        </div>
    
      </div>
    </div>
  );
}

export default App;
