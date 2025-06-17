import { HomeContainer } from "../HomeContainer";
import { Bush, Tree } from "../media";
import "./garden-container.scss";

const GardenContainer = () => {
    const plants = [
        { id: "1", img: <Tree/>, type: "Яблоня", name: "Гирлянда", left: "20", top: "110"},
        { id: "2", img: <Tree/>, type: "Яблоня", name: "Медок", left: "110", top: "110"},
        { id: "3", img: <Tree/>, type: "Яблоня", name: "Московское ожерелье", left: "200", top: "110"},
        { id: "4", img: <Tree/>, type: "Яблоня", name: "Валюта", left: "290", top: "110"},
        { id: "5", img: <Tree/>, type: "Яблоня", name: "Медок", left: "380", top: "110"},
        { id: "6", img: <Tree/>, type: "Яблоня", name: "Есения", left: "470", top: "110"},
        { id: "7", img: <Tree/>, type: "Яблоня", name: "Президент", left: "560", top: "110"},
        { id: "8", img: <Tree/>, type: "Яблоня", name: "Президент", left: "650", top: "110"},
        { id: "9", img: <Tree/>, type: "Груша", name: "Забава", left: "740", top: "110"},
        { id: "10", img: <Tree/>, type: "Груша", name: "Забава", left: "740", top: "200"},
        { id: "11", img: <Tree/>, type: "Вишня", name: "Вянок", left: "740", top: "290"},
        { id: "12", img: <Tree/>, type: "Вишня", name: "Живица", left: "740", top: "380"},
        { id: "13", img: <Tree/>, type: "Черешня", name: "Наслаждение", left: "740", top: "470"},
        { id: "14", img: <Tree/>, type: "Черешня", name: "Белица", left: "740", top: "560"},
        { id: "15", img: <Tree/>, type: "Черешня", name: "Сюбаровская", left: "740", top: "650"},
        { id: "16", img: <Tree/>, type: "Персик", name: "Алекс", left: "740", top: "740"},
        { id: "17", img: <Tree/>, type: "Алыча", name: "Ветразь", left: "740", top: "830"},
        { id: "18", img: <Tree/>, type: "Слива", name: "Стенли", left: "740", top: "920"},

        { id: "19", img: <Tree/>, type: "Яблоня", name: "Арнабель", left: "20", top: "200"},
        { id: "20", img: <Tree/>, type: "Яблоня", name: "Редорин", left: "110", top: "200"},
        { id: "21", img: <Tree/>, type: "Яблоня", name: "Елена", left: "200", top: "200"},

        { id: "22", img: <Tree/>, type: "Алыча", name: "Дана", left: "20", top: "290"},
        { id: "23", img: <Tree/>, type: "Яблоня", name: "Алеся", left: "110", top: "290"},

        { id: "24", img: <Tree/>, type: "Алыча", name: "Сонейка", left: "20", top: "470"},
        { id: "25", img: <Tree/>, type: "Абрикос", name: "", left: "20", top: "560"},
        { id: "26", img: <Tree/>, type: "Рябина", name: "Черная", left: "20", top: "650"},
        { id: "27", img: <Tree/>, type: "Жимолость", name: "", left: "20", top: "740"},

        { id: "28", img: <Bush/>, type: "Крыжовник", name: "Малахит", left: "20", top: "20"},
        { id: "29", img: <Bush/>, type: "Крыжовник", name: "Ваяр", left: "110", top: "20"},
        { id: "30", img: <Bush/>, type: "Смородина", name: "Селеченская (черная)", left: "200", top: "20"},
        { id: "31", img: <Bush/>, type: "Смородина", name: "Смоляниковская (белая)", left: "290", top: "20"},
        { id: "32", img: <Bush/>, type: "Смородина", name: "Ненаглядная (красная)", left: "380", top: "20"},
        { id: "33", img: <Bush/>, type: "Смородина", name: "Селеченская (черная)", left: "470", top: "20"},
        { id: "34", img: <Bush/>, type: "Смородина", name: "Смоляниковская (белая)", left: "560", top: "20"},
        { id: "35", img: <Bush/>, type: "Смородина", name: "Ненаглядная (красная)", left: "650", top: "20"},

        { id: "36", img: <Bush/>, type: "Малина", name: "Самохвал", left: "740", top: "20"},
    ];

    return(
        <div className="garden-container">
            {
                plants.map(x => 
                    <div key={x.id} className="tree-card" style={{top: `${x.top}px`, left: `${x.left}px`}}>
                        <div className="img-container">
                            {x.img}
                        </div>
                        <h4>{x.type}</h4>
                        <h3>{x.name}</h3>
                    </div>
                )
            }
            <HomeContainer/>
        </div>
    )
}

export { GardenContainer };