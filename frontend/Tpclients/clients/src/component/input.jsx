function Inputs({placeholder,value,onChange}){

    return (<div >
        <input
            className="form-control"
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    </div>)


}

export default Inputs;