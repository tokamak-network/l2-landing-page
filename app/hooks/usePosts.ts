import { useEffect, useState, useMemo, useCallback } from "react";

function usePosts() {
  const [posts, setPosts] = useState([]);


  const fetchPosts = useCallback(async () => {
    try {
      const postsReq = await fetch("https://price-api.tokamak.network/posts")
        .then((res) => res.json())
        .then((result) => result);
        
      const postsData = await postsReq;
      

      if (postsData !== undefined) {
        setPosts(postsData);
      }
    } catch (e) {
      console.log(e);
      return [];
    }
  }, []);

  useEffect(() => {
    fetchPosts().then((e) => {
  if (e !== undefined) {
    console.log("**fet posts err**");
    console.log(e);
  }
});
},[fetchPosts])

return posts
}

export default usePosts

