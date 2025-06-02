import { useState } from "react";

export function InputText({initialText}) {

    const [text, setText] = useState("");

    return (
        <div className="input-text">
            <h2>Input text</h2>
            <input type="text" 
            value={text} 
            placeholder={initialText}
            onChange={(e) => setText(e.target.value)}>
            </input>
            <p>{text}</p>
            <button onClick={() => setText("")}>Clear</button>
        </div>
    );
}