import React, { useState } from "react";
import { Id } from "../../../../convex/_generated/dataModel";
import { Button } from "@/components/ui/button";
import { Loader2Icon, RefreshCwIcon, TerminalSquareIcon } from "lucide-react";
import { useProject } from "../hooks/use-projects";
import PreviewSettingsPopover from "@/features/preview/components/preview-settings";
import { useWebContainer } from "@/features/preview/hooks/use-webcontainer";

const PreviewView = ({ projectId }: { projectId: Id<"projects"> }) => {
  const project = useProject(projectId);
  const [showTerminal, setShowTerminal] = useState(true);

  const { status, previewUrl, error, restart, terminalOutput } =
    useWebContainer({
      projectId,
      enabled: true,
      settings: project?.settings,
    });

  const isLoading = status === "booting" || status === "installing";
  return (
    <div className="flex flex-col h-full bg-background">
      <div className="h-8.75 flex items-center border-b bg-sidebar shrink-0">
        <Button
          size={"sm"}
          variant={"ghost"}
          className="h-full rounded-none"
          // disabled={isLoading}
          // onClick={restart}
          title="Restart Container"
        >
          <RefreshCwIcon className="size-3" />
        </Button>

        <div className="flex-1 h-full flex items-center px-3 bg-background border-x text-xs text-muted-foreground truncate font-mono">
          {isLoading && (
            <div className="flex items-center gap-1.5">
              <Loader2Icon className="size-3 animate-spin" />
              {status === "booting" ? "starting..." : "installing..."}
            </div>
          )}
          {previewUrl && <span>{previewUrl}</span>}
          {!isLoading && !previewUrl && !error && <span>Ready to Preview</span>}
        </div>
        <Button
          size={"sm"}
          variant={"ghost"}
          className="h-full rounded-none"
          title="Toggle terminal"
          onClick={() => setShowTerminal(!showTerminal)}
        >
          <TerminalSquareIcon className="size-3" />
        </Button>
        <PreviewSettingsPopover
          projectId={projectId}
          initialValues={project?.settings}
          onSave={restart}
        />
      </div>
    </div>
  );
};

export default PreviewView;
