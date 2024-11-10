import { useEffect, useState } from 'react'
import './App.css'
import ToogleDarkMode from './Component/ToogleDarkMode'
import UseHooks from './Component/UseHooks.jsx'
import ChangeImage from './Component/ChangeImage.jsx'
function App() {
  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center  dark:text-gray-100 bg-white dark:bg-gray-900 dark:text-xl text-gray-900">
      <h1 className="text-4xl font-bold mb-4">Wanna See Dogs</h1>
      <ToogleDarkMode />
        <p className="mt-4">
        This is an button helps you to meet your near one.
        </p> 
       <div>
          <p> Click the button </p>
          <br />
          <ChangeImage url={'https://dog.ceo/api/breeds/image/random'}/>
      </div>
    </div>
    </>
  )
}

export default App
