const ReturnNotes = ({
  notes,
}: {
  notes: { amt: number; total: number }[];
}) => {
  return (
    <>
      {" "}
      <section className="label">Return Change:</section>
      <div>
        <div className="table-col">
          <span className="smallcard">Note: </span>
          <span className="smallcard">No. of Notes</span>
        </div>
        {notes.map((note) => (
          <div className="table-col">
            <span className="smallcard">{note.amt}: </span>
            <span className="smallcard">{note.total}</span>
          </div>
        ))}
      </div>
    </>
  );
};
export default ReturnNotes;
