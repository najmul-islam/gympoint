import IntroItem from "./IntroItem";

const IntroList = ({ intros }) => {
  return (
    <div className="container py-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      {intros?.map((intro) => (
        <IntroItem key={intro.id} intro={intro} />
      ))}
    </div>
  );
};
export default IntroList;
