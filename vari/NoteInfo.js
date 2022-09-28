export default function NoteInfo({note}) {
    const { title, content } = note || {};
    console.log(title);
    return note ? (
        <div style={{ background: "khaki", width: "250px", height: "250px" }}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    ) : (
        <p>Loading....</p>
    );
}
