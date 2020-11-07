import { navigate } from "gatsby"
import React from "react"
import Header from "../components/Header"
import Lolly from "../components/Lolly"
// import IMG from '../svg/lolly-image.svg'



export default function Home() {


  return (
    <div className="container">
      <Header />
      <div className="listLollies">
        <div>
          <Lolly fillLollyTop="#deaa43" fillLollyMiddle="#d52358" fillLollyBottom="#e95946" />
        </div>
        <div>
          <Lolly fillLollyTop="green" fillLollyMiddle="lightBlue" fillLollyBottom="yellow" />
        </div>
      </div>
      <button onClick={() => {
        navigate("/createNew");
      }}>Create New Lolly</button>
    </div>

  )
}
