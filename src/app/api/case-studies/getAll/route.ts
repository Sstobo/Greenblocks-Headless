import getAllPosts from "./fetch";


export async function GET(request: Request) {
    console.log('hello');
    const allPosts =  await getAllPosts();
    return new Response(JSON.stringify(allPosts), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}