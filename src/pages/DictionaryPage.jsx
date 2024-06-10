import { DictionaryTable } from "../components/DictionaryTable/DictionaryTable"
import { Dashboard } from "../components/Dashboard/Dashboard";
export default function DictionaryPage () {

    const exam = true;

        return (
            <>
            <Dashboard exam = {exam}/>
            <DictionaryTable exam = {exam}/>
            </>
        )
}