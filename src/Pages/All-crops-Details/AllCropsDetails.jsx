import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const AllCropsDetails = ({ crops }) => {
  const { name, image, _id, description } = crops;
  // const navigate = useNavigate();
  // const { id } = useParams();
  // const [users, setModel] = useState({});

  // const { user } = use(AuthContext);
  // const [refetch, setRefecth] = useState(false);

  // useEffect(() => {
  //   fetch(`http://localhost:3000/users/${id}`, {
  //     headers: {
  //       authorization: `Bearer ${user.accessToken}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setModel(data.result);
  //       console.log(" Api called!");
  //       console.log(data);
  //       setLoading(false);
  //     });
  // }, [user, id, refetch]);

  // const handleDlete = () => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       fetch(`http://localhost:3000/users/${users._id}`, {
  //         method: "DELETE",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log(data);
  //           navigate("/all-models");

  //           Swal.fire({
  //             title: "Deleted!",
  //             text: "Your file has been deleted.",
  //             icon: "success",
  //           });
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     }
  //   });
  // };

  // const handleDownload = () => {
  //   const finalModel = {
  //     name: model.name,
  //     downloads: model.downloads,
  //     created_by: model.created_by,
  //     description: model.description,
  //     thumbnail: model.thumbnail,
  //     created_at: new Date(),
  //     downloaded_by: user.email,
  //   };

  //   fetch(`http://localhost:3000/users/${users._id}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(finalModel),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       toast.success("Successfully downloaded!");
  //       setRefecth(!refetch);

  //       // alternative solution of realtime download count update

  //       //     fetch(`https://3d-model-server.vercel.app/models/${id}`, {
  //       //   headers: {
  //       //     authorization: `Bearer ${user.accessToken}`,
  //       //   },
  //       // })
  //       //   .then((res) => res.json())
  //       //   .then((data) => {
  //       //     setModel(data.result);
  //       //     console.log(" Api called!")
  //       //     console.log(data);
  //       //     setLoading(false);
  //       //   });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div className="card bg-emerald-800 w-96 mt-10 shadow-sm lg:grid-cols-3">
      <figure>
        <img
          className="md:p-3  w-[400px] h-[250px] object-cover rounded-4xl shadow-md"
          src={image}
          alt="Shoes"
        />
      </figure>

      <div className="card-body ">
        <h2 className="card-title ">{name}</h2>
        <p>{description}</p>
        <div className="card-actions  ">
          <button className="py-2 sm:py-3 btn  rounded-3xl btn-outline ">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllCropsDetails;
