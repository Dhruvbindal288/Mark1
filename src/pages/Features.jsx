import { FaBolt, FaTachometerAlt, FaRecycle, FaSolarPanel, FaChartLine, FaLeaf } from "react-icons/fa";
import Card from "../components/Card";

function Features() {
  return (
    <div id="features" className="p-6">
      <h1 className="text-2xl pt-16 md:text-6xl text-center font-medium mb-10 ">
        Innovative Features
      </h1>
      <div className="flex gap-4 items-center justify-center flex-wrap">
        <Card
          text="Creates a perpetual cycle of energy that intelligently utilizes power to generate more, defining true sustainability."
          heading="Self-Sustaining Power"
          Icon={FaBolt}
        />
        <Card
          text="Advanced dynamo control system allowing nuanced adjustment of engine speed for optimal performance."
          heading="Variable Speed Control"
          Icon={FaTachometerAlt}
        />
        <Card
          text="Transforms kinetic energy from slowdowns into power, maximizing efficiency and eco-consciousness."
          heading="Regenerative Braking"
          Icon={FaRecycle}
        />
        <Card
          text="Brings electricity to remote areas, breaking free from traditional grids and fostering progress everywhere."
          heading="Off-Grid Power Generation"
          Icon={FaSolarPanel}
        />
        <Card
          text="Comprehensive dashboard for monitoring energy generation, consumption, and efficiency metrics."
          heading="Real-Time Monitoring"
          Icon={FaChartLine}
        />
        <Card
          text="Completely eco-friendly system that minimizes environmental impact while maximizing energy output."
          heading="Zero Carbon Emissions"
          Icon={FaLeaf}
        />
      </div> 
    </div>
  );
}

export default Features;
