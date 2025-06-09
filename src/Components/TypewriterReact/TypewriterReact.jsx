import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const TypewriterReact = () => {

  const handleType = (count) => {
    // access word count number
    console.log(count)
  }

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

  return (
    <div className='App'>
      <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
        Find your perfect{' '}
        <span style={{  fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            
            words={['Group', 'Buddies', 'Squad', 'Gang!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1>
    </div>
  )
}

export default TypewriterReact