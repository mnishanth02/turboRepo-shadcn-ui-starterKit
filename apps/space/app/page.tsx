import { Button, Input } from "@zealer/ui";

export default function Page(): JSX.Element {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex w-full max-w-sm flex-col items-center gap-4 space-x-2">
        <span>
          Welcome to Zealer space Stater template for Turbo repo with shadcn UI
        </span>
        <div className="flex w-full gap-4">
          <Input type="email" placeholder="Zealer Space Email" />
          <Button type="submit">Subscribe Space</Button>
        </div>
      </div>
    </main>
  );
}
