import React, { Component } from "react";
import { Modal } from "./Modal";
import { Invites } from "./Invites";
import { LeetCode100DaysChallenge } from "./LeetCode100DaysChallenge"

interface State {
  invites: string[];
  opened: boolean;
}

export class Root extends Component<{}, State> {
  public readonly state: State = {
    invites: [],
    opened: false
  };

  public toggle(opened: boolean) {
    this.setState({ opened });
  }

  public invite(name: string) {
    this.setState(({ invites }) => {
      invites.push(name);
      return { invites };
    });
  }

  public render() {
    return (
      <>
        <LeetCode100DaysChallenge />
        <button onClick={() => this.toggle(true)}>
          Open list
        </button>
        <Modal opened={this.state.opened} onClose={() => this.toggle(false)}>
          <Invites
            invites={this.state.invites}
            onAdd={this.invite.bind(this)}
          />
        </Modal>
      </>
    );
  }
}
