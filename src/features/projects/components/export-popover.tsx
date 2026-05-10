import React, { useState } from "react";
import { Id } from "../../../../convex/_generated/dataModel";
import { Popover, PopoverTrigger } from "@/components/ui/popover";

const ExportPopover = ({ projectId }: { projectId: Id<"projects"> }) => {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div>
          <span className="text-sm">Export</span>
        </div>
      </PopoverTrigger>
      
    </Popover>
  );
};

export default ExportPopover;
