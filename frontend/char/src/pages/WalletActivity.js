import React from "react";
import { Panel } from "react-bootstrap";
import { useQuery } from "react-query";
import { loadWalletActivity } from "../apis/Character";
import ErrorBoundary from "../components/ErrorBoundary";
import { PanelLoader } from "../components/PanelLoader";
import { ErrorLoader } from "../components/ErrorLoader";
import { ActivityChord } from "../components/ActivityChord";
import {
  BaseTable,
  SelectColumnFilter,
  textColumnFilter,
} from "../components/BaseTable";

const CharWalletActivity = ({ character_id }) => {
  const { isLoading, isFetching, error, data } = useQuery(
    ["wallet-activity", character_id],
    () => loadWalletActivity(character_id),
    {
      initialData: [],
      refetchOnWindowFocus: false,
    },
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "From",
        accessor: "fpn",
        Filter: textColumnFilter,
        filter: "text",
        Cell: (props) => (
          <a href={`https://zkillboard.com/search/${props.value}`}>
            {props.value}
          </a>
        ),
      },
      {
        Header: "From - Category",
        accessor: "firstParty.cat",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "To",
        accessor: "spn",
        Filter: textColumnFilter,
        filter: "text",
        Cell: (props) => (
          <a href={`https://zkillboard.com/search/${props.value}`}>
            {props.value}
          </a>
        ),
      },
      {
        Header: "To - Category",
        accessor: "secondParty.cat",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "Isk Movement",
        accessor: "value",
        Cell: (props) => <div>$ {props.value.toLocaleString()} </div>,
      },
      {
        Header: "Interaction Count",
        accessor: "interactions",
        Cell: (props) => <div> {props.value.toLocaleString()} </div>,
      },
    ],
    [],
  );

  if (isLoading) return <PanelLoader />;

  if (error) return <ErrorLoader />;

  return (
    <ErrorBoundary>
      <Panel.Body>
        <ActivityChord data={data} />
        <BaseTable {...{ isLoading, isFetching, data, columns, error }} />
      </Panel.Body>
    </ErrorBoundary>
  );
};

export default CharWalletActivity;
