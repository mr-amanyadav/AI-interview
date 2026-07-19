function ResumeUpload({ setResume }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Upload Resume
      </h2>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setResume(e.target.files[0])}
        className="block w-full border rounded-lg p-3"
      />

    </div>
  );
}

export default ResumeUpload;