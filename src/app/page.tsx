import getCurrentPage from "@/lib/getCurrentPage";

export default async function Page() {
  // get current url, query THAT page in the db, return here
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="flex flex-row flex-wrap  gap-4">
        <div className="border border-green-100 p-4">
          <h1 className="text-3xl font-bold">Next.js</h1>
          <p className="text-base">The React Framework for Production</p>
        </div>
        <div className="border border-green-100 p-4">
          <h1 className="text-3xl font-bold">Next.js</h1>
          <p className="text-base">The React Framework for Production</p>
        </div>
        <div className="border border-green-100 p-4">
          <h1 className="text-3xl font-bold">Next.js</h1>
          <p className="text-base">The React Framework for Production</p>
        </div>
      </div>
    </main>
  );
}
