import Information from "@/components/Information";
import { Social } from "@/components/Social";
import { socialList } from "@/utils/social";

const HomePage = () => {
  return (
    <section>
      <Information />
      <Social items={socialList} speed="normal" />
    </section>
  );
};

export default HomePage;
