
import { BlogPost } from '../types';

// Import individual blog posts here
import { linuxServerPost } from './b1_linux_server';
import { cdmIntroPost } from './b2_cdm_intro';

// Add your new blog posts to this array
// The order here determines the order on the Blog page
export const BLOG_POSTS: BlogPost[] = [
  cdmIntroPost,
  linuxServerPost,
];

/*
  === 如何添加新博客 ===
  1. 在 'blogs' 文件夹下新建一个文件，例如 'b3_python_tips.ts'。
  2. 复制 'b1_linux_server.ts' 的结构。
  3. 在本文件中导入： import { pythonTips } from './b3_python_tips';
  4. 添加到上面的 BLOG_POSTS 数组中。
*/
