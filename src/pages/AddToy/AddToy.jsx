
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/postToy", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
    }) 
    console.log(data)
  };


  return (
    <div className="max-w-5xl mx-auto  bg-fuchsia-400 my-14 rounded-lg shadow-xl">
      <form className="pl-40 py-10" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input className="input input-bordered w-full max-w-xs m-3" placeholder="Picture URL of the toy" {...register("photo")} /> 
        <input className="input input-bordered w-full max-w-xs" placeholder="Name" {...register("toyName")} /><br />
        <input className="input input-bordered w-full max-w-xs m-3" value={user?.displayName} {...register("name")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input className="input input-bordered w-full max-w-xs" value={user?.email} {...register("email", { required: true })} /> <br />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <select className="input input-bordered w-full max-w-xs m-3" {...register("subCategory")}>
          <option value="">Select One</option>
          <option value="scienceKits">Science Kits</option>
          <option value="engineeringKits">Engineering Kits</option>
          <option value="languageToys">Language Toys</option>
          <option value="mathLearningToys">Math Learning Toys</option>
        </select>
        <input className="input input-bordered w-full max-w-xs" placeholder="Price" {...register("price")} /> <br />
        <input className="input input-bordered w-full max-w-xs m-3" placeholder="Rating" {...register("rating")} />
        <input className="input input-bordered w-full max-w-xs" placeholder="Available quantity" {...register("quantity")} /><br />
        <input className="input input-bordered w-full max-w-xs m-3" placeholder="Detail description" {...register("description")} /> 
        <input className="btn btn-outline" type="submit" />
      </form>
    </div>
  );
};

export default AddToy;