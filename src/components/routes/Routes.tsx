import {
  RouterProvider as ReactRouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Layout } from "../layout/Layout";
import { HomePage } from "../../pages/dashboard/homePage/HomePage";
import { LoginPage } from "../../pages/login/LoginPage";
import { LikedEventsPage } from "../../pages/dashboard/likedEventsPage/LikedEventsPage";
import { AccountPage } from "../../pages/dashboard/accountPage/AccountPage";
import { EventPage } from "../../pages/dashboard/eventPage/EventPage";
import { CategoryPage } from "../../pages/dashboard/categoryPage/CategoryPage";
import { CheckoutPage } from "../../pages/dashboard/checkoutPage/CheckoutPage";

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
        element: <LikedEventsPage />,
      },
      {
        path: "event/:id",
        element: <EventPage />,
      },
      {
        path: "account",
        element: <AccountPage />,
      },
      {
        path: "categories/:category",
        element: <CategoryPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "my-tickets",
        element: <HomePage />,
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
