import { gql } from "@apollo/client/core";
import { useQuery } from "@apollo/client/react";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface LessonInterface {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery(GET_LESSONS_QUERY);

  return (
    <ul>
      {data?.lessons.map((lesson: LessonInterface) => {
        return <li key={lesson.id}>{ lesson.title }</li>
      })}
    </ul>
  );
}

export default App;
