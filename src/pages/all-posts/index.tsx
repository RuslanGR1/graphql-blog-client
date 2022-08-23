import { gql, useQuery } from "@apollo/client";

const GET_POSTS = gql`
  query {
    posts {
      id
      title
    }
  }
`;

export interface IPost {
  id: number;
  title: string;
}

export const AllPosts = () => {
  const { loading, data } = useQuery(GET_POSTS);
  console.log(data);
  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      {data?.posts?.map((post: IPost) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};
