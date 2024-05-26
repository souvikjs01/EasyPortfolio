"use client"
import Image from "next/image";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <RecoilRoot>
      <main className="flex min-h-screen flex-col items-center justify-between p-32">
        <a href="/MakePortfolio">Make your Portfolio with us</a>
        <p>See Portfolios</p>
      </main>
    </RecoilRoot>
  );
}
