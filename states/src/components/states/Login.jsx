import Label from "./Label"
import Labelln from "./Labelln"
import InputText from "./InputText"
import InputPassword from "./InputPassword"
import Button from "./Button"
function Login() {
    return (
        <>
        <Labelln texto="Login"/>
        <Label texto="Usuário: "/> 
        <InputText placeholder="user..."/> <br />
        <Label texto="Senha: "/>
        <InputPassword placeholder="password..."/> <br />
        <Button valor="Logar" />
        </>
    )
}

export default Login;
