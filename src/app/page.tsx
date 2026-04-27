"use client";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
const Home = () => {
  const projects = useQuery(api?.projects.get)
  const createProject = useMutation(api.projects.create)
  console.log(projects)
  return <h1>
    <span className="text-3xl font-bold underline">
      Hello world!
    </span>

    <button onClick={() => createProject({
      name: "New Project134"
    })}>
      Add New
    </button>
    <div>
      {projects?.map(project => (
        <div key={project._id}>
          <p>{project.name}</p>
          <p>{project.ownerId}</p>
        </div>
      ))}
    </div>
  </h1>
};

export default Home;
