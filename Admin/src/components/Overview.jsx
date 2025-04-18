import { FaEye, FaMousePointer, FaPaperPlane } from "react-icons/fa"

export function Overview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <FaEye className="mr-2" /> Views
        </h3>
        <p className="text-3xl font-bold">1,234</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <FaMousePointer className="mr-2" /> Clicks
        </h3>
        <p className="text-3xl font-bold">5673</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <FaPaperPlane className="mr-2" /> Form Submissions
        </h3>
        <p className="text-3xl font-bold">577</p>
      </div>
    </div>
  )
}

