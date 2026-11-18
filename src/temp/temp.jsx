import React from "react";
import { useGetPostsQuery } from "../redux/features/api/apiSlice";
export default function Temp() {
  const { data: posts, isLoading, isError, refetch } = useGetPostsQuery();
  //  refetching se doabara api chalegui or cache me new data save hojayega
  // or jese jese pages me jahan data useSelector se mangwaya hoga wahan wahanrerender hojaeyga
  return (
    <div>
      Temporary Page
      <button onClick={refetch}>Refetch</button>
      {isLoading && <p>Loading posts...</p>}
      {isError && <p>Could not load posts.</p>}
      {posts && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
