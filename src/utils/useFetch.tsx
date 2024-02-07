"use client";
import axios from "axios";
import { useEffect, useState } from "react";

// env
const TMDB_TOKEN = process.env.NEXT_PUBLIC_TMDB_TOKEN;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


export const useFetch = (url: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const options = {
      method: "GET",
      url:`${BASE_URL}${url}`,
      params: {
        include_adult: "true",
        include_video: "true",
        language: "en-US",
        page: `${page}`,
        sort_by: "popularity.desc",
      },
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + TMDB_TOKEN,
      },
    };
    setLoading(true);

    axios(options)
      //    fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((res) =>res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [page, url]);

  return { data, loading, error, page, setPage };
};
