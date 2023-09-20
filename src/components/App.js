import Assistant from './Assistant';
import AlexaImg from './images/alexa.png';
import CortanaImg from './images/cortana.png';
import SiriImg from './images/siri.png';

export default function App() {
    return (
        <div className='total_body'>
            <h1>Personal Assistants</h1>
            <div className='assistants_parent'>
                <Assistant image={AlexaImg} name="Alexa" />
                <Assistant image={CortanaImg} name="Cortana" />
                <Assistant image={SiriImg} name="Siri" />
            </div>
        </div>
    )
}