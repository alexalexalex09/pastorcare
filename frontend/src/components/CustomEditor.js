import React from "react";
//import { HtmlEditor, MenuBar } from "@aeaton/react-prosemirror";
//import { options, menu } from "@aeaton/react-prosemirror-config-default";
import { BoldExtension } from "remirror/extension/bold";
import { ItalicExtension } from "remirror/extension/italic";
import { UnderlineExtension } from "remirror/extension/underline";
import { StrikeExtension } from "remirror/extension/strike";
import { RemirrorProvider, useManager, useRemirror } from "remirror/react";

const Editor = () => {
  const { getRootProps, active, commands } = useRemirror({ autoUpdate: true });

  return (
    <div className="customEditor">
      <div className="customEditorMenu">
        <button
          onClick={() => commands.toggleBold()}
          style={{ fontWeight: active.bold() ? "bold" : undefined }}
        >
          <i className="fas fa-bold"></i>
        </button>
        <button
          onClick={() => commands.toggleItalic()}
          style={{ fontStyle: active.italic() ? "italic" : undefined }}
        >
          <i className="fas fa-italic"></i>
        </button>
        <button
          onClick={() => commands.toggleUnderline()}
          style={{
            textDecoration: active.underline() ? "underline" : undefined,
          }}
        >
          <i className="fas fa-underline"></i>
        </button>
        <button
          onClick={() => commands.toggleStrike()}
          style={{
            textDecoration: active.strike() ? "line-through" : undefined,
          }}
        >
          <i className="fas fa-strikethrough"></i>
        </button>
      </div>
      <div className="editor" {...getRootProps()} />
    </div>
  );
};

const CustomEditor = () => {
  const manager = useManager([
    new BoldExtension(),
    new ItalicExtension(),
    new UnderlineExtension(),
    new StrikeExtension(),
  ]);

  return (
    <RemirrorProvider manager={manager}>
      <Editor />
    </RemirrorProvider>
  );
};

export default CustomEditor;
