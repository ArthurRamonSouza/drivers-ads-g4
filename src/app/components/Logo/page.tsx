import Image from "next/image";
import Logo from "../../images/driveads.png"

function Imagem() {
    return(
        <div>
            <Image src={Logo} width={100} height={100} />
        </div>
    );
}

export default Imagem
