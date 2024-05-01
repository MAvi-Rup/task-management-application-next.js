import TaskManager from "@/components/TaskManager";
import Providers from "@/redux/provider";


export default function Home() {
  return (
    <Providers className=" bg-slate-400">
      <TaskManager />
    </Providers>
  );
}