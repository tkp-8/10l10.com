import Topbar from "@/components/Topbar";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

export default function Home() {
    return (
        <>
            <GoogleOAuthProvider clientId="521029202231-9adelqrqt720ghpp2c3ovs9f35nttrvn.apps.googleusercontent.com">
                <GoogleLogin
                    onSuccess={(credentialResponse) => {
                        console.log(credentialResponse);
                    }}
                    onError={console.log("Login Failed")}
                />
            </GoogleOAuthProvider>

            <a href="https://slack.com/oauth/v2/authorize?scope=channels:read,groups:read,channels:manage,chat:write&client_id=8043427363828.8038126255061&state=4535">
                <img
                    height="40"
                    width="139"
                    src="https://platform.slack-edge.com/img/add_to_slack.png"
                    srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
                />
            </a>
        </>
    );
}
