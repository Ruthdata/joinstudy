import { Text, Button } from "@radix-ui/themes";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-100">
        Welcome to AskField!
      </h1>
      <Text className="text-4xl text-white">Hello from Radix Themes :)</Text>
      <Button>Let's go</Button>
    </div>
  );
}
