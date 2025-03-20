import PostForm from "@/components/post-form";
import {createPost} from "@/action/post";

export default function NewPostPage() {
  return (
    <PostForm action={createPost}/>
  );
}
