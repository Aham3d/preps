import Image from "next/image";
import Logo from "../public/logo.png"
function Nav() {
  return (
    <nav className="flex justify-around bg-gray-900 text-white h-10 text-center items-center">
      <div className="flex gap-2">
        <Image className="logo" src={Logo} alt="logo"/>
        <h3 className="nav-title-1">React Facts</h3>
      </div>
      <h4>React course - project 1</h4>
    </nav>
  )
}

export default Nav;