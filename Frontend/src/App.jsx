import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./Components/RootLayout";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import UserProfile from "./Components/UserProfile";
import AuthorProfile from "./Components/AuthorProfile";
import ArticleByID from "./Components/ArticleByID";
import AuthorArticles from "./Components/AuthorArticles";
import WriteArticle from "./Components/WriteArticle";
import { Toaster } from "react-hot-toast";
import EditArticle from "./Components/EditArticleForm";
import ProtectedRoute from "./Components/ProtectedRoute";
import Unauthorized from "./Components/Unauthorized";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement:<ErrorBoundary />,
      children: [
        ,
        {
          path: "",
          element: <Home />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "user-profile",
          element: 
          <ProtectedRoute allowedRoles={["USER"]}>
            <UserProfile />
          </ProtectedRoute>,
        },
        {
          path: "author-profile",
          element: 
          <ProtectedRoute allowedRoles={["AUTHOR"]}>
            <AuthorProfile />
          </ProtectedRoute>,
          
          children: [
            {
              index: true,
              element: <AuthorArticles />,
            },
            {
              path: "articles",
              element: <AuthorArticles />,
            },
            {
              path: "write-article",
              element: <WriteArticle />,
            },
          ],
        },
        {
          path: "article/:id",
          element: <ArticleByID />,
        },
        {
          path:"edit-article",
          element:<EditArticle />
        },
        {
          path:"unauthorized",
          element:<Unauthorized />
        }
      ],
    },
  ]);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={routerObj} />
    </>
  );
}

export default App;




//<ArticleByID />
// <ArticleByID > content </ArticleByID>