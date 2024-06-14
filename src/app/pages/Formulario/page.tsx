import Logo from '../../components/Logo/page';
import Botao from '../../components/Botao/page'
import './formulario.css'
import Link from 'next/link';


function Formulario() {
    return (
        <div className="Formulario-container">
            <form className="Formulario">
                <Logo />
                <h3>Acesse sua conta</h3>
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
                        className="input_CPF"
                        type="text"
                        name="login"
                        id="login"
                        placeholder='Digite seu CPF/CNPJ'
                        required
                    />
                </div>
                <div>
                    <input
                        className='input_senha'
                        type="text"
                        name="senha"
                        id="senha"
                        placeholder='Digite sua senha'
                        required
                    />
                </div>
                <div className="esqueci_senha_container">
                    <Link href="/pages/Esqueceu_senha" className="esqueci_senha">Esqueci a senha </Link>
                </div>
                <Botao />
                <div>
                    <h5 className="cadastrar"> Não tem uma conta? <Link href="/pages/Cadastro">Cadastre-se </Link> </h5>
                </div>
            </form>
        </div>
    );
}

export default Formulario
