import { $Buttonred, ButtonWhite } from "./styles";
function Button({ children, red, ...rest}) {
    return (
        <>
        {red ?(
            <$Buttonred {...rest}>{children}</ $Buttonred>
        ):(    
            <ButtonWhite {...rest}>{children}</ ButtonWhite>
        )
    }
        </>

    )
}
export default Button