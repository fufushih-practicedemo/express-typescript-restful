import { Request, Response } from "express"
import { createPost, getPosts, updatePost, deletePost, IPost } from "../services/post.service";

class PostController {
  async create(req: Request, res: Response) {
    const { title, author, descript} = req.body;
    const post: IPost = {title, author, descript};
    try {
      await createPost(post).then(()=>{
        res.status(200).json({
          "message": "Success to create post",
          post
        })
      })
      
    } catch(err) {
      res.status(400).json({
        "message": "Create Post failed",
      })
      console.log(err);
    }
  }

  async get(req: Request, res: Response) {
    const postId = Number(req.params.postId);
    try {
      await getPosts(postId).then((post)=>{
        if(post) {
          res.status(200).json({
            "message": "Success to find post",
            post
          })
        }
        
        res.status(200).json({
          "message": "Not find post"
        })
      })
    } catch(err) {
      res.status(400).json({
        "message": "Find Post failed",
      })
      console.log(err);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      await getPosts().then((posts)=>{
        
        res.status(200).json({
          "message": "Success to find all posts",
          posts
        })
      })
    } catch(err) {
      res.status(400).json({
        "message": "Find Posts failed",
      })
      console.log(err);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const postId = Number(req.params.postId);
      const { title, author, descript} = req.body;
      const post: IPost = {title, author, descript};
      await updatePost(postId, post).then(()=> {
        res.status(200).json({
          "message": "Success to update post",
          post
        })
      });

    } catch(err) {
      res.status(400).json({
        "message": "Find Posts failed",
      })
      console.log(err);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const postId = Number(req.params.postId);
      
      await deletePost(postId).then(()=>{
        res.status(200).json({
          "message": "Success to delete post"
        })
      })

    } catch(err) {
      res.status(400).json({
        "message": "Find Posts failed",
      })
      console.log(err);
    }
  }
}

export default PostController;