import * as React from "react";
import { cn } from "./utils";

function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "resize-none border-input placeholder:text-muted-foreground focus-visible:ring-[3px] flex min-h-16 w-full rounded-md border bg-input-background px-3 py-2 text-base outline-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
