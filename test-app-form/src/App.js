import './App.css';
import {useState} from 'react'

const options = ["option-1", "option-2","option-3"];
const checkBoxes = [
    {
        name: "value-1",
        price: 1.2,
        required: true,
    },
    {
        name: "value-2",
        price: 2.0,
        required: false,
    },
    {
        name: "value-3",
        price: 2.5,
        required: false,
    },
    {
        name: "value-4",
        price: 3.0,
        required: false,
    },
];

function App() {

    const [formData, setFormData] = useState({
        text: "",
        options: "option-1",
        colors: new Array(checkBoxes.length).fill(false),
    });
    
    function handleInputs(e, position=null){
        
        const key = e.target.name
        const value = e.target.value

        console.log("idx: ", position)
        console.log("key: ", key)
        console.log("value: ", value);

        if(!isNaN(position) && e.target.type === 'checkbox'){
            const checkBoxValues = formData.colors.map( (value, index) => index===position ? !value : value )
            setFormData({ ...formData, [key]: checkBoxValues });
        } else{
            setFormData({...formData, [key]: value });
        }
    }

    return (
        <div className="App">
            <div className="main">
                <form className="form">
                    <label>name </label>
                    <input
                        id="name"
                        type="text"
                        name="text"
                        defaultValue={formData.text}
                        onChange={handleInputs}
                    />
                    <br></br>
    


                    <div>
                        {options.map((item, idx) => {
                            return (
                                <>
                                    <label>{item}</label>
                                    <input
                                        key={`option-${idx}`}
                                        type="radio"
                                        name="options"
                                        value={item}
                                        id={`option-${idx}`}
                                        defaultChecked={formData.options === item}
                                        onChange={handleInputs}
                                    />
                                </>
                            );
                        })}
                    </div>

                    <div>
                        {checkBoxes.map(({ name, price, required }, idx) => {
                            return (
                                <>
                                    <label>{name}</label>
                                    <input
                                        key={`checkbox-${idx}`}
                                        type="checkbox"
                                        name="colors"
                                        id={`checkbox-${idx}`}
                                        value={name}
                                        required={required}
                                        defaultChecked={formData.colors[idx]}
                                        onChange={(e) => handleInputs(e, idx)}
                                    />
                                </>
                            );
                        })}
                    </div>
                </form>
            </div>
            <div className="result">
                <p></p>
            </div>
        </div>
    );
}

export default App;
