

const teamSchema = new mongoose.Schema({
    tenantId: { type: String, required: true }, // Tenant the team belongs to
    teamName: { type: String, required: true }, // Name of the team
    users: [{ type: String }], // Users in the team
    projects: [{ type: String }], //change it to unique strings
    createdBy: { type: String }, // Creator of the team - create it dynamic
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model("Team", teamSchema);
  