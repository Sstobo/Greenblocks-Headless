export default async function Page() {
  // get current url, query THAT page in the db, return here
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 text-green-50  ">
      <div className="flex flex-row flex-wrap  gap-4">
        <div className="border border-green-100 p-4 hover:scale-105 duration-200 hover:shadow-lg cursor-pointer">
          <h1 className="text-3xl font-bold ">Sean Stobo</h1>
          <p className="text-base">A Vancouver based web developer</p>
        </div>
        <div className="border border-green-100 p-4 hover:scale-105 duration-200 hover:shadow-lg cursor-pointer">
          <h1 className="text-3xl  font-bold">Next.js</h1>
          <p className="text-base">The React Framework for Full Stack Production</p>
        </div>
        <div className="border border-green-100 p-4 hover:scale-105 duration-200 hover:shadow-lg cursor-pointer">
          <h1 className="text-3xl font-bold">Wordpress</h1>
          <p className="text-base">The most popular Content Management System on the planet</p>
        </div>
      </div>
    </main>
  );
}
