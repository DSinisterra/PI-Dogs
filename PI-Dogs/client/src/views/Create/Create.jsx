import { useState, useEffect } from "react";
import axios from "axios";
import style from './Create.module.css';
import NavBar from '../../components/NavBar/NavBar';
import { getTemperament } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Create = () => {
    const dispatch = useDispatch();
    const temperaments = useSelector(state => state.temperament);
    
    useEffect(() => {
        dispatch(getTemperament())
    }, [dispatch])

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

    const handleChange = (event) => {
        const {name, value} = event.target;

        validate({...form, [name]: value});
        
        setForm({...form, [name]: value})
    }


    const validate = (input) => {
        let error= {};

        if (input.name.length <= 3) {
            error.name = "The name cannot be less than 3 letters";
        } 
        if (!input.image) {
            error.image = "You should provide an image";
        }
        if (parseInt(input.minWeight) < 1 || parseInt(input.minWeight) > 100) {
            error.minWeight = "You should provide a valid minimum weight";
        }
        if (parseInt(input.maxWeight) <= parseInt(input.minWeight) || parseInt(input.maxWeight) > 200) {
            error.maxWeight = "You should provide a valid maximum weight";
        }
        if (parseInt(input.minHeight) < 1 || parseInt(input.minHeight) > 200) {
            error.minHeight = "You should provide a valid minimum height";
        }
        if (parseInt(input.maxHeight) <= parseInt(input.minHeight) || parseInt(input.maxHeight) > 300) {
            error.maxHeight = "You should provide a valid maximum height";
        }
        if (parseInt(input.minLifeSpan < 1) || parseInt(input.minLifeSpan) > 100) {
            error.minLifeSpan = "You should provide a valid minimum life span";
        }
        if (parseInt(input.maxLifeSpan) <= parseInt(input.minLifeSpan) || parseInt(input.maxLifeSpan) > 100) {
            error.maxLifeSpan = "You should provide a valid maximum life span";
        }
        if (input.temperament.length < 1) {
            error.temperament = "You should provide a temperament";
        }
    }

    const selectHandler = (event) => {
        setForm({...form, temperament: [...form.temperament, event.target.value]})
    }

    const deleteSelected = (el) => {
        setForm({...form, temperament: [form.temperament.filter((temp) => temp !== el)]})
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
                    <input type="text" name="name" value={form.name} onChange={handleChange} className={style.input} />

                    <label htmlFor="image" className={style.label}>Image </label>
                    <input type="text" name="image" value={form.image} onChange={handleChange} className={style.input} />

                    <label htmlFor="minWeight" className={style.label}>Minimum Weight </label>
                    <input type="number" name="minWeight" value={form.minWeight} onChange={handleChange} className={style.input} />

                    <label htmlFor="maxWeight" className={style.label}>Maximum Weight </label>
                    <input type="number" name="maxWeight" value={form.maxWeight} onChange={handleChange} className={style.input} />

                    <label htmlFor="minHeight" className={style.label}>Minimum Height </label>
                    <input type="number" name="minHeight" value={form.minHeight} onChange={handleChange} className={style.input} />

                    <label htmlFor="maxHeight" className={style.label}>Maximum Height </label>
                    <input type="number" name="maxHeight" value={form.maxHeight} onChange={handleChange} className={style.input} />

                    <label htmlFor="minLifeSpan" className={style.label}>Minimum Life Span </label>
                    <input type="number" name="minLifeSpan" value={form.minLifeSpan} onChange={handleChange} className={style.input} />

                    <label htmlFor="maxLifeSpan" className={style.label}>Maximum Life Span: </label>
                    <input type="number" name="maxLifeSpan" value={form.maxLifeSpan} onChange={handleChange} className={style.input} />

                    <label htmlFor="temperament" className={style.label}>Temperament </label>
                    <select onChange={selectHandler} className={style.input} >
                        <option disabled value="">Select a few temperaments</option>
                        {temperaments?.map(temp => (
                            <option name={temp.name} key={temp.id}>
                                {temp.name}
                            </option>)
                        )}
                    </select>
                    <div>
                        {form.temperament.map((temp) => (
                            <div key={temp}>
                                <span>
                                    {temp}
                                </span>
                                <button onClick={deleteSelected}>X</button>
                            </div>
                        ) )}
                    </div>
            </form>
        </>
    )
}


export default Create;