/* import { useEffect, useState } from "react"; */
import { useParams } from "react-router-dom";

export function ShowGithubUser() {
  const { login } = useParams();

  return <h1>{login}</h1>;
}
