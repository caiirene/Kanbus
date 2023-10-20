import ModuleList from "./ModuleList";
import Button from "./button";
import Status from "./status";

function Modules() {
  return (
    <div className="row">
      <div className="col-9">
        <Button />
        <ModuleList />
      </div>
      <div className="col-2">
        <Status />
      </div>
    </div>
    
  );
}
export default Modules;