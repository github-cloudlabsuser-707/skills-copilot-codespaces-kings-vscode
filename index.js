import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownEditor;

const reversedSentence = markdown.split(' ').reverse().join(' ');
const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

const names = ['John', 'Jane', 'Mike'];
const nameList = names.map((name, index) => <li key={index}>{name}</li>);

return (
    <div>
        <ul>{nameList}</ul>
    </div>
);
const data = [
    [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 },
        { name: 'Bob', age: 35 }
    ],
    [
        { name: 'Alice', age: 27 },
        { name: 'Mike', age: 32 },
        { name: 'Sarah', age: 29 }
    ]
];

const names = data.flatMap(arr => arr.map(obj => obj.name));
const nameList = names.map((name, index) => <li key={index}>{name}</li>);

return (
    <div>
        <ul>{nameList}</ul>
    </div>
);