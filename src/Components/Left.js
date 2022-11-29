import Brand from "./Brand";
import Occasion from "./Occasion";
import Size from "./Size";
import User from "./User";

export default function Left() {
  return (
    <>
      <h2 className="text-center text-uppercase">Categories</h2>
      <Size name={['mens', 'Women', 'kids']} />
      <Brand name={['nike', 'puma', 'adidas']} />
      <Occasion />
      <User userage="20" />


    </>
  )
}
