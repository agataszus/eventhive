import {
  RouterProvider as ReactRouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Layout } from "../layout/Layout";
import { HomePage } from "../../pages/dashboard/homePage/HomePage";
import { LoginPage } from "../../pages/login/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "liked-events",
        element: <></>,
      },
      {
        path: "my-tickets",
        element: <></>,
      },
    ],
  },
]);

export const RouterProvider = () => {
  return <ReactRouterProvider router={router} />;
};

// const indexRoute = new Route({ getParentRoute: () => rootRoute, path: "/" });
// const dashboardRoute = new Route({
//   getParentRoute: () => rootRoute,
//   path: "/dashboard",
// });
// const dashboardIndexRoute = new Route({
//   getParentRoute: () => dashboardRoute,
//   path: "/",
// });
// const likedEventsRoute = new Route({
//   getParentRoute: () => dashboardRoute,
//   path: "/liked-events",
// });
// const myTicketsRoute = new Route({
//   getParentRoute: () => dashboardRoute,
//   path: "/my-tickets",
// });
// const mapRoute = new Route({
//   getParentRoute: () => dashboardRoute,
//   path: "/map",
// });
// const categoriesRoute = new Route({
//   getParentRoute: () => dashboardRoute,
//   path: "/categories",
// });

// const routeTree = rootRoute.addChildren([
//   indexRoute,
//   dashboardRoute.addChildren([
//     dashboardIndexRoute,
//     likedEventsRoute,
//     myTicketsRoute,
//     mapRoute,
//     categoriesRoute,
//   ]),
// ]);

// const router = new Router({ routeTree });

// declare module "@tanstack/router" {
//   interface Register {
//     // This infers the type of our router and registers it across your entire project
//     router: typeof router;
//   }
// }

// export const RouterProvider = ({ children }: PropsWithChildren) => {
//   return (
//     <TanstackRouterProvider router={router}>{children}</TanstackRouterProvider>
//   );
// };
