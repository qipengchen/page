import { BlogPost } from '../types';

// Import individual blog posts from their folders
// Now each blog has its own folder for better organization (e.g. keeping images together)
import { linuxServerPost } from './b1-linux-server';
import { cdmIntroPost } from './b2-cdm-intro';

// Add your new blog posts to this array
// The order here determines the order on the Blog page
export const BLOG_POSTS: BlogPost[] = [
  cdmIntroPost,
  linuxServerPost,
];

/*
  === 如何添加新博客 (How to add a new blog) ===
  1. 在 'blogs' 文件夹下创建一个新文件夹，例如 'b3-my-new-topic'。
     (Create a new folder under 'blogs', e.g., 'b3-my-new-topic')
  
  2. 在该文件夹内创建一个 'index.ts' 文件。
     (Create an 'index.ts' file inside that folder)
  
  3. 复制现有博客的结构并修改内容。
     (Copy the structure from an existing blog and modify the content)
  
  4. 在本文件 (blogs/index.ts) 中导入它： 
     import { myNewPost } from './b3-my-new-topic';
  
  5. 将其添加到上面的 BLOG_POSTS 数组中。
     (Add it to the BLOG_POSTS array above)
*/