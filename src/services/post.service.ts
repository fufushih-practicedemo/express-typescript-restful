import { AppDataSource } from "../../data.source";
import { TblPost } from "../models/entities/post.entities";

export interface IPost {
  title: string,
  author: string,
  descript: string
}

// Create
export const createPost =async (post:IPost) => {
  try {
    const _newPost = new TblPost();
    _newPost['title'] = post['title'];
    _newPost['author'] = post['author'];
    _newPost['descript'] = post['descript'];

    return await AppDataSource().manager.save(_newPost);
  } catch(err) {
    return err;
  }
}

// Get/GetAll
export const getPosts =async (postId?: number) => {
  try {
    if (postId) {   
      // get specific post
      return await AppDataSource().manager.findOne(TblPost, {
        where: { id: postId },
      });
    } else {        
      // get posts
      return await AppDataSource().manager.find(TblPost);
    }
  } catch(err) {
    return err;
  }
}

// Update
export const updatePost =async (postId: number,post: IPost) => {
  try {
    const _Post = await AppDataSource().manager.findOne(TblPost, {
      where: { id: postId },
    });

    if(!_Post) return { message: "Post not found!"};

    if(post['title']) _Post['title'] = post['title'];
    if(post['author']) _Post['author'] = post['author'];
    if(post['descript']) _Post['descript'] = post['descript'];

    return await AppDataSource().manager.save(_Post);
  } catch(err) {
    return err;
  }
}

// Delete
export const deletePost =async (postId:number) => {
  try {
    const _Post = await AppDataSource().manager.findOne(TblPost, {
      where: { id: postId },
    });
    if (!_Post) return { message: "_Post not found!" };
    return await AppDataSource().manager.remove(_Post);
  } catch (err) {
    return err;
  }
}