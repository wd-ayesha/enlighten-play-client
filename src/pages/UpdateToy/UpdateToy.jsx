import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";


const UpdateToy = () => {
  const [toy, setToy] = useState({});
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(`https://enlighten-play-server.vercel.app/singleSelectedToy/${id}`)
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, [id]);

  const onSubmit = (data) => {
    fetch(`https://enlighten-play-server.vercel.app/allSelectedToys/${id}`, {
      method: "PUT",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if(data.matchedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Updated Successfully!',
            confirmButtonText: 'cool',
          })
        }
      }
    
    );
  }


    return (
        <div className="max-w-5xl mx-auto  bg-fuchsia-400 my-14 rounded-lg shadow-xl">
        <form className="pl-40 py-10" onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input className="input input-bordered w-full max-w-xs m-3" placeholder="Picture URL of the toy" defaultValue={toy.photo} {...register("photo")} /> 
          <input className="input input-bordered w-full max-w-xs" placeholder="Name" defaultValue={toy.toyName} {...register("toyName")} /><br />
         
  
          <input className="input input-bordered w-full max-w-xs m-3 hidden" placeholder="Detail description" defaultValue={toy._id} {...register("_id")} /> 

    
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          <select className="input input-bordered w-full max-w-xs m-3" defaultValue={toy.subCategory} {...register("subCategory")}>
            <option value="">Select One</option>
            <option value="scienceKits">Science Kits</option>
            <option value="engineeringKits">Engineering Kits</option>
            <option value="languageToys">Language Toys</option>
            <option value="mathLearningToys">Math Learning Toys</option>
          </select>
          <input className="input input-bordered w-full max-w-xs" placeholder="Price" defaultValue={toy.price} {...register("price")} /> <br />
          <input className="input input-bordered w-full max-w-xs m-3" placeholder="Rating" defaultValue={toy.rating} {...register("rating")} />
          <input className="input input-bordered w-full max-w-xs" placeholder="Available quantity" defaultValue={toy.quantity} {...register("quantity")} /><br />
          <input className="input input-bordered w-full max-w-xs m-3" placeholder="Detail description" defaultValue={toy.description} {...register("description")} /> 
          <input className="btn btn-outline" type="submit" value="update" />
        </form>
      </div>
    );
};

export default UpdateToy;