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
        </>
    );
}
