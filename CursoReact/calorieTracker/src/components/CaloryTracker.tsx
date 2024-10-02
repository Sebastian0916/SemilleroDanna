import CalorieDisplay from "./CalorieDisplay";
import { useActivity } from "../hooks/useActivity";


export default function CaloryTracker() {
  const {caloriesBurned,caloriesConsumed,netCalories} =useActivity()



  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">Resumen de calorías</h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
        <CalorieDisplay calories={caloriesConsumed} text="Consumidas" />
        <CalorieDisplay calories={caloriesBurned} text="Ejercicio" />
        <CalorieDisplay calories={netCalories} text="Diferencia" />
      </div>
    </>
  );
}