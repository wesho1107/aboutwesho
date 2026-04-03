export function Footer() {
  return (
    <footer className="pt-12 grid gap-y-4">
      <hr />
      <div className="flex justify-between">
        <span className="text-xs text-zinc-600">
          {new Date().getFullYear()} © Wesley Ho Jia Cheng
        </span>
      </div>
    </footer>
  );
}