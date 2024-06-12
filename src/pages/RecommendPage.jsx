import { DictionaryTable } from '../components/DictionaryTable/DictionaryTable';
import { Dashboard } from '../components/Dashboard/Dashboard';
export default function RecommendPage() {
  const exam = false;

  return (
    <>
      <Dashboard />
      <DictionaryTable exam={exam} />
    </>
  );
}
