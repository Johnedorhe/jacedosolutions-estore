import { cn } from "@/lib/utils";

export default function Container({ children, classname }: { children: React.ReactNode, classname?: string }) {
  return (
    <div className={cn("max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8", classname)}>
      {children}
    </div>
  );
}