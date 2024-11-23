import { Player } from "@lottiefiles/react-lottie-player";

const AnimatedWeather = () => {
  return (
    <div className="flex justify-center items-center">
      <Player
        autoplay
        loop
        src="/img/animations/clearSkyDay.json"
        style={{ height: "300px", width: "300px" }}
      />
    </div>
  );
};

export default AnimatedWeather;
