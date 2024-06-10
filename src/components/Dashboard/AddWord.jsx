import { Link, Button, Svg } from "./AddWord.styled";
import { ModalAddWord } from "../../components/Modal/ModalAddWord";
import { useState } from "react";
import sprite from "../../assets/sprite.svg"
export const AddWord = ({exam}) => {
    const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
    return(
        <>
       {exam && (<Button onClick={() => {
          setIsOpenModalLogin(true);
        }}>Add word<Svg><use xlinkHref={sprite + "#icon-plus"}></use></Svg></Button>)}
        <Link to="/training">Train oneself<Svg><use xlinkHref={sprite + "#icon-switch"}></use></Svg></Link>
        <ModalAddWord
        isOpenModalLogin={isOpenModalLogin}
        setIsOpenModalLogin={setIsOpenModalLogin}
      />
        </>
    )
}