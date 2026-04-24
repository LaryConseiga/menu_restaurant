
export default function  Checkbox({checked,label,id,onChange}) {
    return (
        <div>
            <input id={id} className=" form-check form-check-input" type="checkbox" checked={checked} onChange={onChange}/>
            <label className="form-check-label">{label}</label>
        </div>
    )
}