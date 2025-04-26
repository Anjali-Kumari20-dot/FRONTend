export default function Price ({oldPrice, newPrice}){
    let oldStyle = {
        textDecorationLine: "line-through",
    }
    let newStyles = {
        fontWeight: "900",
    }
    let styles = {
        backgroundColor: "#e0c367",
        height: "4rem",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
        marginTop: "0rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    return (
        <div style={styles}>
            <span style={oldStyle}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    )
}