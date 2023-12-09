import { FlatList } from "react-native";
import { Container } from "./style";
import CardPost from "../../components/CardPosts/CardPost";
import { useEffect, useState } from "react";
import Loading from "../../components/Common/Loading";
import PostButton from "../../components/PostButton/PostButton";
import api from "../../services/api";

export interface IPosts {
  userId: number
  id: number
  title: string
  body: string
}

export function Home(): React.ReactElement {
  const [data, setData] = useState<IPosts[]>([]);

  function getAllPosts(): void {
    api.get('/posts')
      .then((res) => setData(res.data))
      .catch((error) => console.log(error.response.message))
  }

  const [page, setPage] = useState(10);
  const [showInputPost, setShowInputPost] = useState(false);

  useEffect(() => {
    getAllPosts();
  }, [])

  console.log(data[0])

  return (
    <Container>
      <PostButton
        data={data}
        setData={setData}
        showInputPost={showInputPost}
        setShowInputPost={setShowInputPost}
      />

      <FlatList
        style={{backgroundColor: '#eeeeee'}}
        data={data?.slice(0, page)}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => (
          <CardPost element={item} />
        )}
        onEndReached={() => {
          setPage(page + 10);
        }}
        onEndReachedThreshold={0.5}
      />
    </Container>
  )
}