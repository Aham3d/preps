import GrandChild from "./Grandchild"

function Child(props) {
  return  (
    <>
      <h1>{props.name} <GrandChild job="software" learning="React"/></h1>
    </>
  )
}
export default Child