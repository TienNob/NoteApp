

function Header({handleChangeMode}){
    
    return(
        <div className="header">
            <h2 className="header-logo">NOTE APP</h2>
            <button onClick={() => handleChangeMode(mode => !mode)} className="btn btn-mode">Toggle Mode</button>
        </div>
    )
}
export default Header