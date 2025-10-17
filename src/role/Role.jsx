import "./role.css";

const Role = () => {
  return (
    <div className="role_section">
      <h2>New Role</h2>
      <form>
        <div>
          <label> Role Name </label>
          <input type="text" />
        </div>
        <div>
          <label> Role Id </label>
          <input type="text" />
        </div>
        <button className="submit_btn"> Submit </button>
      </form>
    </div>
  );
};

export default Role;
