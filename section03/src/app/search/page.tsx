export default async function Page({
  searchParams
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;
  return (
    <div>
      search page {q}
      <h1>hello world!!</h1>
    </div>
  );
}
