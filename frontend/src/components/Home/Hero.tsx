import { useState } from "react";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [url, setUrl] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(url);
    const encodedUrl = encodeURIComponent(url);
    navigate(`/url?target=${encodedUrl}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  return (
    <section className="Hero h-svh flex flex-col justify-center items-center gap-8 p-10 sm:p-0">
      <div className="heading flex flex-col gap-2 justify-center items-center">
        <p className="text-xl text-center sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          Visualize Your Open Graph Metadata
        </p>
        <p className="text-sm text-center md:text-2xl text-muted-foreground">
          Instantly see how your website appears across various social media
          platforms.
        </p>
      </div>
      <PlaceholdersAndVanishInput
        placeholders={["Enter your website URL"]}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </section>
  );
};

export default Hero;
