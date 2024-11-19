import React from "react";
import { useLoaderData } from "react-router-dom";

const JobPage = () => {
  const job = useLoaderData();

  return <div>{job.title}</div>;
};

const jobLoader = async ({ params }) => {
  const response = await fetch(`/api/jobs/${params.id}`);
  const data = await response.json();

  return data;
};

export { JobPage as default, jobLoader };
