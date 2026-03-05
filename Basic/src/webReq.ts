// import axios, { AxiosResponse } from "axios";
import axios from "axios";
import type { AxiosResponse } from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// axios.get("https://example.com/data").then((response) => {
//   console.log(response.data);
// });

const fetchData = async () => {
  try {
    const response: AxiosResponse<Todo> = await axios.get(
      "http://jsonplaceholder.typicode.com/todos/1",
    );

    console.log("Todo", response.data);
  } catch (error: any) {
    // console.log(error.message);  // ❌

    if (axios.isAxiosError(error)) {
      console.log(`Axios Error: ${error.message}`);

      if (error.response) {
        console.log(`Error status: ${error.response.status}`);
      }
    }
  }
};

// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }
