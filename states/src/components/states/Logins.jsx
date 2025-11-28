import Label from "./Labels"
import Labelln from "./Labellns"
import InputText from "./Labellns"
import InputPassword from "./InputPasswords"
import Button from "./Buttons"
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
