import React, { useEffect, useState } from "react";
const ToogleDarkMode = ()=>{
  const [darkmode,setDarkmode] = useState();
  useEffect(() => {
    const savedMode = localStorage.getItem('dark-mode');
    if (savedMode === 'true') {
      setDarkmode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);
  const handleToggle = () => {
    setDarkmode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('dark-mode', newMode);
      return newMode;
    });
  };
  return (
    <>
      <button onClick={handleToggle}
      className="p-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      {darkmode ? 'Light Mode' : 'Dark Mode'}
      </button>    
    </>
  )
}
export default ToogleDarkMode;