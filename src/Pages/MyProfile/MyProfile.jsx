import { updateProfile } from "firebase/auth";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";

export default function MyProfile() {
  const { user } = useAuth();
  const { displayName, email, photoURL } = user;

  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value;
    const image = e.target.image.value;

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: image,
      });

      toast.success("Profile updated successfully!!");

      // Refresh UI
      setTimeout(() => {
        window.location.reload();
      }, 800);
    } catch (error) {
      console.error(error);
      toast.error("Error updating profile: " + error.message);
    }

    setLoading(false);
  };

  return (
    <div className="h-[600px] flex flex-col">
      <div className="grow flex flex-col items-center justify-center px-6 py-12">
        <h1 className="text-3xl font-semibold tracking-wide mb-8">
          My Profile
        </h1>

        <div className="bg-gray-50 max-w-sm w-full rounded-2xl shadow-lg p-10 text-center text-gray-800">
          <img
            src={photoURL}
            alt="img"
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-indigo-500 object-cover shadow-md"
          />

          <h1 className="text-3xl font-bold mb-2">Name : {displayName}</h1>
          <p className="text-lg mb-10 font-light">Gmail : {email}</p>

          <button
            onClick={() => document.getElementById("my_modal_2").showModal()}
            className="bg-[#04AA6D] hover:bg-cyan-300 rounded-full px-12 py-3 text-white shadow-md"
          >
            Update Profile
          </button>
        </div>
      </div>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-white/60 backdrop-blur-xl border shadow-2xl text-gray-800 rounded-3xl p-8">
          <form method="dialog" className="absolute right-4 top-4">
            <button className="btn btn-sm btn-circle btn-ghost">✕</button>
          </form>

          <h3 className="font-bold text-3xl text-center mb-8">
            🧑‍💻 Update Profile
          </h3>

          <form onSubmit={handleUpdateProfile} className="space-y-6">
            <div>
              <label className="block font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                defaultValue={displayName}
                className="input input-bordered w-full rounded-xl"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Photo URL</label>
              <input
                type="url"
                name="image"
                defaultValue={photoURL}
                className="input input-bordered w-full rounded-xl"
                required
              />
            </div>

            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-[#04AA6D] text-white font-semibold rounded-xl"
              >
                {loading ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
