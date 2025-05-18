function PlaceTree({ place }) {
  const childPlaces = place.childPlaces;
  return (
    <li>
      {place.title}
      {childPlaces.length > 0 && (
        <ol>
          {childPlaces.map((childPlace) => (
            <PlaceTree place={childPlace} key={childPlace.id} />
          ))}
        </ol>
      )}
    </li>
  );
}

export default PlaceTree;
