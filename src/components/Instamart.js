import {useState} from 'react';

const Section = ({title, description, isVisible, setVisible}) => {
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={() => {
                return isVisible ? setVisible('') : setVisible(title);
            }}>
                {isVisible ? 'Hide' : 'Show'}
            </button>
            {isVisible && <p>{description}</p>}
        </div>
    );
}

const Instamart = () => {
    const [section, setSection] = useState('About');
    return (
        <div>
            <Section title={"About"}
                     description={"This is about page"}
                     isVisible={section === "About"}
                     setVisible={(title) => {setSection(title)}}
            />
            <Section title={"Team"}
                     description={"This is Team page"}
                     isVisible={section === "Team"}
                     setVisible={(title) => {setSection(title)}}
            />
            <Section title={"Career"}
                     description={"This is career page"}
                     isVisible={section === "Career"}
                     setVisible={(title) => {setSection(title)}}
            />
        </div>
    );
};

export default Instamart;
