import { useDispatch } from "react-redux";
import React, {useState} from "react";
import { getByName } from "../../redux/actions";
import style from "./SearchBar.module.css";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length > 0) {
            dispatch(getByName(name));
          }
        setName("");
    }

    return (
        <div>
            <form className={style.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    className={style.input}
                    placeholder="Search by name"
                    value={name}
                    onChange={handleChange}
                />
                <button type="submit" className={style.button}> 🐶🔍 </button>
            </form>
        </div>
    )
}


export default SearchBar;