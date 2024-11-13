import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import RegisterForm from "@/components/auth/RegisterForm";
import { Button } from "./ui/button";
export default function TopBar() {
    return (
        <div className="top-area flex flex-jc-sb">
            <Dialog>
                <DialogTrigger>
                    <Button>Sign In</Button>
                </DialogTrigger>
                <DialogContent className="glass">
                    <DialogHeader>
                        <DialogTitle className="flex justify-center">
                            <Tabs defaultValue="signIn" className="w-[400px]">
                                <TabsList>
                                    <TabsTrigger value="signIn" className="">
                                        Sign In
                                    </TabsTrigger>
                                    <TabsTrigger value="signUp">
                                        Sign Up
                                    </TabsTrigger>
                                </TabsList>
                                <TabsContent value="signIn">
                                    Make changes to your account here.
                                </TabsContent>
                                <TabsContent value="signUp">
                                    <RegisterForm></RegisterForm>
                                </TabsContent>
                            </Tabs>
                        </DialogTitle>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}
