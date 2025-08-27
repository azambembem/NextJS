"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchTodo = async (id: string) => {
  const { data } = await axios(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return data;
};

export default function Searchbar({ id }: { id: string }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["todo", id],
    queryFn: () => fetchTodo(id),
    enabled: !!id // faqat id mavjud bo'lsa fetch bo'ladi
  });

  if (!id) return <p>Please provide an ID</p>;
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Todo Item</h2>
      <p>ID: {data.id}</p>
      <p>Title: {data.title}</p>
      <p>Completed: {data.completed ? "Yes" : "No"}</p>
    </div>
  );
}
