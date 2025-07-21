import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="bg-gray-100 rounded-xl p-4 flex flex-col items-center w-[220px] h-[320px] shadow-md hover:shadow-lg transition-shadow duration-200">
        <div className="w-full h-[180px] flex items-center justify-center mb-4 overflow-hidden">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl w-full h-full object-cover"
          />
        </div>
        <h2 className="text-base font-bold w-full text-left mt-auto line-clamp-2" title={title}>
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;
