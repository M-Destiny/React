import { Link } from "react-router-dom";
import ReactDOM from 'react-dom/client';

export default function Product( props ) {
  var { name, price, path } = props;
  return (

    <div className="text-center col-xxl-3 border">
      <img src={path} className="img-fluid" />
      <h3>
        {/* <Link to='singlepage'> */}
         {name}
        {/* </Link> */}
      </h3>
      <h4>
        {price}
      </h4>
      <p>
        <button className="btn btn-primary">Add To Cart</button>
      </p>
    </div>
  );
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// <div>
//   <Product name='Product1' price='1000'></Product>
//   <Product name='Product1' price='2000'></Product>
//   <Product name='Product1' price='3000'></Product>
//   <Product name='Product1' price='4000'></Product>
//   <Product name='Product1' price='5000'></Product>
//   <Product name='Product1' price='6000'></Product>
// </div>
// )




