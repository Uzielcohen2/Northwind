import "./Spinner.css";
import loaderImage from "../../assets/images/Spin@1x-1.0s-200px-200px.gif"

function Spinner(): JSX.Element {
    return (
        <div className="Spinner">
            <img src={loaderImage} />
        </div>
    );
}

export default Spinner;
