import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log(router);

  return <div>book {id}</div>;
};

export default Page;
