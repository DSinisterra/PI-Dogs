import { useState } from "react";
import axios from "axios";
import style from './Create.module.css';
import NavBar from '../../components/NavBar/NavBar';

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
        <>
            <NavBar />
            <form onSubmit={onSubmit} className={style.form}>

                    <label htmlFor="name" className={style.label}>Name </label>
                    <input type="text" name="name" value={form.name} onChange={onChange} className={style.input} />

                    <label htmlFor="image" className={style.label}>Image </label>
                    <input type="text" name="image" value={form.image} onChange={onChange} className={style.input} />

                    <label htmlFor="minWeight" className={style.label}>Minimum Weight </label>
                    <input type="number" name="minWeight" value={form.minWeight} onChange={onChange} className={style.input} />

                    <label htmlFor="maxWeight" className={style.label}>Maximum Weight </label>
                    <input type="number" name="maxWeight" value={form.maxWeight} onChange={onChange} className={style.input} />

                    <label htmlFor="minHeight" className={style.label}>Minimum Height </label>
                    <input type="number" name="minHeight" value={form.minHeight} onChange={onChange} className={style.input} />

                    <label htmlFor="maxHeight" className={style.label}>Maximum Height </label>
                    <input type="number" name="maxHeight" value={form.maxHeight} onChange={onChange} className={style.input} />

                    <label htmlFor="minLifeSpan" className={style.label}>Minimum Life Span </label>
                    <input type="number" name="minLifeSpan" value={form.minLifeSpan} onChange={onChange} className={style.input} />

                    <label htmlFor="maxLifeSpan" className={style.label}>Maximum Life Span: </label>
                    <input type="number" name="maxLifeSpan" value={form.maxLifeSpan} onChange={onChange} className={style.input} />

                    <label htmlFor="temperament" className={style.label}>Temperament </label>
                    <input type="text" name="temperament" value={form.temperament} onChange={onChange} className={style.input} />

            </form>
        </>
    )
}


export default Create;