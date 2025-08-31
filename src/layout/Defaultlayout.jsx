import Header from '../components/Header'
import { Outlet } from "react-router-dom";

function Defaultlayout() {

    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )

}
export default Defaultlayout