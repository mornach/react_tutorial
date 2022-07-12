export function Button(props) {
    return (
        <button className='button' onClick={props.func}>{props.text}</button>
    )
}
