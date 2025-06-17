import { Tree } from "../media";
import "./garden-container.scss";

const GardenContainer = () => {
    return(
        <div className="garden-container">
            <div className="tree-card">
                <Tree/>
            </div>
            План
        </div>
    )
}

export { GardenContainer };