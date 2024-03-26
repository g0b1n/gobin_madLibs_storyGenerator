import React, {useState} from "react";
import storyElements from "./storyElements";
import './Forms.css'

const Forms = ({ onGenerateStory }) => {
    const initialState = {
        noun: "",
        secondNoun: "",
        adjective: "",
        color: ""
    }

    const [formData, setFormData] = useState(initialState);
    const [error, setError] = useState(false);


    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {noun, secondNoun, adjective, color} = formData;

        // check if any field is left empty
        if (!noun || !secondNoun || !adjective || !color) {
            // alert user to fill out all fields
            setError(true)
            return;
        }
        setError(false);

        // Randomly select story elements
        const setting = storyElements.settings[Math.floor(Math.random() * storyElements.settings.length)];
        const action = storyElements.actions[Math.floor(Math.random() * storyElements.actions.length)];
        const character = storyElements.characters[Math.floor(Math.random() * storyElements.characters.length)];

        // genereate story here
        // const story = `Once upon a time ${setting} a ${adjective} ${noun} ${action} ${character}.They noticed a ${color} ${secondNoun} laying nearby.`;
        const story = `During their quest for a(n) ${adjective} ${noun}, our hero ${action} ${character} ${setting}, only to find out it was actually just looking for its lost ${color} ${secondNoun}`
        // calls the callback function with the genereated story
        onGenerateStory(story);

        // reset the form
        setFormData(initialState)
    }

    


    return (
        <div>
            <h3 className="Form-title">MadLibs Generate Story!</h3>
            <form onSubmit={handleSubmit} className="form-container">
                {error && <p className="error-message">Please fill out all fields.</p>}
                <label htmlFor="noun">Noun</label>
                <input
                    id="noun" type="text"
                    name="noun"
                    placeholder="Noun" value={formData.noun}
                    onChange={handleChange}
                />
                <label htmlFor="secondNoun">Second Noun</label>
                <input
                    id="secondNoun" type="text"
                    name="secondNoun"
                    placeholder="Second Noun" value={formData.secondNoun}
                    onChange={handleChange}
                />
                <label htmlFor="adjective">Adjective</label>
                <input
                    id="adjective" type="text"
                    name="adjective"
                    placeholder="Adjective" value={formData.adjective}
                    onChange={handleChange}
                />
                <label htmlFor="Color">Color</label>
                <input
                    id="color" type="text"
                    name="color"
                    placeholder="Color" value={formData.color}
                    onChange={handleChange}
                />

                <button>Generate Story</button>
            </form>
        </div>
    )
}

export default Forms;