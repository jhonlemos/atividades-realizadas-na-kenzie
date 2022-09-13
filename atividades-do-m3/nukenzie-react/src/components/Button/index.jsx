import "./styles.css"

function Button ({onClick, children, width = "fit-content", ...rest}){
    

    return (
        <button className="button" style={{width}} onClick={onClick} {...rest}>{children}</button>
    )
}

export default Button