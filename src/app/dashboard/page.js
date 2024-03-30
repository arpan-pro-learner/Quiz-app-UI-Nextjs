import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { TableCell, TableRow, TableBody, Table } from "@/components/ui/table";
export default function Component() {
  return (
    <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Package2Icon className="h-6 w-6" />
              <span className="">Quizler App</span>
            </Link>
            <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="/"
              >
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <UsersIcon className="h-4 w-4" />
                Students
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
              >
                <FileEditIcon className="h-4 w-4" />
                Create Quiz
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <FileTextIcon className="h-4 w-4" />
                My Quizzes
              </Link>
            </nav>
          </div>

          {/* <div className="mt-auto p-4">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="sm">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search quizzes..."
                  type="search"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="border shadow-sm rounded-lg">
            <Card>
              <CardHeader className="border-b">
                <CardTitle className="text-lg">Create a new quiz</CardTitle>
                <CardDescription>
                  Enter the questions and options for your quiz
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-sm" htmlFor="title">
                      Quiz Title
                    </Label>
                    <Input
                      id="title"
                      placeholder="Enter the title of your quiz"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm" htmlFor="question">
                      Question 1
                    </Label>
                    <Input id="question" placeholder="Enter your question" />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <Input
                        className="peer h-4 w-4 border-gray-300 dark:border-gray-800 text-gray-400  transition-all group-hover:border-gray-400 group-hover:text-gray-500 dark:hover:text-gray-50"
                        id="option1"
                        type="checkbox"
                      />
                      <Label
                        className="peer-checked:underline"
                        htmlFor="option1"
                      >
                        Option 1
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input
                        className="peer h-4 w-4 border-gray-300 dark:border-gray-800 text-gray-400  transition-all group-hover:border-gray-400 group-hover:text-gray-500 dark:hover:text-gray-50"
                        id="option2"
                        type="checkbox"
                      />
                      <Label
                        className="peer-checked:underline"
                        htmlFor="option2"
                      >
                        Option 2
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input
                        className="peer h-4 w-4 border-gray-300 dark:border-gray-800 text-gray-400  transition-all group-hover:border-gray-400 group-hover:text-gray-500 dark:hover:text-gray-50"
                        id="option3"
                        type="checkbox"
                      />
                      <Label
                        className="peer-checked:underline"
                        htmlFor="option3"
                      >
                        Option 3
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input
                        className="peer h-4 w-4 border-gray-300 dark:border-gray-800 text-gray-400  transition-all group-hover:border-gray-400 group-hover:text-gray-500 dark:hover:text-gray-50"
                        id="option4"
                        type="checkbox"
                      />
                      <Label
                        className="peer-checked:underline"
                        htmlFor="option4"
                      >
                        Option 4
                      </Label>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Next question</Button>
              </CardFooter>
            </Card>
          </div>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="border shadow-sm rounded-lg">
              <Table>
                <Card className="w-[350px]">
                  {" "}
                  <CardHeader className="border-b">
                    {" "}
                    <CardTitle className="text-lg">
                      Previous Quiz Details
                    </CardTitle>{" "}
                  </CardHeader>
                </Card>
                <TableBody>
                  <TableRow>
                    <TableCell className="w-[100px]">QZ001</TableCell>
                    <TableCell className="font-medium">
                      Geography Quiz - Rivers of the World
                    </TableCell>
                    <TableCell>10 questions</TableCell>
                    <TableCell className="w-[100px]">Published</TableCell>
                    <TableCell className="w-[100px]">25 students</TableCell>
                    <TableCell className="w-[100px]">10m ago</TableCell>
                    <TableCell className="w-[100px]">
                      <Link className="underline" href="#">
                        View
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="w-[100px]">QZ002</TableCell>
                    <TableCell className="font-medium">
                      History Quiz - World War II
                    </TableCell>
                    <TableCell>15 questions</TableCell>
                    <TableCell className="w-[100px]">Draft</TableCell>
                    <TableCell className="w-[100px]">-</TableCell>
                    <TableCell className="w-[100px]">1h ago</TableCell>
                    <TableCell className="w-[100px]">
                      <Link className="underline" href="#">
                        Edit
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="w-[100px]">QZ003</TableCell>
                    <TableCell className="font-medium">
                      Science Quiz - Solar System
                    </TableCell>
                    <TableCell>12 questions</TableCell>
                    <TableCell className="w-[100px]">Published</TableCell>
                    <TableCell className="w-[100px]">10 students</TableCell>
                    <TableCell className="w-[100px]">2d ago</TableCell>
                    <TableCell className="w-[100px]">
                      <Link className="underline" href="#">
                        View
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="w-[100px]">QZ004</TableCell>
                    <TableCell className="font-medium">
                      Math Quiz - Algebra
                    </TableCell>
                    <TableCell>20 questions</TableCell>
                    <TableCell className="w-[100px]">Published</TableCell>
                    <TableCell className="w-[100px]">50 students</TableCell>
                    <TableCell className="w-[100px]">1w ago</TableCell>
                    <TableCell className="w-[100px]">
                      <Link className="underline" href="#">
                        View
                      </Link>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </main>
        </main>
      </div>
    </div>
  );
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function FileEditIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  );
}

function FileTextIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
