
import Image from 'next/image';
import girl from './public/images/girl.png'
export default function Home() {
  return (
 <>
 <div className="mainContainer" >
 
  <div className="about" >
    <h1>Hi! My name is <strong>Rabia</strong>
    </h1>   
    <p>“I’m a web developer who has learned HTML, CSS, and TypeScript.
    <br/> Recently, I’ve been diving into Next.js through the GIAIC program.”</p>
    </div>

 <div className="image">
    <Image 
      src={girl}
      width={300}
      height={400}
      
      alt="image of girl"
      />     
      </div>


 </div>
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  </>
  );
}
