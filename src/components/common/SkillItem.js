export function SkillItem({ skill }) {
  return (
    <>
      <p className="bg-teal-400/10 text-teal-300 text-xs font-medium rounded-full px-3 py-2 cursor-pointer hover:bg-teal-100 hover:text-teal-950">
        {skill}
      </p>
    </>
  );
}
