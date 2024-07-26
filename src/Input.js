const Input = (props) => {
    return (
        <div>
            <div class="mb-3">
                <label for="name">{props.name}</label>
                <input type={props.type} class="form-control"></input>
            </div>
        </div>
    )
}

export default Input;