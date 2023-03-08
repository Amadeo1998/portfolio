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
          <div className="text-yellow-500	">
            
<div/>

        </div>
          <div className="section bg-gray-900 h-100vh flex justify-center">
            <div className='self-center'>
              <div className='grid grid-cols-2'>
                <div className='text-white w-full text-8xl ml-20'><TypewriterComponent
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

          <div className="section background-image">
            <div className='flex justify-center'>
              <div className='mt-20 text-white text-8xl'>Endelea : Uganda</div>
            </div>
            <div className='grid grid-cols-4 m-10 gap-4'>
              <Image className='rounded-lg' width={400} height={300} src='/images/ayinet/ayinet.jpg' alt='test'/>
              <Image className='rounded-lg' width={400} height={300} src='/images/ayinet/huis.jpg' alt='test'/>
              <Image className='rounded-lg' width={400} height={300} src='/images/ayinet/aap.jpg' alt='test'/>
              <Image className='rounded-lg' width={400} height={300} src='/images/ayinet/aap.jpg' alt='test'/>
            </div>
            <div className='flex justify-center m-10'>
              <p className='text-white text-2xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et. Est ultricies integer quis auctor elit. Phasellus egestas tellus rutrum tellus. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Sed faucibus turpis in eu mi bibendum neque egestas congue. Egestas dui id ornare arcu odio. Egestas tellus rutrum tellus pellentesque. Arcu dictum varius duis at consectetur lorem donec massa sapien. Nunc sed augue lacus viverra vitae congue eu. Egestas tellus rutrum tellus pellentesque eu tincidunt. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Elementum nisi quis eleifend quam adipiscing. Eget nullam non nisi est sit amet facilisis magna. Vitae proin sagittis nisl rhoncus mattis. Turpis tincidunt id aliquet risus feugiat.
              </p>
            <div>
          </div>
        </div>
        </div>
        <div className="section bg-gray-900">
            <div className='flex justify-center'>
              <div className='mt-20 text-white text-8xl'>Endelea : Uganda</div>
            </div>
            <div className='grid grid-cols-4 m-10 gap-4'>
              <img className='rounded-lg' src='https://tecdn.b-cdn.net/img/new/standard/city/047.jpg' alt='image'/>
              <img className='rounded-lg' src='https://tecdn.b-cdn.net/img/new/standard/city/047.jpg' alt='image'/>
              <img className='rounded-lg' src='https://tecdn.b-cdn.net/img/new/standard/city/047.jpg' alt='image'/>
              <img className='rounded-lg' src='https://tecdn.b-cdn.net/img/new/standard/city/047.jpg' alt='image'/>
            </div>
            <div className='flex justify-center m-10'>
              <p className='text-white text-2xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et. Est ultricies integer quis auctor elit. Phasellus egestas tellus rutrum tellus. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Sed faucibus turpis in eu mi bibendum neque egestas congue. Egestas dui id ornare arcu odio. Egestas tellus rutrum tellus pellentesque. Arcu dictum varius duis at consectetur lorem donec massa sapien. Nunc sed augue lacus viverra vitae congue eu. Egestas tellus rutrum tellus pellentesque eu tincidunt. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Elementum nisi quis eleifend quam adipiscing. Eget nullam non nisi est sit amet facilisis magna. Vitae proin sagittis nisl rhoncus mattis. Turpis tincidunt id aliquet risus feugiat.
              </p>
            <div>
          </div>
          </div>
          </div>
          <div className='section' style={{zIndex: -1, position: "fixed"}}>
            <Image src="/images/minor/group.jpg" layout='fill' objectFit="cover" alt='group picture'/>
          </div>
          <div className="ml-10 relative grid grid-rows-3 h-100vh">
            <div className='grid grid-cols-4 gap-4 mt-10'>
              <Image className='rounded-lg' width={400} height={100} src='/images/minor/atonium.jpg' alt='test'/>
              <Image className='rounded-lg' width={400} height={250} src='/images/minor/koninklijkPaleis.jpg' alt='test'/>
              <Image className='rounded-lg' width={400} height={250} src='/images/minor/kruger.jpg' alt='test'/>
              <Image className='rounded-lg' width={400} height={250} src='/images/minor/waterpretpark.jpg' alt='test'/>
          </div>
          <div className='text-white w-full text-6xl'>
            <TypewriterComponent
              options={{
                  strings: ["THE MINOR WAS A GREAT PERIOD, I VISIT 5 BEAUTIFULL COUNTRIES, CAME INTO CONTACT WITH NEW CULTURES, OTHER WAYS OF THINKING, BUT ABOVE ALL I GOT TO KNOW NEW PEOPLE."],
                  autoStart: true,
                  loop: true
                  
              }}>
            </TypewriterComponent>
          </div>
          <div className='grid grid-cols-4 gap-4 mt-14 flex justify-between'>
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
  