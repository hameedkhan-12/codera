import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";


const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
})

const ProjectsView = () => {
  return (
    <>
      <div className="min-h-screen bg-sidebar flex flex-col items-center justify-center p-6 md:p-16">
        <div className="w-full max-w-sm mx-auto flex flex-col gap-4">
          <div className="flex items-center gap-2 w-full group/logo">
            <Image src={"/logo.svg"} alt="Codera" className="size-8" width={64} height={64} />
            <h1 className={cn("text-4xl md:text-5xl font-semibold", font.className)}>Codera</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsView;
