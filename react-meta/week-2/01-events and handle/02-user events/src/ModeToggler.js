function ModeToggler() {

  let darkModeON = false; 
  const darkMode = <h1>Dark mode is ON</h1>
  const lightMode = <h1>Light mode is ON</h1>

  function handleClick() {
    darkModeON = !darkModeON; 
    if(darkModeON == true) {
      console.log("Dark mode is ON");
    } else {
      console.log("Light mode is ON");
    }
  }

  return (
    <>
      {darkModeON ? darkMode : lightMode}
      <button onClick={handleClick}>
        Click me
      </button>
    </>
  )

}

export default ModeToggler