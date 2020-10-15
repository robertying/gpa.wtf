import { Button } from "@material-ui/core";
import Link from "next/link";
import { NextSeo } from "next-seo";

export default function NotFound() {
  return (
    <>
      <NextSeo title="404" noindex />
      <div className="container mx-auto flex flex-col h-screen justify-center items-center">
        <h1 className="font-bold text-5xl">404</h1>
        <h2 className="font-medium text-3xl mt-2">Not Found</h2>
        <p className="text-xl mt-6">请求的页面不存在</p>
        <Link href="/">
          <a className="mt-6 hover:no-underline">
            <Button variant="outlined" color="primary">
              首页
            </Button>
          </a>
        </Link>
      </div>
    </>
  );
}
