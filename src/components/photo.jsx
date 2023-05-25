export default function Photo(props) {
  const { photo } = props;
  const key = photo.src;
  return (
    <div className={props.class} key={key}>
      <img
        className="Photosliderimages"
        src={`src/assets/${photo.src}`}
        alt={photo.text}
      />
      <div className="Photoslidertext">{photo.text}</div>
    </div>
  );
}
