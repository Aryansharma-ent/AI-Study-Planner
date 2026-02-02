import mongoose from "mongoose";

const PlanSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    hoursperday: {
      type: Number,
      required: true,
      min : 0.5,
      max : 24,
    },
    durationDays: {
      type: Number,  
      required: true,
      min : 1,
      max : 365,
    },
    subjects :{
        type : [String],
        default : [],
    },
    weakAreas : {
        type : [String],
        default : [],
    },
    level : {
        type : String,
        required : true,
       enum: ["Beginner", "Intermediate", "Advanced"],
       default : "Beginner",
    },
    // AI-generated study plan - flexible JSON structure
    generatedPlan: {
        type: mongoose.Schema.Types.Mixed,
        required: false,
        default: {}
    }

  },
  {
    timestamps: true, 
  }
);

const Plan = mongoose.model("Plan", PlanSchema);

export default Plan;
