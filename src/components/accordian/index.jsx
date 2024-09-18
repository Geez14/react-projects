import { useState } from "react";
import data from "./data";
import "./style.css";
import MyButton from "../button";

export default function Accordian() {
  // the set part is use to set the value! its kinda setter and it will be use to modifiy the state of constant variable (not reference)!
  const [selected, set_selected] = useState(null);
  const [enable_multiselection, set_enable_multiselection] = useState(false);
  const [selections, set_selections] = useState([]);
  const [message, set_message] = useState("Enable");

  function handleSingleSelecion(content) {
    console.log("single selection", content);
    if (content !== selected) set_selected(content);
    else set_selected(null);
  }

  function handleMultipleSelections(content) {
    console.log("multi selection!", content);
    let cpmultiple = [...selections];
    // check weather the element exist or not! -1 else indexofcontent
    const index = cpmultiple.indexOf(content);
    // if the current index is present then remove from the selection!
    if (index !== -1) {
      cpmultiple.splice(index, 1);
    } else {
      cpmultiple.push(content);
    }
    // update the whole list!
    set_selections(cpmultiple);
  }

  function changeStateMultiSelection() {
    // if true then turn it
    if (enable_multiselection) {
      set_selections([]);
      set_selected(null);
    }
    set_enable_multiselection(!enable_multiselection);
    if (enable_multiselection) set_message("Enable");
    else set_message("Disable");
  }
  const accordianCard = (
    <div className="wrapper">
      <MyButton onClick={changeStateMultiSelection} name={message} />
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                enable_multiselection
                  ? handleMultipleSelections(item.id)
                  : handleSingleSelecion(item.id)
              }
              className="title"
            >
              <h3>{item.title}</h3>
              <span>+</span>
              <div className="content">
                {/* single select */}
                {selected === item.id || selections.indexOf(item.id) !== -1
                  ? item.content
                  : null}
              </div>
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
  return accordianCard;
}
