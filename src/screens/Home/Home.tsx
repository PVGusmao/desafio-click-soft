import { FlatList } from "react-native";
import { Container } from "./style";
import CardPost from "../../components/CardPosts/CardPost";
import React, { useEffect, useState } from "react";
import PostButton from "../../components/PostButton/PostButton";
import api from "../../services/api";
import { useApp } from "../../context/app.context";
import { BlurView } from 'expo-blur';

export interface IPosts {
  userId: number
  id: number
  title: string
  body: string
  name?: string;
}

/**
 * Renders the Home component.
 *
 * @return {React.ReactElement} The rendered Home component.
 */
export function Home(): React.ReactElement {
  const {allPosts, setAllPosts} = useApp();
  
  const [page, setPage] = useState(10);
  const [showInputPost, setShowInputPost] = useState(false);

/**
 * Retrieves all posts from the API.
 *
 * @return {void} This function does not return anything.
 */
  function getAllPosts(): void {
    api.get('/posts')
      .then((res) => setAllPosts(res.data))
      .catch((error) => console.log(error.response.message))
  }

  useEffect(() => {
    getAllPosts();
  }, [])

  return (
    <Container>      
      <PostButton
        showInputPost={showInputPost}
        setShowInputPost={setShowInputPost}
      />

        <FlatList
          style={{backgroundColor: showInputPost ? 'rgba(0,0,0,0.6)' : '#eeeeee'}}
          data={allPosts?.sort((a, b) => a.id - b.id)?.reverse()?.slice(0, page)}
          keyExtractor={(item: IPosts) => String(item.body)}
          renderItem={({item}) => (
            <CardPost showInputPost={showInputPost} element={item} />
          )}
          onEndReached={() => {
            setPage(page + 10);
          }}
          onEndReachedThreshold={0.5}
        />
    </Container>
  )
}