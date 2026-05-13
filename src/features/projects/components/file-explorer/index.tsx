import { ScrollArea } from "@/components/ui/scroll-area";
import { Id } from "../../../../../convex/_generated/dataModel";
import { ChevronRightIcon } from "lucide-react";

export const FileExplorer = ({ projectId }: { projectId: Id<"projects"> }) => {
  return (
    <div className="h-full bg-sidebar">
      <ScrollArea>
        <div 
        role="button"
        onClick={() => {}}
        className="group/project cursor-pointer w-full text-left flex items-center gap-0.5 h-5.5 bg-accent font-bold"
        >
          <ChevronRightIcon />
          <p>
            hi
          </p>
        </div>
      </ScrollArea>
    </div>
  );
};
