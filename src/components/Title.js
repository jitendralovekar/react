const Title = (prop) => {
    const {firstword,secondword} = prop
    return (
        <div className="section-title">
        <h2>{firstword} <span>{secondword}</span></h2>
        </div>
    )
}
export default Title