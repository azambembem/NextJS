import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import style from "./search-layout.module.css";

export default function SearchableLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const q = router.query.q as string;

  useEffect(() => {
    setSearch(q || "");
  }, [q]);
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    if (!search || q === search) {
      return;
    }
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };
  return (
    <div>
      <div className={style.searchbar_container}>
        <input
          onKeyDown={onKeyDown}
          onChange={onChangeSearch}
          value={search}
          placeholder="Search"
        />
        <button onClick={onSubmit}>Search</button>
      </div>
      {children}
    </div>
  );
}
