import "./styles.css"

function Filters({filters}){


    return(
        <div className="filterButton">
            <button className="button" onClick={()=>filters.getAll()}>Todos</button>
            <button className="button" onClick={()=>filters.getEntradas()}>Entradas</button>
            <button className="button" onClick={()=>filters.getSaidas()}>Despesas</button>
        </div>

    )
}

export default Filters