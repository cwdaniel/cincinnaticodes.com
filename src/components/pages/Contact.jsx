import React from "react";
import { Button } from "../uicomps";
export class ContactComponent extends React.Component {
  render() {
    return (
      <div>
        <p>Use the form below to contact us.</p>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="email" />
        <textarea placeholder="Comment" />
        <Button
          buttonTile="Send"
          click={() => alert("we have got your message.")}
        />
      </div>
    );
  }
}
