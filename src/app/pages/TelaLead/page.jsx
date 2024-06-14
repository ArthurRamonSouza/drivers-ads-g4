import Logo from '../../components/Logo/page';
import Foto from "../../images/dashboardmc.png"
import './telalead.css'
import Image from 'next/image';


function TelaLead() {
    return (
        <div className="Formulario-container">
            <div className="Formulario">
                <Logo />
                <h3>McDonalds</h3>
                
                <Image src={Foto} width={600} height={600} />
                
            </div>
        </div>
    );
}

export default TelaLead
