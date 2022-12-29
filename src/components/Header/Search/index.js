import {StyledSearch} from "./styles" 

export default function Search({ searchVideo, setSearchVideo }) {
  return (
    <StyledSearch>
      <input
        type="text"
        value={searchVideo}
        onChange={(e) => {
          setSearchVideo(e.target.value);
        }}
      />
      <button>🔎</button>
    </StyledSearch>
  );
}
