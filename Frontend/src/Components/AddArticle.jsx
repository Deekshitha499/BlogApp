import { useForm } from "react-hook-form";

function AddArticle() {

  const {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm()

  const onSubmit=(data)=>{
    console.log(data)
  }

  return (

    <div className="min-h-screen flex justify-center items-center bg-gray-200">

      <form onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-lg rounded-lg p-8 w-[350px]">

        <h2 className="text-center font-semibold mb-6">
          AddArticle.jsx
        </h2>

        <input
        type="text"
        placeholder="Title"
        className="bg-gray-300 p-2 w-full mb-4"
        {...register("title",{required:"Title required"})}
        />

        <select
        className="bg-gray-300 p-2 w-full mb-4"
        {...register("category",{required:"Category required"})}
        >

          <option value="">Category</option>
          <option>Technology</option>
          <option>Education</option>
          <option>Health</option>

        </select>

        <textarea
        placeholder="Content"
        className="bg-gray-300 p-2 w-full mb-4"
        {...register("content",{required:"Content required"})}
        />

        <button className="bg-blue-400 text-white px-6 py-2 block mx-auto">
          Publish Article
        </button>

      </form>

    </div>
  )
}

export default AddArticle