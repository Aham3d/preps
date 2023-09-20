// function Btn() {
//   const clickHandler = () => console.log('clicked');
//   return (
//     <button onClick={clickHandler}>
//       Click me
//     </button>
//   )
// }
// export default Btn;

function Btn() {
  const hover = () => console.log('hovered');
  return (
    <button onMouseOver={hover}>
      Click me
    </button>
  )
}
export default Btn;