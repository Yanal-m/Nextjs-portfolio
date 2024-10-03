interface SkillBarProps {
  skill: string;
  percentage: number;
  color: string;
}

export default function SkillBar({ skill, percentage, color }: SkillBarProps) {
  return (
    <div className="mb-8">
      <div className="mb-2">
        <span className="text-lg font-medium text-black">{skill}</span>
      </div>
      <div className="w-full h-2.5 bg-gray-200 rounded-full">
        <div
          className="h-full rounded-full"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
}
