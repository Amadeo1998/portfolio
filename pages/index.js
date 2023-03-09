import React from 'react'
import ReactFullpage from "@fullpage/react-fullpage";
import TypewriterComponent from 'typewriter-effect';
import Image from 'next/image'
const anchors = ["firstPage", "secondPage", "thirdPage"];


const App = () => (
  <ReactFullpage
  anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", 
      { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
        <div>
          <div className="section bg-gray-900 h-100vh flex justify-center">
            <div className='self-center'>
              <div className='grid grid-cols-2'>
                <div className='text-white w-full text-8xl ml-20 text-image'><TypewriterComponent
            options={{
                strings: ["Don’t tell me how educated you are, tell me how much you have travelled."],
                autoStart: true,
                loop: true
                
  }}></TypewriterComponent></div>
                <div className='ml-40'>
                  <div className='text-white text-8xl mb-10 ml-10'>Amadeo Noels</div>
                  <div className='grid justify-items-center'>
                    <img className='rounded-full h-80 w-80 mr-20' src='https://tecdn.b-cdn.net/img/new/standard/city/047.jpg' alt='image'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='section' style={{zIndex: -1, position: "fixed"}}>
            <Image src="/images/ayinet/backgroundUganda.jpeg" layout='fill' objectFit="cover" alt='group picture' className='darkened-image'/>
          </div>
          <div className='h-screen grid content-center grid-rows-3'>
            <div className='grid grid-rows-1 grid-flow-col justify-items-center mt-10'>
                <Image className='rounded-lg' width={400} height={300} src='/images/ayinet/ontbijt.jpg' alt='test'/>
                <Image className='rounded-lg' width={400} height={600} src='/images/ayinet/ayinetFolder.jpg' alt='test'/>
                <Image className='rounded-lg' width={400} height={600} src='/images/ayinet/office.jpg' alt='test'/>
              
            </div>
            <div className='text-2xl text-white text-image justify-items-center'>
              <p className='flow-root p-24 text-4xl leading-loose'>A ... in Uganda offered me a great opportunity to improve and develop my skills such as: communication, teamwork, leadership, problem-solving thinking.

Furthermore, this internship offered me an enrichment of a new culture. Thus, I experienced new traditions and a different way of life.</p>
            </div>

            <div className='grid grid-rows-1 grid-flow-col justify-items-center mt-10'>
              
              <Image className='rounded-lg' width={400} height={600} src='/images/ayinet/ayinet.jpg' alt='test'/>
              
              <Image className='rounded-lg' width={400} height={600} src='/images/ayinet/huis.jpg' alt='test'/>
              <Image className='rounded-lg' width={400} height={600} src='/images/ayinet/aap.jpg' alt='test'/>
            </div>
         </div>
        
          <div className='section' style={{zIndex: -1, position: "fixed"}}>
            <Image src="/images/minor/group.jpg" layout='fill' objectFit="cover" alt='group picture' className='darkened-image'/>
          </div>
          <div className="ml-10 grid grid-rows-3">
            <div className='grid grid-cols-4 gap-4 mb-10'>
              <Image className='rounded-lg ' width={400} height={100} src='/images/minor/atonium.jpg' alt='test'/>
              <Image className='rounded-lg' width={400} height={250} src='/images/minor/koninklijkPaleis.jpg' alt='test'/>
              <Image className='rounded-lg' width={400} height={250} src='/images/minor/kruger.jpg' alt='test'/>
              <Image className='rounded-lg' width={400} height={250} src='/images/minor/waterpretpark.jpg' alt='test'/>
          </div>
          <div className='text-image w-full text-6xl mt-10 text-white grid grid-cols-1 content-center'>
            <div>
              <TypewriterComponent
              
              options={{
                  strings: ["THE MINOR WAS A GREAT PERIOD, I VISIT 5 BEAUTIFULL COUNTRIES, CAME INTO CONTACT WITH NEW CULTURES, OTHER WAYS OF THINKING, BUT ABOVE ALL I GOT TO KNOW NEW PEOPLE."],
                  autoStart: true,
                  loop: true,
                  
                  
                  
                  
              }}>
            </TypewriterComponent>

            </div>
            
          </div>
          <div className='grid grid-cols-4 gap-4 mt-14'>
            <Image className='rounded-lg' width={400} height={100} src='/images/minor/boat.jpg' alt='test'/>
            <Image className='rounded-lg' width={400} height={250} src='/images/minor/sunsetBoat.jpg' alt='test'/>
          <div>
          </div>
          </div>
          </div>
          </div>
      );
    }}
    />
)

export default App
  