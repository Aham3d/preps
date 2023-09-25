import './App.css'


function App() {

  const time = new Date(); 
  const day = time.toLocaleString("en-us", {weekday: "long"});
  const morning = time.getHours() >= 6 && time.getHours() <= 12;
  let dayMessage; 

  if(day.toLowerCase() === "monday") {
    dayMessage = `happy ${day}`;
  } else if(day.toLowerCase() === 'tuesday') {
    dayMessage = `${day} it is, 4 days to go`; 
  } else if(day.toLowerCase() === 'wednesday') {
    dayMessage = `${day}, hald way there`; 
  } else if(day.toLowerCase() === 'thursday') {
    dayMessage = `${day}, start your weekend planning`; 
  } else if(day.toLowerCase() === 'friday') {
    dayMessage = `${day}, excitement >>`;
  } else {
    dayMessage = `${day} it is!! have fun`; 
  }

  return (
    <>
      <h1>{dayMessage}</h1>
      <h2>{morning ? "had your breakfast" : ' '}</h2>
    </>
  )
}

export default App