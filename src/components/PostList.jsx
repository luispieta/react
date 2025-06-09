import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Container, Grid, CircularProgress } from "@mui/material";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <CircularProgress sx={{ mt: 4 }} />;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Lista de Posts</Typography>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <a
              href={`/dados/${post.id}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Card sx={{ cursor: "pointer", '&:hover': { boxShadow: 6 } }}>
                <CardContent>
                  <Typography variant="h6" color="primary">{post.title}</Typography>
                  <Typography variant="body2">{post.body.substring(0, 100)}...</Typography>
                </CardContent>
              </Card>
            </a>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}