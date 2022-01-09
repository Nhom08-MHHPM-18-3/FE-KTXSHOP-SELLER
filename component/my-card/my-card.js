import { Card, CardActions, CardContent } from "@material-ui/core";

export function MyCard(props) {
    let style = {
        marginBottom: 20,
        ... (props.style || {})
    }
    return <Card
        style={style}
    >
        {props.children}
    </Card >
}

export function MyCardHeader(props) {
    return <div
        style={{
            marginTop: "60px",
            color: "#fff",
            backgroundColor: "#00b46e",// "#907060",
            padding: props.small ? 8 : 16,
            display: "flex"
        }}
    >
        <span style={{ fontSize: props.small ? 15 : 24, width: "100%" }}>{props.title}</span>
        {props.children && <div style={{ textAlign: "right", width: "100%" }}>{props.children}</div>}
    </div>
}

export function MyCardContent(props) {
    let style = props.style || {}
    style.borderTop = "solid 1px #ccc"
    return <CardContent
        style={style}
    >
        {props.children}
    </CardContent>
}

export function MyCardActions(props) {
    return <CardActions
        style={{
            borderTop: "solid 1px #ccc",
            backgroundColor: "#f6f6f6",
            display: "flex",
            padding: 16
        }}
    >
        {props.children}
    </CardActions>
}