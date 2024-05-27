import Modal from "@/components/Modal";
import { getUserByUserId } from "@/data/user";
import FormDetailUser from "../../../_components/FormDetailUser";

type Props = {
  params: {
    userId: string;
  };
};

const DetailUserModal = async ({ params }: Props) => {
  const user = await getUserByUserId(params.userId);
  return (
    <Modal title="✏️ Edit Profile">
      <FormDetailUser user={user} />
    </Modal>
  );
};

export default DetailUserModal;
