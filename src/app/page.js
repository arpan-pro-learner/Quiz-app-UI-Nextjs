

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center lg:gap-8 mt-52">
      {/* <div className="grid gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Teacher Login</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your email below to login to your account
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="m@example.com" type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <Button className="w-full">Login</Button>
          <Button className="w-full" variant="outline">
            Sign up
          </Button>
          <Link href="/dashboard">
            {" "}
            <Button className="w-full" variant="ghost">
              Demo Login
            </Button>
          </Link>
        </div>
      </div> */}

      <div className="border-t border-gray-200 dark:border-gray-800 md:border-0 " />
      <div className="grid gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold mt-24 ">Login for Student</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your email below to login to your account
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="m@example.com" type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="id">Test ID</Label>
            <Input id="id" placeholder="Test ID" />
          </div>
          <Button className="w-full">Login</Button>
          <Button className="w-full" variant="outline">
            Sign up
          </Button>
          <Link href="/for-student">
            <Button className="w-full" variant="ghost">
              Demo Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
