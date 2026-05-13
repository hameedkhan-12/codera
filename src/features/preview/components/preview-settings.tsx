import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SettingsIcon } from "lucide-react";
import z from "zod";
import { Doc, Id } from "../../../../convex/_generated/dataModel";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { useState } from "react";
import { useUpdateProjectSettings } from "@/features/projects/hooks/use-projects";
import { useForm } from "@tanstack/react-form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  installCommand: z.string(),
  devCommand: z.string(),
});

interface PreviewSettingsPopoverProps {
  projectId: Id<"projects">;
  initialValues?: Doc<"projects">["settings"];
  onSave?: () => void;
}
const PreviewSettingsPopover = ({
  projectId,
  initialValues,
  onSave,
}: PreviewSettingsPopoverProps) => {
  const [open, setOpen] = useState(false);
  const updateSettings = useUpdateProjectSettings();

  const form = useForm({
    defaultValues: {
      installCommand: initialValues?.installCommand ?? "",
      devCommand: initialValues?.devCommand ?? "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      await updateSettings({
        id: projectId,
        settings: {
          installCommand: value.installCommand || undefined,
          devCommand: value.devCommand || undefined,
        },
      });
      setOpen(false);
      onSave?.();
    },
  });
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>
          <SettingsIcon className="size-3" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action="">
          <div>
            <div>
              <h4>Preview Settings</h4>
              <p>Configure how your project runs in the preview.</p>
            </div>
            <form.Field name="installCommand">
              {(field) => (
                <Field>
                  <FieldLabel>Install Command</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="npm install"
                  />
                  <FieldDescription>
                    Command to install dependencies
                  </FieldDescription>
                </Field>
              )}
            </form.Field>
            <form.Field name="devCommand">
              {(field) => (
                <Field>
                  <FieldLabel htmlFor={field.name}>Start Command</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="npm run dev"
                  />
                  <FieldDescription>
                    Command to start the development server
                  </FieldDescription>
                </Field>
              )}
            </form.Field>
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
            >
              {([canSubmit, isSubmitting]) => (
                <Button
                  type="submit"
                  size="sm"
                  className="w-full"
                  disabled={!canSubmit || isSubmitting}
                >
                  {isSubmitting ? "Saving..." : "Save Changes"}
                </Button>
              )}
            </form.Subscribe>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default PreviewSettingsPopover;
