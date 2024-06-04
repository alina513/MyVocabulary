import { Link, Button } from "./AddWord.styled";
import { ModalAddWord } from "../../components/Modal/ModalAddWord";
import { useState } from "react";
export const AddWord = () => {
    const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
    return(
        <>
        <Button onClick={() => {
          setIsOpenModalLogin(true);
        }}>Add word</Button>
        <Link>Train oneself</Link>
        <ModalAddWord
        isOpenModalLogin={isOpenModalLogin}
        setIsOpenModalLogin={setIsOpenModalLogin}
      />
        </>
    )
}