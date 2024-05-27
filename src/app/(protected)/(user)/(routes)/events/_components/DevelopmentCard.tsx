import CardWrapper from "./CardWrapper";

type Props = {};

const DevelopmentCard = (props: Props) => {
  return (
    <CardWrapper
      headerLabel="Oops!, Page Under Development!"
      backButtonLabel="Back to Home"
      backButtonHref="/">
      <p className="text-gray-600 dark:text-gray-400 text-center">
        We apologize, this page is currently unavailable as it is under
        development. We will have it ready for you soon.
      </p>
    </CardWrapper>
  );
};

export default DevelopmentCard;
