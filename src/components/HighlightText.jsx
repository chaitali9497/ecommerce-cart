import  "../styles/HighlightText.css"

function HighlightText({ text, search }) {
  if (!search) return <>{text}</>;

  const escaped = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");

  return (
    <>
      {text.split(regex).map((part, index) =>
        part.toLowerCase() === search.toLowerCase() ? (
          <mark key={index}>{part}</mark>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  );
}
export default HighlightText;