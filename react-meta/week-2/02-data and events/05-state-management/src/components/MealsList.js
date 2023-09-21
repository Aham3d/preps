import { useMealsListContext } from '../providers/MealsProvider'

const MealsList =() => {

  const { meals } = useMealsListContext(); 

  return (
    <>
      <h1>Meals List using Context API</h1>
      {meals.map((meal, index) => {
        <h2 key={index} > {meal}</h2>
      })}
    </>
  )
}

export default MealsList