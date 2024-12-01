const roleSchema = new mongoose.Schema({
    tenantId: { type: String, required: true },
    roleName: { type: String, required: true }, // Role name (e.g., Admin, Member)
    permissions: [String], // List of permissions (e.g., ["create_project", "manage_users"])
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model("Role", roleSchema);
  