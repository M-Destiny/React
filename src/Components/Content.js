import Left from "./Left";
import Right from "./Right";

export default function Content(){
    return (
        <div className="container">
            <div className="row">
        <div className="col-xxl-3">
        <Left />
        </div>
        <div className="col-xxl-9">
            <Right />
        </div>
        </div>
        </div>
        
    )
}