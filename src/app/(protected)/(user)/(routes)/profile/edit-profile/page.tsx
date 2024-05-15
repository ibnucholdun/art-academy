import { Card, CardContent, CardHeader } from "@/components/ui/card";
import FormUpdateProfile from "./_components/FormUpdateProfile";
import { currentUser } from "@/lib/auth";

type Props = {};

const EditProfilePage = async (props: Props) => {
  const user: any = await currentUser();
  return (
    <Card className="w-full">
      <CardHeader className="font-bold pb-0 text-lg">Detail Profile</CardHeader>
      <CardContent>
        <FormUpdateProfile user={user} />
      </CardContent>
    </Card>
  );
};

export default EditProfilePage;
