import Information from "@/components/Information";
import InformationMore from "@/components/InformationMore";
import { Social } from "@/components/Social";
import { socialList } from "@/utils/social";

const HomePage = () => {
  return (
    <section>
      <Information />
      <Social items={socialList} speed="normal" />
      <InformationMore />
    </section>
  );
};

export default HomePage;
