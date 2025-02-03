import { useState } from "react";


export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setinputValue] = useState('')

    const onInputChange = (event) => {
        setinputValue(event.target.value);
    }

    const onSubmit = (event) => {
        // para que no refresque la pagina
        event.preventDefault();
        
        if( inputValue.trim().length < 1 ) return;

       onNewCategory( inputValue.trim() );
        setinputValue('');
    }
  return (
    <form onSubmit={ onSubmit }>
    <input
    type="text"
    placeholder="Buscar gifs"
    value={ inputValue }
    onChange={ onInputChange }
    ></input>
    </form>
  )
}
