import React, { useState } from 'react'

const MealsContext = React.createContext(); 

const todayMeals = ["baked beans", "baked sweet potatoes", "vegetables"];  

const MealsProvider = ({children}) => {

  const [meals, setMealsList] = useState(todayMeals)

  return (
    <MealsContext.Provider value={{meals}} >
      {children}
    </MealsContext.Provider>
  )

}

export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider