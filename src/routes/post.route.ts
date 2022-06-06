import Route from "./route";
import PostController from "../controllers/post.controller";

class PostRoute extends Route {
  private postController = new PostController();

  constructor() {
    super();
    this.prefix = '/api/v1/post';
    this.setRoutes();
  }

  protected setRoutes(): void {
      // Test API: /api/v1/post
      this.router.get('/', this.postController.getAll);
      this.router.get('/:postId', this.postController.get);
      this.router.post('/', this.postController.create);
      this.router.put('/:postId', this.postController.update);
      this.router.delete('/:postId', this.postController.delete);
  }
}

export default PostRoute;