
import  {Training} from "../components/Training/Training";
import { Empty } from "../components/Training/Empty";
import { selectTasks } from "../redux/words/selectors";
import { useSelector } from "react-redux";


export default function TrainingPage () {
const tasks = useSelector(selectTasks);
    

        return (
            <>
            {tasks.length > 0 ?
            (<Training></Training>) :
            (<Empty/>)}
            </>
        )
}