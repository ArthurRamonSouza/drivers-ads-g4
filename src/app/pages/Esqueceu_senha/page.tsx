import Logo from '../../components/Logo/page';
import Botao from '../../components/Botao/page'
import './esqueceu_senha.css'
import Link from 'next/link';


function Formulario() {
    return (
        <div className="Formulario-container">
            <form className="Formulario">
                <Logo />
                <h3>Recupere sua senha</h3>
                <div className="label_radio_container">
                    <div>
                        <input type="radio" />
                        <label className="label_radio" htmlFor="">Acesso Gestor/Empresa</label>
                    </div>
                    <div>
                        <input type="radio" />
                        <label className="label_radio" htmlFor="">Acesso Administrador</label>
                    </div>
                </div>
                <div>
                    <input
                        className="input_email"
                        type="text"
                        name="email"
                        id="email"
                        placeholder='Digite seu email'
                        required
                    />
                </div>
                <Botao />
                <div className="voltar_container">
                    <Link className="voltar" href="/pages/Formulario"> Voltar</Link> 
                </div>
            </form>
        </div>
    );
}

export default Formulario
