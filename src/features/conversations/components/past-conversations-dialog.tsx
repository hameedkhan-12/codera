import React from "react";
import { Id } from "../../../../convex/_generated/dataModel";

interface PastConversationsDialogProps {
  projectId: Id<"projects">;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (conversationId: Id<"conversations">) => void;
}
const PastConversationsDialog = ({projectId, open, onOpenChange, onSelect}: PastConversationsDialogProps) => {
  return <div>PastConversationsDialog</div>;
};

export default PastConversationsDialog;
