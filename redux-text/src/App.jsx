import { useState , } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import Bags  from './Bags'
 

 

function App() {

  const App = useSelector((state) => state.auth.userName)

 
const dummyData=
[
  {
    image:"https://www.detailafrica.com/wp-content/uploads/2021/03/Detail-Africa-Signature-Briefcase-Front-View-570x718.png",
    name: "signature briefcase",
    dollarPrice: "$234",
    nairaPrice: "₦130,000"
  },
  {
    image:"https://www.detailafrica.com/wp-content/uploads/2021/03/Detail-Africa-Signature-Briefcase-Front-View-570x718.png",
    name: "black briefcase",
    dollarPrice: "$134",
    nairaPrice: "₦80,000"
  },
  {
    image:"https://www.detailafrica.com/wp-content/uploads/2021/03/Detail-Africa-Signature-Briefcase-Front-View-570x718.png",
    name: "black briefcase",
    dollarPrice: "$334",
    nairaPrice: "₦230,000"
  },
  {
    image:"https://www.detailafrica.com/wp-content/uploads/2021/03/Detail-Africa-Signature-Briefcase-Front-View-570x718.png",
    name: "red briefcase",
    dollarPrice: "$364",
    nairaPrice: "₦730,000"
  },
]

function changeNGN (){


}
  


  return (

    <>

<div className='container'>
    {dummyData.map((item,index)=>{
    return(

      <Bags
      image={item.image}
      dollarPrice={item.dollarPrice}
      name={item.name}
    
key={index}


      
      />
    
    ); 
})}
</div>
    
    <button>NGN</button>
    <button>USD</button>
  
    </>
  )
}

export default App
