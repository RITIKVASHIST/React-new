import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";

function Home() {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <main className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-2 md:px-0">
        <section className="bg-white rounded-2xl shadow-lg p-8 max-w-xl w-full text-center">
          <h1 className="text-2xl font-extrabold mb-4 text-gray-900">
            {authStatus
              ? "No posts found. Be the first to add one!"
              : "Login to read posts"}
          </h1>
        </section>
      </main>
    );
  }
  return (
    <main className="flex flex-col items-center py-12 px-2 md:px-0">
      <section className="bg-white rounded-2xl shadow-lg p-8 max-w-5xl w-full">
        <div className="flex flex-wrap justify-start gap-x-8 gap-y-8">
          {posts.map((post) => (
            <div key={post.$id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
