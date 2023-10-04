import React, {useState, useEffect} from 'react';
import content from './assets/data/data.json';
import Card from './components/Card';
import './styles/header.css';
import './App.css';

function App() {

  const [items, setItems] = useState(content);
  const [visible, setVisible] = useState(6);

  const filterItem = (city)=>{
    const updatedItems = content.filter((currElement)=>{
      return currElement.city === city;
    });
    setItems(updatedItems);
  }

  useEffect(()=>{
    filterItem('london');
  }, [])

  const showMoreItem = () =>{
    setVisible((preValue)=> preValue + 3)
  }

  return (
    <>
    {/* __________________ Heading _________________*/}
    <div className='heading'>
      <h1>Featured Listed Property</h1>
      <p>Real estate can be bought, sold, leased, or rented, and can be a valuable investment opportunity. The value of real estate can be...</p>
    </div>
    
    {/* _______________ Header ________________ */}
    <div className='header'>
      <div className='filter'>
        <button className='filter_btn' onClick={()=> filterItem('new york')}>New York</button>
        <button className='filter_btn' onClick={()=> filterItem('mumbai')}>Mumbai</button>
        <button className='filter_btn' onClick={()=> filterItem('paris')}>Paris</button>
        <button className='filter_btn' onClick={()=> filterItem('london')}>London</button>
      </div>
      <div className='viewAll'>View All <i class="ri-arrow-right-line"></i></div>
    </div>

    {/* ________________ APP _________________*/}
    <div className="App">
      {
        items.slice(0,visible).map(data => (
          <Card 
            key={data.id}
            image={data.image}
            name={data.name}
            tag={data.tag}
            price={data.price}
            location={data.location}
            room={data.room}
            bed={data.bed}
            bath={data.bath}
            area={data.area}
          />
        ))
      }
    </div>

    <div className='showMore'>
      <button className="show_btn" onClick={showMoreItem}>Show More</button>
    </div>
    </>
  );
}

export default App;
