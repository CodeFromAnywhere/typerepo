import { Div, Span } from "react-with-native";
import { MarkdownReaderPage } from "markdown-reader-types";
import { useRouter } from "react-with-native-router";
import { MenuItem } from "./MenuItem";
import { useStore } from "../store";

export const Layout = ({
  pages,
  children,
}: {
  pages: MarkdownReaderPage[];
  children: any;
}) => {
  const router = useRouter();

  const [loginToken, setLoginToken] = useStore("api.loginToken");
  const isLoggedIn = loginToken.length > 0;

  return (
    <Div className="h-screen grid grid-rows-6">
      <Div className="row-span-6 grid grid-cols-5">
        <Div
          className={`
        col-span-4 overflow-y-auto bg-gray-50 dark:bg-gray-900 dark:text-white`}
          textClassName="dark:text-white"
        >
          {children}
        </Div>
        <Span className="border-l col-span-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 dark:text-white border-l-gray-400">
          {[
            {
              path: "/",
              title: "🗺 Home",
            },

            {
              path: "/driver-signup",
              title: "✨ Driver Signup",
              isVisible: !isLoggedIn,
            },
            {
              path: "/jeep-list",
              title: "🛻 Jeep list",
            },
            {
              path: "/login",
              title: "🏰 Login",
              isVisible: !isLoggedIn,
            },

            {
              path: "/edit-profile",
              title: "📝 Edit profile",
              isVisible: isLoggedIn,
            },
            {
              onClick: () => setLoginToken(""),
              title: "🚪 Logout",
              isVisible: isLoggedIn,
            },
          ].map((item, index) => {
            if (item.isVisible === false) {
              return null;
            }
            return (
              <MenuItem
                key={`menu${index}`}
                onClick={async () => {
                  await item.onClick?.();
                  if (item.path) {
                    router.push(item.path);
                  }
                }}
              >
                {item.title}
              </MenuItem>
            );
          })}
        </Span>
      </Div>
    </Div>
  );
};
