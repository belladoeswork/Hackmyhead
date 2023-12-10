import NewPost from "@/components/NewPost.jsx";
import Posts from "@/components/Posts.jsx";

export default function Home() {
  return (
    <main>
      <h1 className="title">Spammer</h1>
      <NewPost />
      <Posts />
    </main>
  );
}
