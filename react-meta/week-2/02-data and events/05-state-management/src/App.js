import React from 'react'
import MealsList from './components/MealsList'
import Counter from './components/Counter'

function App() {
  return (
    <>
      <MealsList>
        <MealsList/>
        <Counter />
      </MealsList>
    </>
  )
}

export default App