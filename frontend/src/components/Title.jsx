import React from 'react'

const Title = ({text1, text2, isDarkBg}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
        
        <p className={`${isDarkBg ? 'text-white' : 'text-emerald-700'} font-light tracking-widest text-lg sm:text-2xl uppercase`}>
          {text1} <span className={`${isDarkBg ? 'text-gray-300' : 'text-gray-800'} font-medium`}>{text2}</span>
        </p>        
        <div className={`w-8 sm:w-12 h-px sm:h-0.5 ${isDarkBg ? 'bg-white/30' : 'bg-gray-800'}`}></div>
    </div>
  )
}

export default Title;