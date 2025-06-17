import { Tree } from "../media";
import "./garden-container.scss";

const GardenContainer = () => {
    const plants = [
        { id: "1", type: "Яблоня", name: "Гирлянда", left: "20", top: "20"},
        { id: "2", type: "Яблоня", name: "Медок", left: "100", top: "20"},
        { id: "3", type: "Яблоня", name: "Московское ожерелье", left: "180", top: "20"},
        { id: "4", type: "Яблоня", name: "Валюта", left: "260", top: "20"},
    ];

    return(
        <div className="garden-container">
            {
                plants.map(x => 
                    <div key={x.id} className="tree-card" style={{top: `${x.top}px`, left: `${x.left}px`}}>
                        <div className="img-container">
                            <Tree/>
                        </div>
                        <h4>{x.type}</h4>
                        <h3>{x.name}</h3>
                    </div>
                )
            }
        </div>
    )
}

export { GardenContainer };