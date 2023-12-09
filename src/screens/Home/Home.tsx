import { FlatList } from "react-native";
import { Container } from "./style";
import { useRequest } from "../../hooks/useRequest";
import CardPost from "../../components/CardPosts/CardPost";
import { useState } from "react";
import Loading from "../../components/Common/Loading";

export interface IPosts {
  userId: number
  id: number
  title: string
  body: string
}

export function Home(): React.ReactElement {
  const {data, isLoading, isError, error}: {data: IPosts[], isLoading: boolean, isError: boolean, error: any} = useRequest('allPosts', '/posts');

  const [page, setPage] = useState(10);

  if (isLoading) return <Loading />

  return (
    <Container>
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