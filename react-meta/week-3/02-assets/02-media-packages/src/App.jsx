import './App.css'
import ReactPlayer from 'react-player'

function App() {

  // const MyVideo = () => {
  //   return(
  //     <ReactPlayer url='https://www.youtube.com/watch?v=h0VBlfJfDV4&ab_channel=Aurora'/>
  //   )
  // }

  const vidUrl = "https://www.youtube.com/watch?v=h0VBlfJfDV4&ab_channel=Aurora"; 
  
  return (
    <>
      <ReactPlayer url={vidUrl} playing={false} volume={0.5} />
    </>
  )
}

export default App
