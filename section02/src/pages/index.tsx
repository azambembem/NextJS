import SearchableLayout from "@/components/searchable-layout";

export default function Home() {
  return (
    <div>
      <h1 style={{ color: "red" }}>Welcome to Next.js!</h1>
    </div>
  );
}

Home.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
