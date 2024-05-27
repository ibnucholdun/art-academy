import { currentUser } from "@/lib/auth";
import DevelopmentCard from "./_components/DevelopmentCard";

type Props = {};

const EventPage = async (props: Props) => {
  const user = await currentUser();

  if (!user?.id && user?.role !== "USER") return null;

  return (
    <>
      <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FDFAF3] to-[#6f3823]">
        <DevelopmentCard />
      </div>
    </>
  );
};

export default EventPage;
