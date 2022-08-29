import RenderShip from "./RenderShip";

export default function RenderShipPreview({ ship, isValidPos }) {
  return (
    <RenderShip
      ship={ship}
      customStyle={{
        opacity: "50%",
        backgroundColor: isValidPos ? "#317504" : "#932020", //green  //red
      }}
    />
  );
}
