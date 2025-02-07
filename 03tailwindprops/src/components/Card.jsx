import React from 'react'

function Card({username="HC", post = "not assigned yet"}) {
      //console.log(props)
  return (
      <div>
            
            <figure className='md:flex w-fit bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800'>
                  
                  <img src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-in-headphones-showing-programming-process-on-a-laptop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class='w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto' />
                  <div className=' pt-6 md:p-8 text-center md:text-left space-y-4'>
                        <blockquote>
                              <p className='text-white text-lg font-medium'>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, voluptates.

                              </p>
                        </blockquote>
                        <figcaption className='font-medium'>
                              <div className="text-slate-500 dark:text-sky-400">
                                    {username}
                              </div>
                              <div className="text-slate-700 dark:text-slate-500">
                                    {post}

                              </div>
                        </figcaption>

                  </div>
            </figure>
      </div>
  )
}

export default Card
