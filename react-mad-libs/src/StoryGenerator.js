import React, { useState } from "react";
import Forms from "./Forms";
import DisplayStory from "./DisplayStory";
import './Forms.css'

const StoryGenerator = () => {
    const [story, setStory] = useState('');

    const handleGenerateStory = (generatedStory) => {
        setStory(generatedStory);
    };

    return (
        <div className="Story">
            <Forms onGenerateStory={handleGenerateStory} />
            <DisplayStory story={story} />
        </div>
    );
};

export default StoryGenerator;