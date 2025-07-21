import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <main className="py-8 px-2 md:px-0">
      <section className="flex flex-col items-center">
        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-2xl w-full mb-8 flex flex-col items-center relative">
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl max-w-full max-h-[500px] object-contain mx-auto"
            style={{ display: 'block' }}
          />
          {isAuthor && (
            <div className="flex gap-2 mt-4 w-full justify-end">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500" className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <section className="bg-gray-50 rounded-2xl shadow p-8 max-w-3xl w-full mb-8">
          <h1 className="text-3xl font-extrabold mb-4 text-gray-900 leading-tight">
            {post.title}
          </h1>
          <div className="browser-css text-lg text-gray-700 leading-relaxed">
            {parse(post.content)}
          </div>
        </section>
      </section>
    </main>
  ) : null;
}
