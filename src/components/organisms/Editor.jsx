import React from "react";
import Link from "@material-ui/core/Link";
import Title from "../atoms/Title";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

function preventDefault(event) {
  event.preventDefault();
}

export default function Editor() {
  const onChange = (newValue) => {
    console.log("change", newValue);
  };

  const editorOptions = {
    enableBasicAutocompletion: false,
    enableLiveAutocompletion: false,
    enableSnippets: false,
    showLineNumbers: true,
    tabSize: 2,
  };

  return (
    <React.Fragment>
      <Title>Editor</Title>
      <AceEditor
        placeholder="Placeholder Text"
        mode="javascript"
        theme="monokai"
        name="blah2"
        // onLoad={this.onLoad}
        onChange={onChange}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={`function onLoad(editor) \n{ console.log("i've loaded"); }`}
        setOptions={editorOptions}
      />
      {/* <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div> */}
    </React.Fragment>
  );
}
