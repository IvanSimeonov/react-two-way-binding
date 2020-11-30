import "./UserOutput.css";

const UserOutput = (props) => {
  {/* Example of if-statement here (2nd Way - Part 1) */}
  let ageSection = null;
  if (props.age !== undefined && props.age !== null) {
    ageSection = <div className="row">
      <p>Age: {props?.age}</p>
    </div>;
  }

  return (
    <div className="container UserOutput">
      <div className="row">
        <p>Name: {props?.name}</p>
      </div>
      {/* Example of the if-statement here (1st Way) */}
      {props.age !== null && props.age !== undefined ? (
        <div className="row">
          <p>Age: {props?.age}</p>
        </div>
      ) : (
        <div className="row">
          <p>Nothing to show here</p>
        </div>
      )}
      {/* Example of if-statement here (2nd Way - Part 2) */}
      {ageSection}
    </div>
  );
};

export default UserOutput;
