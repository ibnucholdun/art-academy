import { getUserByUserId } from "@/data/user";
import FormDetailUser from "../../_components/FormDetailUser";

type Props = {
  params: {
    userId: string;
  };
};

const DetailUserPage = async ({ params }: Props) => {
  const user = await getUserByUserId(params.userId);
  return (
    <div className="space-y-6">
      <FormDetailUser user={user} />
    </div>
  );
};

export default DetailUserPage;
