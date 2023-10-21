// "use client";

// import { useEffect, useState } from "react";
// import { createClient } from "contentful";

// const AccessToken = process.env.NEXT_PROJECTS_KEY as string;

// export const client = createClient({
//   accessToken: "CJD2aAnn10aaUp_LDfJKmeNxhG7dX35PMXuTI51VFX4",
//   space: "kang3wxr2que",
//   environment: "master",
// });

// export const useFetchProjects = () => {
//   const [loading, setLoading] = useState<boolean>(false);
//   const [projects, setProjects] = useState([]);

//   const getProjects = async () => {
//     setLoading(true);
//     try {
//       const response = await client.getEntries({
//         content_type: "portfolioProjects",
//       });

//       const project = response.items.map((item) => {
//         const { category, name, sourceCode, url, stacks, images, projectInfo } =
//           item.fields;
//         const id = item.sys.id;
//         const img = images?.fields?.file?.url;

//         return {
//           category,
//           name,
//           sourceCode,
//           url,
//           stacks,
//           id,
//           img: `${window.location.protocol}${img}`,
//           projectInfo,
//         };
//       });

//       setProjects(project);
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getProjects();
//   }, []);

//   return { loading, projects };
// };

// export const getProjects = async () => {
//   try {
//     const response = await client.getEntries({
//       content_type: "portfolioProjects",
//     });

//     const project = response.items.map((item) => {
//       const { category, name, sourceCode, url, stacks, images, projectInfo } =
//         item.fields;
//       const id = item.sys.id;
//       const img = images?.fields?.file?.url;

//       return {
//         category,
//         name,
//         sourceCode,
//         url,
//         stacks,
//         id,
//         img: `${window.location.protocol}${img}`,
//         projectInfo,
//       };
//     });

//     return project;
//   } catch (error) {
//     console.log(error);
//   }
// };
