import { FormProvider, useForm } from "react-hook-form";
import "./App.css";
import { CustomSelect } from "./CustomSelect";
import { sampleData } from "./lib";

function App() {
  const rhf = useForm();
  const { control, handleSubmit, watch, getValues, formState } = rhf;

  const successFunc = () =>
    console.log("success submit your data", getValues());
  const failFunc = (data: any) => console.log("fail submit", data);

  return (
    <FormProvider {...rhf}>
      <div className="App">
        <form
          id="customSelectContainer"
          onSubmit={handleSubmit(successFunc, failFunc)}
        >
          <CustomSelect name={"sample1"} control={control}>
            {sampleData.map((v: string, i: number) => {
              return (
                <option value={v} key={i}>
                  {v}
                </option>
              );
            })}
          </CustomSelect>

          <CustomSelect name={"sample2"} control={control}>
            {sampleData.map((v: string, i: number) => {
              return (
                <option value={v} key={i}>
                  {v}
                </option>
              );
            })}
          </CustomSelect>

          <input type="submit" />
        </form>
      </div>
    </FormProvider>
  );
}

export default App;
