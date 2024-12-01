const projectSchema = new mongoose.Schema({
    tenantId: { String, required: true }, // change it to unique string
    projectName: { type: String, required: true }, 
    description: { type: String },
    assignedTeams: [{ type: String}], // change it to unique string
    createdBy: { type: String }, // change it to unique string
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model("Project", projectSchema);
  