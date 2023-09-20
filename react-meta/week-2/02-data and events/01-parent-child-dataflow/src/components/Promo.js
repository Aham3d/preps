// parent
import PromoHeading from "./PromoHeading"
function Promo() {

  const data = {
    heading: "90% off all items!",
    callToAction: "Everything must go"
  }

  return (
    <>
      <PromoHeading 
        heading={data.heading}
        callToAction={data.callToAction}
      />
    </>
  )
}

export default Promo