interface PostUserModel {
    id: number;
    name: string;
    username: string;
    email: string;
}

interface PostModel {
    id: number;
    message: string;
    imageUrl: string;
    createdAt: string;
    postedBy: PostUserModel;
    likedBy: PostUserModel[];
    dislikedBy: PostUserModel[];
}

export default PostModel