type Post = {
    id: number;
    title: string;
    body: string;
    published: boolean;
}

// Post type for editing
type PostEdit = Partial<Post>; // All properties are optional

// Post type for displaying as a list
type PostList = Pick<Post, 'id' | 'title'>; // Only id and title are included

// Post type for displaying as a detail view
type PostPublish = Readonly<Post>; // All properties are read-only

// Post type for creating a new post
type PostCreate = Omit<Post, 'id'>; // All properties except id are included


