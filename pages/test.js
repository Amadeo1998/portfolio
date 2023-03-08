import TypewriterComponent from "typewriter-effect"

export default function Test(){
    return(
        <div className="text-yellow-500	">
            <TypewriterComponent
            options={{
                strings: ['Hello', 'World'],
                autoStart: true,
                loop: true,
                
  }}
/>

        </div>
        
    )
}