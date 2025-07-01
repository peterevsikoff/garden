import "./net.scss";

const Net = ({height, width}: {
    height: number,
    width: number,
}) => {
    const step = 50;

    console.log(height, height / step);

    return(
        <div className="net">
            <svg viewBox={`0 0 ${width} ${height}`}>
                {
                    new Array(Math.ceil(height / step)).fill({}).map((_x, i) => {
                        const y = i * step;
                        if(i === 0) return null;
                        else return(
                            <line key={i} x1={0} y1={y} x2={width} y2={y} stroke="gray" strokeDasharray={"10, 10"}></line>
                        )
                    })
                }
                {
                    new Array(Math.ceil(width / step)).fill({}).map((_x, i) => {
                        const y = i * step;
                        if(i === 0) return null;
                        else return(
                            <line key={i} x1={y} y1={0} x2={y} y2={height} stroke="gray" strokeDasharray={"10, 10"}></line>
                        )
                    })
                }
            </svg>
        </div>
    )
}

export { Net };