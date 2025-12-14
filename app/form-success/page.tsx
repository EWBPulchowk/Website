export default function FormSuccess() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <div className="bg-white rounded-2xl px-10 py-12 text-center shadow-2xl animate-fadeIn">
        
        {/* Success Icon */}
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <span className="text-3xl text-green-600">✔</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800">
          Form Submitted Successfully
        </h1>

        {/* Subtitle */}
        <p className="mt-2 text-gray-500">
          Thank you! Your response has been received.
        </p>

      </div>
    </div>
  );
}
