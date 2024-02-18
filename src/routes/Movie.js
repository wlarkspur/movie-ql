import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";

const GET_MOVIE = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
      small_cover_image
    }
  }
`;

export default function Movie() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id,
    },
  });
  console.log(id, data, loading);
  if (loading) {
    return <h1>Fetching movie...</h1>;
  }
  if (error) {
    return <h1>Something is wrong...check graphql</h1>;
  }
  return <div>{data && data.movie.title}</div>;
}
