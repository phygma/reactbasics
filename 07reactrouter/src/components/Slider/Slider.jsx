import React from 'react'

const Slider = () => {
      return (
            <div className='flex'>
                  <div className='left-btn absolute  items-center justify-start'>
                        <button>{"<"}</button>
                  </div>
                  <img src="https://www.contentgarden.in/PICTURES/030122/WATERMARK/20220103078L.jpg" alt="image"  className='justify-center'/>
                  
                  <div className='right-btn absolute items-center justify-end'><button>{">"}</button></div>
            </div>
      )
}

export default Slider
