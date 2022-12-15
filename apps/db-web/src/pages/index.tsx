import { useRouter } from "next/router";
import { UI } from "react-with-native-ui";
import { Div, Input, P } from "react-with-native";
import { BigButton } from "big-button";
import { useStore } from "../store";
import { LoginForm } from "authentication";
// for passionfruit

const DirectLogin = () => {
  const router = useRouter();
  const [pass, setPass] = useStore("api.authToken");

  return (
    <Div>
      <Input
        className={UI.textInput}
        placeholder="Password"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <BigButton title="Login" onClick={() => router.reload()} />
    </Div>
  );
};

export default LoginForm;
