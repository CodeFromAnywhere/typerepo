import { Div, Span } from "react-with-native";
import { MarkdownReaderPage } from "markdown-reader-types";
import { useRouter } from "react-with-native-router";
import { MenuItem } from "./MenuItem";

export const Layout = ({
  pages,
  children,
}: {
  pages: MarkdownReaderPage[];
  children: any;
}) => {
  const router = useRouter();
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
          <MenuItem onClick={() => router.push("/")}>Home</MenuItem>
          <MenuItem onClick={() => router.push("/driver-signup")}>
            Driver Signup
          </MenuItem>
          <MenuItem onClick={() => router.push("/jeep-list")}>
            Jeep list
          </MenuItem>
          <MenuItem onClick={() => router.push("/login")}>
            Driver Login
          </MenuItem>
          <MenuItem onClick={() => router.push("/edit-profile")}>
            Edit profile
          </MenuItem>
        </Span>
      </Div>
    </Div>
  );
};
