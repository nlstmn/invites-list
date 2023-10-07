import React, { Component } from "react";
import { Modal } from "./Modal";
import { Invites } from "./Invites";
import { LeetCode100DaysChallenge } from "./LeetCode100DaysChallenge"
import { PartTwo } from "./LeetCode100DaysChallenge/partTwo"
import { Manychat } from "./LeetCode100DaysChallenge/manychat"
import { VirtualScrolling } from "./LeetCode100DaysChallenge/virtualScrolling"
import { ReactQuery } from "./LeetCode100DaysChallenge/reactQuery"
import { ReactPortal } from "./LeetCode100DaysChallenge/reactPortal"
import { PropsDynamic } from "./LeetCode100DaysChallenge/propsDynamic"
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

interface State {
  invites: string[];
  opened: boolean;
}

const queryClient = new QueryClient()

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
        <QueryClientProvider client={queryClient}>
          <Router>
            <>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/challenge">Challenge</Link>
                  </li>
                  <li>
                    <Link to="/part-two">Part Two</Link>
                  </li>
                  <li>
                    <Link to="/manychat">Manychat</Link>
                  </li>
                  <li>
                    <Link to="/virtualscrolling">Virtual Scrolling</Link>
                  </li>
                  <li>
                    <Link to="/rquery">React Query</Link>
                  </li>
                  <li>
                    <Link to="/rportal">React Portal</Link>
                  </li>
                  <li>
                    <Link to="/propsdynamic">Rendering props for dynamic data fetching</Link>
                  </li>
                </ul>
              </nav>

              <Routes>
                <Route path="/challenge" element={<LeetCode100DaysChallenge />} />
                <Route path="/part-two" element={<PartTwo />} />
                <Route path="/" element={<Button variant="contained" onClick={() => this.toggle(true)}>Open list</Button>}>
                </Route>
                <Route path="/manychat" element={<Manychat />} />
                <Route path="/virtualscrolling" element={<VirtualScrolling />} />
                <Route path="/rquery" element={<ReactQuery />} />
                <Route path="/rportal" element={<ReactPortal />} />
                <Route path="/propsdynamic" element={<PropsDynamic />} />
              </Routes>

              {/*<Modal opened={this.state.opened} onClose={() => this.toggle(false)}>
            <Invites
              invites={this.state.invites}
              onAdd={this.invite.bind(this)}
            />
            </Modal>*/}
            </>
          </Router>
        </QueryClientProvider>
      </>
    );
  }
}
