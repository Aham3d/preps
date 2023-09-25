import './App.css'
import ReactPlayer from 'react-player'

function App() {

  const MyVideo = () => {
    return(
      <ReactPlayer url='https://www.youtube.com/watch?v=h0VBlfJfDV4&ab_channel=Aurora'/>
    )
  }

  return (
    <>
      <MyVideo />
    </>
  )
}

export default App
