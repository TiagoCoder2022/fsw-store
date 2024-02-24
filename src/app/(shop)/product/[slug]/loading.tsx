import { LoaderIcon } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex h-screen w-full animate-spin items-center justify-center">
      <LoaderIcon size={27} />
    </div>
  );
};

export default Loading;
