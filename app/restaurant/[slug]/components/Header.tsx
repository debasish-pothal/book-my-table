export default function Header({ name }: { name: string }) {
  const renderTitle = () => {
    const words = name.split("-");
    const lastWord = words.pop();
    return (
      words
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ") +
      " ( " +
      lastWord.charAt(0).toUpperCase() +
      lastWord.slice(1) +
      " )"
    );
  };

  return (
    <div className="h-96 overflow-hidden">
      <div className="bg-center bg-gradient-to-r from-blue-900 to-indigo-700 h-full flex justify-center items-center">
        <h1 className="text-7xl text-white captitalize text-shadow text-center">
        {renderTitle()}
        </h1>
      </div>
    </div>
  );
}
