import { useState } from "react";


const Create = () => {
    const [form, setForm] = useState({
        name: "",
        image: "",
        minWeight: 0,
        maxWeight: 0,
        minHeight: 0,
        maxHeight: 0,
        minLifeSpan: 0,
        maxLifeSpan: 0,
        temperament: []
    })
    
    const [error, setError] = useState({
        name: "",
        image: "",
        minWeight: 0,
        maxWeight: 0,
        minHeight: 0,
        maxHeight: 0,
        minLifeSpan: 0,
        maxLifeSpan: 0,
        temperament: []
    })

    const onChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        validate({...form, [property]: value});
        
        setForm({...form, [property]: value})
    }


    const validate = (form) => {
        setError(...error)
    }


    const onSubmit = (event) => {
        event.preventDefault();
        axios.post("")
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" value={form.name} onChange={onChange} />
            </div>

            <div>
                <label htmlFor="image">Image: </label>
                <input type="text" name="image" value={form.image} onChange={onChange} />
            </div>

            <div>
                <label htmlFor="minWeight">Minimum Weight: </label>
                <input type="number" name="minWeight" value={form.minWeight} onChange={onChange} />
            </div>

            <div>
                <label htmlFor="maxWeight">Maximum Weight: </label>
                <input type="number" name="maxWeight" value={form.maxWeight} onChange={onChange} />
            </div>

            <div>
                <label htmlFor="minHeight">Minimum Height: </label>
                <input type="number" name="minHeight" value={form.minHeight} onChange={onChange} />
            </div>

            <div>
                <label htmlFor="maxHeight">Maximum Height: </label>
                <input type="number" name="maxHeight" value={form.maxHeight} onChange={onChange} />
            </div>

            <div>
                <label htmlFor="minLifeSpan">Minimum Life Span: </label>
                <input type="number" name="minLifeSpan" value={form.minLifeSpan} onChange={onChange} />
            </div>

            <div>
                <label htmlFor="maxLifeSpan">Maximum Life Span: </label>
                <input type="number" name="maxLifeSpan" value={form.maxLifeSpan} onChange={onChange} />
            </div>

            <div>
                <label htmlFor="temperament">Temperament: </label>
                <input type="text" name="temperament" value={form.temperament} onChange={onChange} />
            </div>

        </form>
    )
}


export default Create;