/*
   Filename: ComplexCode.js
   Description: This code is a sophisticated implementation of a social media management system. It allows users to create and manage posts, interact with other users, and analyze social media data.
*/

// User Class
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.posts = [];
    this.friends = [];
  }

  createPost(title, content) {
    const post = new Post(title, content, this);
    this.posts.push(post);
    return post;
  }

  addFriend(user) {
    this.friends.push(user);
    user.friends.push(this);
  }

  likePost(post) {
    post.like();
  }

  commentOnPost(post, comment) {
    post.addComment(comment, this);
  }
}

// Post Class
class Post {
  constructor(title, content, author) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.likes = 0;
    this.comments = [];
  }

  like() {
    this.likes++;
  }

  addComment(comment, user) {
    this.comments.push({ comment, user });
  }
}

// Analyze Class
class Analyze {
  static getLikesByUser(user) {
    let likes = 0;

    for (const post of user.posts) {
      likes += post.likes;
    }

    return likes;
  }

  static getCommentsByUser(user) {
    let comments = 0;

    for (const post of user.posts) {
      comments += post.comments.length;
    }

    return comments;
  }

  static getFriendsByUser(user) {
    return user.friends.length;
  }
}

// Example Usage
const user1 = new User("John Doe", "john.doe@example.com", "pass123");
const user2 = new User("Jane Smith", "jane.smith@example.com", "pass456");

user1.createPost("First Post", "Hello World!");
user1.createPost("Second Post", "This is my second post.");

user2.createPost("Hello from Jane", "Nice day!");

user1.addFriend(user2);

user1.likePost(user2.posts[0]);
user1.commentOnPost(user2.posts[0], "Great post!");

console.log("Likes by User1:", Analyze.getLikesByUser(user1));
console.log("Comments by User1:", Analyze.getCommentsByUser(user1));
console.log("Friends by User1:", Analyze.getFriendsByUser(user1));
console.log("Likes by User2:", Analyze.getLikesByUser(user2));
console.log("Comments by User2:", Analyze.getCommentsByUser(user2));
console.log("Friends by User2:", Analyze.getFriendsByUser(user2));
