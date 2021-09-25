import React, { useState } from "react";
import FormModal from "./FormModal";
import { Button } from "react-bootstrap";
//import Create from "./Create";
import FormFields from "./FormFields";

function Main() {
  const [open, setOpen] = useState(false);

  const doSubmit = (values) => {
    alert(JSON.stringify(values));
    setOpen(false)
  };

  return (
    <div className="App">
        {/* <FormModal
        Content={<FormFields />}
        show={open}
        onSubmit={() => doSubmit()}
        /> */}
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      {open && (
        <FormModal
          onCancel={() => setOpen(false)}
          show={open}
          Content={<FormFields />}
          onSubmit={() => doSubmit()}
          
        />
      )}
    </div>
  );
}
export default Main;
