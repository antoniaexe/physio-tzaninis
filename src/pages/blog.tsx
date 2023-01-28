import { useEffect, useState } from 'react';

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from '@material-tailwind/react';
import Link from 'next/link';

import { Section } from '../layout/Section';
import { getBlogPosts } from '../lib';
import { Base } from '../templates/Base';

const Post = ({
  title,
  image,
  mainContent,
  author,
  publishedDate,
  ...props
}) => {
  return (
    <Card className="w-100 flex-row">
      <CardHeader className="relative h-56">
        <img
          src="/assets/images/physiotzaninis2.jpg"
          alt="img-blur-shadow"
          className="object-cover"
        />
      </CardHeader>
      <CardBody className="text-left">
        <Link href="">
          <a className="mb-2 text-2xl">{title}</a>
        </Link>
        <h6>
          {author}-{publishedDate}
        </h6>
        <PostMetadata {...props} />
        <Typography>{mainContent}</Typography>
      </CardBody>
    </Card>
  );
};
const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getBlogPosts()
      .then((response) => setPosts(response.items))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Base>
      <Section yPadding="pt-20 pb-32 mt-20 space-y-10">
        <h1 className="text-2xl mb-20 text-indigo-600 font-bold text-center">
          Τα νέα μας!
        </h1>
        {posts.map((post, index) => {
          return (
            <Post
              title={post.fields.title['en-US']}
              mainContent={post.fields.mainContent['en-US']}
              author={post.fields.author['en-US']}
              publishedDate={post.fields.publishedDate['en-US']}
              authorMetadata={'super writer'}
              postMetadata={'something else'}
              key={index}
            ></Post>
          );
        })}
      </Section>
    </Base>
  );
};
export default Blog;
