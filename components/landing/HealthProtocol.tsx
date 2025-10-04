// components/landing/HealthProtocol.tsx
import { FaHandsWash, FaHeadSideMask, FaUserFriends } from "react-icons/fa";
import { MdSocialDistance, MdDoNotTouch, MdGroups } from "react-icons/md";

export default function HealthProtocol() {
  const rules = [
    { icon: <FaHandsWash size={30} />, label: "Hand Wash" },
    { icon: <FaHeadSideMask size={30} />, label: "Use Facemask" },
    { icon: <MdSocialDistance size={30} />, label: "Social Distancing" },
    { icon: <MdDoNotTouch size={30} />, label: "No Contact" },
    { icon: <MdGroups size={30} />, label: "No Crowd" },
  ];

  return (
    <div className="py-16 bg-white text-center">
      <h2 className="text-3xl font-heading mb-10 text-gray-800">
        Health Protocol
      </h2>
      <div className="flex flex-wrap justify-center gap-10 max-w-4xl mx-auto">
        {rules.map((rule, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="text-primary mb-3">{rule.icon}</div>
            <p className="text-gray-600 font-medium">{rule.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
