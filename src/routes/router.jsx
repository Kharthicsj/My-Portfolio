import { createBrowserRouter } from "react-router-dom";
import Homepage from "@/pages/Homepage";
import ProjectDetail from "@/pages/ProjectDetail";
import ProjectVideos from "@/pages/ProjectVideos";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage />,
	},
	{
		path: "/projects/:id",
		element: <ProjectDetail />,
	},
	{
		path: "/projects/:id/videos",
		element: <ProjectVideos />,
	},
]);

export default router;
