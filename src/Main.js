import Navbar from "./Navbar";
import BudgetCalculator from "./Calculator";
import LogTransaction from "./LogTransaction";

const Main = () => {
    return ( 
        <><Navbar />
        <div className="main">
            <div className="container">

            </div>
            <div className="container">
                <LogTransaction />
            </div>
        </div></>
     );
}
 
export default Main;