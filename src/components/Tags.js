import React, {useState} from "react"
import './Tags.css'

const Tags = () => {
    const [tags, setTags] = React.useState([]);

    const addTags = event => {
        if (event.key === "Enter" && event.target.value !== "") {
            setTags([...tags, event.target.value])
            event.target.value = ""
        }
    }

    const removeTags = index => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)])
    }

    {tags.map((tag, index) => (
        <li key={index}>
            <span>{tag}</span>
            <i
                className="material-icons"
                onClick={() => removeTags(index)} 
            >
                close
            </i>
        </li>
    ))}

    return (
        <div className="tags-input">
            <ul id="tags">
                {tags.map((tag, index) => (
                    <li key={index} className="tag">
                        <span className='tag-title'>{tag}</span>
                        <span className='tag-close-icon'
                            onClick={() => removeTags(index)}
                        >
                            x
                        </span>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
                placeholder="Klikk enter for å legge til tagg"
            />
        </div>
    );
};

export default Tags