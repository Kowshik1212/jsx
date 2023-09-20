export default function Assistant({ image, name }) {
    return (
        <div className="assistants">
            <img src={image} alt={name} />
            <h2>{name}</h2>
        </div>
    );
}