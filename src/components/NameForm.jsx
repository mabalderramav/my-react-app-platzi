import {useState} from 'react';

const NameForm = () => {
    const [name, setName] = useState('');

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <p>Hello!!! {name || 'word!!!'}</p>
        </div>
    );
};

export default NameForm;