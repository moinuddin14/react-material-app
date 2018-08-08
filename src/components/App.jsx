import React, { Component, Fragment } from "react";
import { Header, Footer } from "./layouts";
import Exercises from "./exercises";
import { muscles, exercises } from "../store";

export default class App extends Component {
  state = {
    exercises
  };

  getExercisesByMuscles() {
    return Object.entries(

      //Reducing based on the Body Part
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];
        return exercises;
      }, {})
    );
  }

  render() {
    // All Array items
    console.log(this.getExercisesByMuscles());

    const exercises = this.getExercisesByMuscles();
    // // Fetching only the titles from each object in the array
    // this.getExercisesByMuscles().forEach(item => {
    //   console.log(item.title);
    // });

    return (
      <Fragment>
        <Header />
        <Exercises exercises={exercises} />
        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}
