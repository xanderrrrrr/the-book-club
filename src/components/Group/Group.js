import React from "react";
// import "./style.css";

function Group() {
    return (
        <>
        <div>
            <h1>This is the group page: enter in your group name</h1>
        </div>
        <form className="w-full max-w-sm">

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-group-name">
              Group Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-username" type="text" placeholder="group name"/>
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button className="shadow bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
      </>
        
    );
}

export default Group;