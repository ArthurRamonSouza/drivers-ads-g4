'use client'
import Logo from '../../components/Logo/page';
import Botao from '../../components/Botao/page'
import  "./Cadastro.css";
import Link from 'next/link';
import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";

const esquemaCadastro = z.object({
    cpf: z.string().length(9, "O cpf é de cuzao"),
    email: z.string().min(1, "Email é obrigatório").email("Formato de email inválido"),
    senha: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
    verificaSenha: z.string().min(6, "A verificação de senha deve ter no mínimo 6 caracteres")})
    .refine(data => data.senha === data.verificaSenha, {
        message: "As senhas não conferem",
        path: ["verificaSenha"],
    });

type EsquemaCadastro = z.infer<typeof esquemaCadastro>

function Formulario() {

    const {register, handleSubmit } = useForm<EsquemaCadastro>({
        resolver: zodResolver(esquemaCadastro),
    })

    function handleBotaoSubmit  (data: EsquemaCadastro){
        console.log(data);
    }
    return (
        <div className="Formulario-container">
            <form onSubmit={handleSubmit(handleBotaoSubmit)} className="Formulario">
                <Logo />
                <h3>Cadastre-se</h3>
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
                        placeholder='Digite seu CPF/CNPJ'
                        {...register("cpf")}
                    />
                </div>
                <div>
                    <input
                        className="input_email"
                        type="text"
                        placeholder='Digite seu email'
                        {...register("email")}
                    />
                </div>
                <div>
                    <input
                        className='input_senha'
                        type="text"
                        placeholder='Digite sua senha'
                        {...register("senha")}
                    />
                </div>
                <div>
                    <input
                        className="input_verificaSenha"
                        type="text"
                        placeholder='Verifique a senha'
                        {...register("verificaSenha")}
                    />
                </div>
                <Botao />
                <div className= "voltar_container">
                     <Link className="voltar" href="/pages/Formulario">Voltar</Link>
                </div>
            </form>
        </div>
    );
}

export default Formulario
