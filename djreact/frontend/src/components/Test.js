import React from "react";
import { increaseCount } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";

export default function Test() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const counterValue = state.reducertst.val;
  return (
    <div className="bg-gray-300 w-full h-screen">
      <div className="p-16">
        <div className="shadow bg-black text-center min-h-1/4s">
          <h1 className="text-red-500 font-bold p-6">
            Django and React with Tailwind
          </h1>
          <div className="bg-white min-h-1/4s">
            <h2 className="p-4 font-medium">There's also Redux</h2>
            <div className="p-12 text-center ">
              <button
                className=" p-2 bg-blue-turkish rounded text-white font-medium "
                onClick={() => {
                  dispatch(increaseCount(counterValue + 1));
                }}>
                increase the Counter
              </button>
              <p className="text-center">{counterValue} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
