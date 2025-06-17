import type { Dispatch, SetStateAction } from "react";
import { Close } from "../media";
import "./variety.scss";

const Variety = ({description, title, setShowVariety}: {
        description: string,
        title: string,
        setShowVariety: Dispatch<SetStateAction<{description: string, title: string} | null>>,
    }) => {

    return(
        <div className="variety-container-fade">
            <div className="variety-container">
                <div className="variety-title">
                    <span>{title}</span>
                    <button onClick={() => setShowVariety(null)}>
                       <Close/> 
                    </button>
                </div>
                <div className="variety-desc">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export { Variety };