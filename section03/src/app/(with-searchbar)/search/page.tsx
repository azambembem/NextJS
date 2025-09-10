import BookItem from "@/components/book-item";
import { BookData } from "@/types";

export default async function Page({
  searchParams
}: {
  searchParams: { q?: string };
}) {
  // const { q } = await searchParams;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${searchParams.q}`,
    { cache: "force-cache" }
  );

  if (!response.ok) {
    return <div>데이터를 찾을 수 없습니다...</div>;
  }

  const books: BookData[] = await response.json();

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
