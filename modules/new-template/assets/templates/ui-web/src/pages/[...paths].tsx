import { useRouter } from "react-with-native-router";
/**
 * This should catch all paths that aren't default ones
 */
export default () => {
  const router = useRouter();
  const paths = router.asPath.slice(1);

  return "use logic to resolve the path you want to show here";
};
