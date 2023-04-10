import openai from "../ai";

// TODO: integrate with the fine tune models and customize a model.

openai
  .listModels()
  .then((response) => {
    console.log(response.data);
  })
  .catch((err) => {
    console.error("things have gone wrong");
  });
