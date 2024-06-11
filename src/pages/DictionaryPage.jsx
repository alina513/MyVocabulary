import { DictionaryTable } from "../components/DictionaryTable/DictionaryTable"
import { Dashboard } from "../components/Dashboard/Dashboard";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { ModalAddWord } from "../components/Modal/ModalAddWord";
export default function DictionaryPage () {

    const exam = true;
    const location = useLocation();
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);

  useEffect(() => {
    if (location.state?.openModal) {
      setIsOpenModalLogin(true);
    }
  }, [location.state]);


        return (
            <>
            <Dashboard exam = {exam}/>
            <DictionaryTable exam = {exam}/>
            <ModalAddWord
        isOpenModalLogin={isOpenModalLogin}
        setIsOpenModalLogin={setIsOpenModalLogin}
      />
            </>
        )
}