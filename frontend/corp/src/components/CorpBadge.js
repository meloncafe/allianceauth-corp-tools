import React from "react";

import {
  Glyphicon,
  NavItem,
  Checkbox,
  NavDropdown,
  FormControl,
} from "react-bootstrap";
import { Form } from "react-bootstrap/lib/Navbar";
import { useMutation } from "react-query";
import { postCorporationRefresh } from "../apis/Corporation";

function CorpBadge() {
  const { mutate } = useMutation(postCorporationRefresh);

  return (
    <>
      <NavDropdown title="Add Corporate Token">
        <form
          action="/audit/corp/add_options"
          method="get"
          style={{ width: "350px" }}
        >
          <Form>
            <Checkbox
              style={{ width: "100%" }}
              defaultChecked={true}
              inline={true}
              id="s"
              name="s"
            >
              Structures
            </Checkbox>
            <br />
            <Checkbox
              style={{ width: "100%" }}
              defaultChecked={false}
              inline={true}
              id="a"
              name="a"
            >
              Assets
            </Checkbox>
            <h6>Assets Enables LO Levels in Bridges</h6>

            <Checkbox
              style={{ width: "100%" }}
              defaultChecked={false}
              inline={true}
              id="m"
              name="m"
            >
              Moons
            </Checkbox>
            <h6>Moons enable Active Observation Tracking</h6>

            <Checkbox
              style={{ width: "100%" }}
              defaultChecked={false}
              inline={true}
              id="w"
              name="w"
            >
              Wallets
            </Checkbox>
            <br />
            <br />
            <FormControl
              style={{ width: "100%" }}
              bsSize="small"
              type="submit"
              value="Add Token"
            />
          </Form>
        </form>
      </NavDropdown>
      <NavItem onClick={() => mutate()}>
        <Glyphicon glyph="refresh" />
      </NavItem>
    </>
  );
}

export default CorpBadge;
