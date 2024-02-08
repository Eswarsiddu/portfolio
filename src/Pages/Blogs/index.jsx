import { useEffect } from "react";

function Blogs() {
  useEffect(() => {
    document.title = "Siddu Eswar | Blogs";
  }, []);
  return <div>Blogs</div>;
}

export default Blogs;
