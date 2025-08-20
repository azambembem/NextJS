import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();

  const { q } = router.query;

  return <div>Search {q}</div>;
};

Search.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default Search;
