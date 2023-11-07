import fetchPostData from "./fetch";


export async function GET(request: Request) {
    const url = new URL(request.url);
    const slug = url.pathname.split('/').pop();

    if (!slug) {
        return new Response("Slug not found", { status: 400 });
    }

    const allPosts =  await fetchPostData(slug);
    return new Response(JSON.stringify(allPosts), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}