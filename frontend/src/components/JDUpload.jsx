function JDUpload({
  jdText,
  setJdText,
  setJdFile,
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Job Description
      </h2>

      <textarea
        rows={10}
        placeholder="Paste Job Description..."
        value={jdText}
        onChange={(e) => setJdText(e.target.value)}
        className="w-full border rounded-lg p-3"
      />

      <div className="text-center my-5 font-semibold">
        OR
      </div>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setJdFile(e.target.files[0])}
        className="block w-full"
      />

    </div>
  );
}

export default JDUpload;