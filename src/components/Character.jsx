export function Character(character) {
    return (
      <div className="text-center p-4">
        <h3>{character.name}</h3>
        <img src={character.image} alt={character.name} className="img-fluid rounded-pill" />
        <p>{`Status: ${character.status}`}</p>
        <p>{`Species: ${character.species}`}</p>
        <p>{`Origin: ${character.origin && character.origin.name}`}</p>
      </div>
    );
  }
  export default Character;