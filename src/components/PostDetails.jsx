import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, Typography, Container, CircularProgress } from "@mui/material";

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <CircularProgress sx={{ mt: 4 }} />;
  if (!post) return <Typography sx={{ mt: 4 }}>Post não encontrado.</Typography>;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Detalhes do Post</Typography>
      <Card>
        <CardContent>
          <Typography variant="h5">{post.title}</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>{post.body}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
