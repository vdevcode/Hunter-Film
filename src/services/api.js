import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTJmYjUyOTU5MDFkOGQ2Mzg5NjdkYjFkZDQ1YWFlNiIsInN1YiI6IjYyZDU0ZmQzZDFhODkzMDA0ZGJjOWNmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w8bU_e-zcAQFn45h7X_5jcrfMl5lec-IzJ3spNOhg7w";
export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
