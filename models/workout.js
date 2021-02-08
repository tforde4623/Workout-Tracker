const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date()
    },
    exercises: [
      {
        type: {
          type: String,
          required: true
        },
        name: {
          type: String,
          required: true
        },
        duration: {
          type: Number,
          required: true
        },
        weight: {
          type: Number,
          required: false
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number,
          required: false
        }
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

WorkoutSchema.virtual('totalDuration').get(function () {
  return this.exercises.reduce((a, b) => {
    return a + b.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;


