import { Button, Span } from "react-with-native";
import { useRouter } from "react-with-native-router";
import { FolderExploration } from "code-types";

export const MenuItem = ({
  link,
  title,
  isSelected,
  type,
  id,
  children,
  onDoubleClick,
  canExpand,
}: {
  title: string;
  link: string;
  id: string;
  canExpand: boolean;
  isHeader?: boolean;
  isSelected: boolean;
  type?: FolderExploration["type"];
  onDoubleClick?: () => void;
  children?: FolderExploration[];
}) => {
  const router = useRouter();

  return (
    <Span>
      <Button
        className={`${
          isSelected ? "bg-gray-200 " : ""
        }py-1 pr-2 hover:bg-gray-200  w-full flex flex-row items-center`}
        textClassName="text-xs"
        onDoubleClick={onDoubleClick}
        onClick={async () => {
          router.push(link);
        }}
      >
        <Span
          textClassName={`line-clamp-1 truncate text-ellipsis ${
            isSelected ? "text-blue-500" : ""
          } hover:text-blue-800 `}
        >
          &nbsp;{title}
        </Span>
      </Button>
    </Span>
  );
};
