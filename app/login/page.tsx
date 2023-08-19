import Link from "next/link";
import Messages from "./messages";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export const dynamic = "force-dynamic";

export default function Login() {
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <form
        className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        action="/auth/sign-in"
        method="post"
      >
        <Label className="text-md" htmlFor="email">
          Email
        </Label>

        <Input
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          required
        />
        <Label className="text-md" htmlFor="password">
          Password
        </Label>

        <Input
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <Button>Sign In</Button>
        <Button variant={"outline"} formAction="/auth/sign-up">Sign Up</Button>
        <Messages />
      </form>
    </div>
  );
}
